// import React from 'react'

// const Login = () => {
//   return (
//     <>
//     <form>
 
//   <h1 className="h3 mb-3 fw-normal">Please sign in</h1>{" "}
//   <div className="form-floating">
//     {" "}
//     <input
//       type="email"
//       className="form-control"
//       id="floatingInput"
//       placeholder="name@example.com"
//     />{" "}
//     <label htmlFor="floatingInput">Email address</label>{" "}
//   </div>{" "}
//   <div className="form-floating">
//     {" "}
//     <input
//       type="password"
//       className="form-control"
//       id="floatingPassword"
//       placeholder="Password"
//     />{" "}
//     <label htmlFor="floatingPassword">Password</label>{" "}
//   </div>{" "}
//   <div className="form-check text-start my-3">
//     {" "}
//     <input
//       className="form-check-input"
//       type="checkbox"
//       defaultValue="remember-me"
//       id="checkDefault"
//     />{" "}
//     <label className="form-check-label" htmlFor="checkDefault">
//       Remember me
//     </label>{" "}
//   </div>{" "}
//   <button className="btn btn-primary w-100 py-2"  type="submit"
//   >
//     Sign in
//   </button>{" "}
//   <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>{" "}
// </form>
//     </>
//   )
// }

// export default Login

import React from 'react'
import { getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { app } from "../firebase/firebase";
// import { app } from "../firebase"; // ⚠️ Make sure this is correct

const Login = () => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  return (
    <>
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputname@example.com">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue="remember-me"
            id="checkDefault"
          />
          <label className="form-check-label" htmlFor="checkDefault">
            Remember me
          </label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>

        {/* 🔻 Google Sign-In Button */}
        <button
          type="button"
          className="btn btn-danger w-100 py-2 mt-2"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>

        <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
      </form>
    </>
  );
};

export default Login;
