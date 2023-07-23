import React from "react";
import Layout from "../../components/Layout/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "./contact.css"
const Contact = () => {
  return (
    <Layout title={"Contact us"} >
      <div className="row contactus cpage-container">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg" // images are present in public folder, for to use public directory contains there is no need to import
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 ">
          <h1 className=" p-2   contactUp-title">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
