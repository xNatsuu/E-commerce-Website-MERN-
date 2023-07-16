import Header from "./component/layout/Header/Header.js"
import './App.css';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import WebFont from "webfontloader"
import React, { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js"
import store from "./store.js";
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js"

import UpdateProfile from "./component/User/UpdateProfile.js"
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js"
import MyOrders from "./component/Order/MyOrders.js"
import OrderDetails from "./component/Order/OrderDetails.js"
import Dashboard from "./component/admin/Dashboard.js"
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct.js"
import UpdateProduct from "./component/admin/UpdateProduct.js";
import OrderList from "./component/admin/OrderList.js"
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UsersList from "./component/admin/UsersList.js";
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
// import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
const [stripeApiKey, setStripeApiKey]=useState("process.env.STRIPE_API_KEY");


async function getStripeApiKey() {
  const { data } = await axios.get("/api/v1/stripeapikey");

  setStripeApiKey(data.stripeApiKey);
}
// const stripeApiKey=process.env.STRIPE_API_KEY;

  useEffect(() => {
  WebFont.load({
    google:{
      families: ['Open Sans', 'Roboto'],
    },
  });
// console.log(getStripeApiKey());
  store.dispatch(loadUser());
  getStripeApiKey();
  }, [stripeApiKey]);
  return (
    <BrowserRouter>
        <Header/>
        {isAuthenticated && <UserOptions user={user}/>}

<Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>

              <Route  path="/" element={<Home/>}/>
              <Route  path="/product/:id" element={<ProductDetails/>}/>
              <Route  path="/products" element={<Products/>}/>
              <Route path="/products/:keyword" element={<Products/>}/>
              <Route  path="/search" element={<Search/>}/>
              <Route  path="/contact" element={<Contact/>}/>
              <Route  path="/about" element={<About/>}/>


           
                         <Route path="/account" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><Profile/></ProtectedRoute>
              }/>
                  <Route path="/me/update" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><UpdateProfile/></ProtectedRoute>
              }/>
                  <Route path="/password/update" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><UpdatePassword/></ProtectedRoute>
              }/>
     

              <Route exact path="/password/forgot" element={<ForgotPassword/>}/>
              <Route exact path="/password/reset/:token" element={<ResetPassword/>}/>
              <Route exact path="/login" element={<LoginSignUp/>}/>
              <Route exact path="/cart" element={<Cart/>}/>

              <Route path="/shipping" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><Shipping/></ProtectedRoute>
              }/>    
               <Route path="/success" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><OrderSuccess/></ProtectedRoute>
              }/>   
              <Route path="/process/payment" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment/>
                  </Elements>
               </ProtectedRoute>
              }/>
                     <Route path="/orders" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><MyOrders/></ProtectedRoute>
              }/>
                <Route path="/order/confirm" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><ConfirmOrder/></ProtectedRoute>
              }/>
                  <Route path="/order/:id" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}><OrderDetails/></ProtectedRoute>
              }/>


              
              <Route path="/admin/dashboard" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <Dashboard/></ProtectedRoute>
              }/>
               <Route path="/admin/products" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <ProductList/></ProtectedRoute>
              }/>
                 <Route exact path="/admin/product" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <NewProduct/></ProtectedRoute>
              }/>
              <Route exact path="/admin/product/:id" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <UpdateProduct/></ProtectedRoute>
              }/>
              <Route exact path="/admin/orders" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <OrderList/></ProtectedRoute>
              }/>
               <Route exact path="/admin/order/:id" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <ProcessOrder/></ProtectedRoute>
              }/>
              <Route exact path="/admin/users" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <UsersList/></ProtectedRoute>
              }/>
               <Route exact path="/admin/user/:id" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <UpdateUser/></ProtectedRoute>
              }/>
              <Route exact path="/admin/reviews" element={
                <ProtectedRoute isAdmin={false} 
                isAuthenticated={isAuthenticated} >
                <ProductReviews/></ProtectedRoute>
              }/>

          
        
        {/* <Route element={
                window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}

              
              
              
        </Routes>
        </Elements>
       
        <Footer/>
    </BrowserRouter>
      
  );
}

export default App;
