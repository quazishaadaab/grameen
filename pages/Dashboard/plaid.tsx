import React, { useEffect, useContext, useCallback } from "react";
import Link from "../../plaid/src/Components/Link";



import Context from "./context";


const Plaid = () => {
  const { linkSuccess, isItemAccess, dispatch } = useContext(Context);

  const getInfo = useCallback(async () => {
    const response = await fetch("/api/info", { method: "POST" });
    if (!response.ok) {
      dispatch({ type: "SET_STATE", state: { backend: false } });
      return { paymentInitiation: false };
    }
    const data = await response.json();
    const paymentInitiation: boolean = data.products.includes(
      "payment_initiation"
    );
    dispatch({
      type: "SET_STATE",
      state: {
        products: data.products,
      },
    });
    return { paymentInitiation };
  }, [dispatch]);

  const generateToken = useCallback(
    async (paymentInitiation :any) => {
      const path = paymentInitiation
        ? "/api/create_link_token_for_payment"
        : "/api/create_link_token";
      const response = await fetch(path, {
        method: "POST",
      });
      if (!response.ok) {
        dispatch({ type: "SET_STATE", state: { linkToken: null } });
        return;
      }
      const data = await response.json();
      if (data) {
        if (data.error != null) {
          dispatch({
            type: "SET_STATE",
            state: {
              linkToken: null,
              linkTokenError: data.error,
            },
          });
          return;
        }
        dispatch({ type: "SET_STATE", state: { linkToken: data.link_token } });
      }
      localStorage.setItem("link_token", data.link_token); //to use later for Oauth
    },
    [dispatch]
  );

  useEffect(() => {
    const init = async () => {
      accounts()
      const { paymentInitiation } = await getInfo(); // used to determine which path to take when generating token
      // do not generate a new token for OAuth redirect; instead
      // setLinkToken from localStorage
      if (window.location.href.includes("?oauth_state_id=")) {
        dispatch({
          type: "SET_STATE",
          state: {
            linkToken: localStorage.getItem("link_token"),
          },
        });
        return;
      }
      generateToken(paymentInitiation);
    };
    init();
  }, [dispatch, generateToken, getInfo]);



const accounts =async()=>{
try{
  const response = await fetch(`/api/balance`, { method: "GET" });
  const data = await response.json();



  console.log(data)
}catch{
console.log('error has occured')  ;
}


}


  return (
 <div>


<Link/>
 </div>
  );
};

export default Plaid;
