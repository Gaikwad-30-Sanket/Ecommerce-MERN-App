import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {  //the parameters we are getting are called props
  return (
    <div>
      <Helmet> {/* HELMET tag is use for SEO there is no need of this here, we used it to give title  */}
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
       <Header /> {/*we called it from Layout folder, at this position it will show Header.js file */}
         <main style={{ minHeight: "75vh" }}>
        <Toaster />

        {children} {/* we have taken children as a props at this position, page will show children's functionality */}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = { // if we not get the props then, then below will be the default paramters
  title: "Gaikwad Enterprises",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Sanket Gaikwad",
};

export default Layout;
