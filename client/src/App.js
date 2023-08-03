import { Routes, Route } from "react-router-dom"; // Routes it's like a container inside that we keep Route
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import Pagenotfound from "./pages/Pagenotfound/Pagenotfound";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Dashboard from "./pages/user/Dashboard/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct/CreateProduct";
import Users from "./pages/Admin/Users/Users";
import Profile from "./pages/user/Profile/Profile";
import Products from "./pages/Admin/Products/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct/UpdateProduct";
import Search from "./pages/Search/Search";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Categories from "./pages/Categories/Categories";
import CategoryProduct from "./pages/CategoryProduct/CategoryProduct";
import CartPage from "./pages/CartPage/CartPage";
import AdminMenu from "./components/Layout/AdminMenu/AdminMenu";
// import AdminOrders from "./pages/Admin/AdminOrders";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* for empty path HomePage component will run*/}
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>{/* we are making here nested routes, first PrivateRoute will be check after only that nested routes will be executed */}
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>{/* first we check is the admin is authenticated by AdminRoute, and only after that below routes will be checked */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} /> {/* if there is random path then Pagenotfound component will run  */}
      </Routes>
    </>
  );
}

export default App;
