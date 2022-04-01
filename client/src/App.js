import { Redirect, Route, Switch } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPasswordPage/ForgotPassword";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";
import HomePage from "./pages/HomePage/Home";
import SignIn from "./pages/SignInPage/Signin";
import SignUp from "./pages/SignUpPage/Signup";
import Profile from "./pages/ProfilePage/Profile";
import Wishlist from "./pages/WishlistPage/Wishlist";
import Deal from "./pages/DealPage/Deal";
import HelpUs from "./pages/HelpPage/Help";
import AddProduct from "./pages/AddProductPage/AddProduct";
import AdPricing from "./pages/AdPricingPage/AdPricing";
import ProductDetails from "./pages/ProductDetailsPage/ProductDetails";

// admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUser from "./pages/Admin/AdminUser";
import AdminCategory from "./pages/Admin/AdminCategory";
import AdminSubCategory from "./pages/Admin/AdminSubCategory";
import AdminHelp from "./pages/Admin/AdminHelp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/user-profile" component={Profile} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/deals" component={Deal} />
        <Route exact path="/help" component={HelpUs} />
        <Route exact path="/sell-product" component={AddProduct} />
        <Route exact path="/ad-pricing" component={AdPricing} />
        <Route exact path="/product/:id" component={ProductDetails} />

        {/* admin routes */}
        <Route exact path="/admin-dashboard" component={AdminDashboard} />
        <Route exact path="/admin-user" component={AdminUser} />
        <Route exact path="/admin-category" component={AdminCategory} />
        <Route exact path="/admin-subcategory" component={AdminSubCategory} />
        <Route exact path="/admin-help" component={AdminHelp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
