import React from "react";
import AdminMenu from "../../../components/Layout/AdminMenu/AdminMenu";
import Layout from "../../../components/Layout/Layout/Layout";
import { useAuth } from "../../../context/auth";
import "./adminDashboard.css"
const AdminDashboard = () => { 
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />c
          </div>
          <div className="col-md-9">
            <div className="ad-card">
              <h3> <span>Admin Name</span> : {auth?.user?.name}</h3>
              <h3> <span>Admin Email</span> : {auth?.user?.email}</h3>
              <h3> <span>Admin Contact</span> : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
