import React, { Fragment ,useEffect} from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import {clearErrors, getProduct} from "../../actions/productAction";
import {useSelector} from "react-redux";
import { useDispatch} from 'react-redux'
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";



const Home = () => {
  const alert =useAlert();
const dispatch =useDispatch();
const {loading ,error,products}=useSelector(
  (state)=>state.products
)

useEffect(()=>{
  if(error){
     alert.error(error);
     dispatch(clearErrors());
  }
  dispatch(getProduct());
},[alert, dispatch, error]);

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="E-COMMERCE" />

        <div className="banner">
        <p><h1>Welcome to ZenGee.</h1>
          Shop your Heart out</p>

          <h2>FIND AMAZING PRODUCTS BELOW</h2>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
                <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
     )}
   </Fragment>
  );
};



export default Home;