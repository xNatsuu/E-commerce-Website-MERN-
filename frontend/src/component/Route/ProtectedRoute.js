// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({
//   isAuthenticated,
//   children,
//   adminRoute,
//   isAdmin,
//   redirect = "/login",
//   redirectAdmin = "/profile",
// }) => {
//   if (!isAuthenticated) {
//     return <Navigate to={redirect} />;
//   }

//   if (adminRoute && !isAdmin) {
//     return <Navigate to={redirectAdmin} />;
//   }

//   return children ? children : <Outlet />;
// };

// export default ProtectedRoute;
    // <Fragment>
    //   {loading === false && (
    //     <Route
    //       {...rest}
    //       render={(props) => {
    //         if (isAuthenticated === false) {
    //           return <Navigate to="/login" />;
    //         }

    //         if (isAdmin === true && user.role !== "admin") {
    //           return <Navigate to="/login" />;
    //         }

    //         return <Component {...props} />;
    //       }}
    //     />
    //   )}
    // </Fragment>
//     import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import {  Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
   
//      <Routes>
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Navigate to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
      
//       </Routes>
    
//   );
// };

// export default ProtectedRoute;

      import React from "react";
  import { Navigate, Outlet } from "react-router-dom";
  import { useSelector } from "react-redux";

  const ProtectedRoute = ({
    
    children,

    isAdmin,

  }) => {
    const {  isAuthenticated, user } = useSelector((state) => state.user);
    
    if (!isAuthenticated) {
      return <Navigate to="/login"/>;
    }

    if (user.role!=="admin" && isAdmin) {
      return <Navigate to="/account"/>;
    }

    return children ? children : <Outlet />;
  };

  export default ProtectedRoute;