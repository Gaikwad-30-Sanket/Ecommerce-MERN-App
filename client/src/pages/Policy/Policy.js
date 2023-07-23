import React from "react";
import Layout from "../../components/Layout/Layout/Layout";
import "./policy.css"

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}  >
      <div className="row contactus policy policy-container">
      <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <div className="privacy-policy-content">
        <p>
          At Gaikwad-Enterprices, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide while using our website.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information, such as your name, email address, shipping address, and payment details, when you make a purchase or register an account on our website. Additionally, we may collect non-personal information, such as your IP address, browser type, and device information, to improve our services and enhance your shopping experience.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          The information we collect is used to process your orders, provide customer support, and personalize your shopping experience. We may also use your email address to send you promotional offers, newsletters, and updates about our products and services. You can opt-out of receiving marketing emails at any time by clicking the unsubscribe link provided in the email.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. However, we may share your data with trusted service providers who assist us in operating our website, processing payments, and delivering orders. These service providers are obligated to maintain the confidentiality and security of your information.
        </p>
        
        <h2>Cookie Policy</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze website traffic, remember your preferences, and improve our services. By using our website, you consent to the use of cookies in accordance with our Cookie Policy.
        </p>
        
        <div className="contact-info">
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us 
          </p>
        </div>
      </div>
    </div>
      </div>
    </Layout>
  );
};

export default Policy;
