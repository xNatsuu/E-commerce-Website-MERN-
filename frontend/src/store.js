import {combineReducers,applyMiddleware} from "redux";
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
// import { persistReducer, persistStore } from 'redux-persist';
import {composeWithDevTools} from "redux-devtools-extension";
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from "./reducers/productReducer";
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";
// import storage from "redux-persist/lib/storage"
// import {configureStore} from "@reduxjs/toolkit"

// const persistConfig={
//   key:'root',
//   storage,

// }

const reducer =combineReducers({
    products:productsReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer,
    orderDetails:orderDetailsReducer,
    newReview: newReviewReducer,
    newProduct:newProductReducer,
    product: productReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
})


// const persistedReducer=persistReducer(persistConfig,reducer)



let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

  const middleWare=[thunk];
  const store=createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleWare)))
  
  export default store;



