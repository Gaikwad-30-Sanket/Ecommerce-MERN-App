import React from "react";
// import Layout from "../../components/Layout/Layout";
import Layout from "../../../components/Layout/Layout/Layout";
import UserMenu from "../../../components/Layout/UserMenu/UserMenu";
import { useAuth } from "../../../context/auth";
import "./dashboard.css"
const Dashboard = () => {     // we use rafce shortcut to crate functional component
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Gaikwad Enterprises"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="ad-card">
              <h3><span>User Name</span> : {auth?.user?.name}</h3>
              <h3><span>User Email</span> : {auth?.user?.email}</h3>
              <h3><span>User address</span> : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
