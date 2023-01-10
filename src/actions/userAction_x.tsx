export {};
// import {
//   USER_LOGIN_FAIL,
//   USER_LOGIN_SUCCESS,
// } from "../constants/userConstants";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
// import { RootState } from "../store_x";

// export const login =
//   (
//     email: string,
//     password: string
//   ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
//   async (
//     dispatch: ThunkDispatch<RootState, unknown, AnyAction>
//   ): Promise<void> => {
//     try {
//       dispatch({
//         type: "USER_LOGIN_SUCCESS",
//       });

//       // fetch data from backend
//   const response = await fetch("http://localhost:3000/users/sign_in", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         email,
//         password,
//       },
//     }),
//   });

//       const data = await response.json();
//       const userData = { email: data.email };
//       console.log(response.headers.get("Authorization"));
//       localStorage.setItem("token", response.headers.get("Authorization")!);
//   .then((res) => {
//     if (res.ok) {
//       console.log(res.headers.get("Authorization"));
//       localStorage.setItem("token", res.headers.get("Authorization")!);
//       const data = await res.json();
//       const
//       return res.json();
//     } else {
//       return res.text().then((text) => Promise.reject(text));
//     }
//   })
//   .then((json) => console.dir(json))
//   .catch((err) => console.error(err));

//       // pass data to reducer in the payload of the dispatch
//       dispatch({
//         type: USER_LOGIN_SUCCESS,
//         payload: userData,
//       });
//     } catch (error) {
//       //USER LOGIN FAIL
//       dispatch({
//         type: USER_LOGIN_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };
