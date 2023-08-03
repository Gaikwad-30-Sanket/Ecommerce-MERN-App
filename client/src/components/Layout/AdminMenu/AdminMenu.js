import React from "react";
import { NavLink } from "react-router-dom";
import "./adminMenu.css"
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group ">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
        
        
       
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
