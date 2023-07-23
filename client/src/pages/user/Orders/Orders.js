import React, { useState, useEffect } from "react";
import UserMenu from "../../../components/Layout/UserMenu/UserMenu";
// import Layout from "./../../components/Layout/Layout";
import Layout from "../../../components/Layout/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import moment from "moment";

const Orders = () => {
  
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders will be showed here</h1>
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
