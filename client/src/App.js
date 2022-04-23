import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
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

import { loadUser } from "./actions/authAction";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    // console.log(store.dispatch(loadUser()));
  }, [store.getState().auth]);
  return (
    <div className="App">
      <Switch>
        {store.getState().auth?.token ? (
          <>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/deals" component={Deal} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/user-profile" component={Profile} />
            <Route exact path="/sell-product" component={AddProduct} />
            {/* <Route exact path="/ad-pricing" component={AdPricing} /> */}
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/help" component={HelpUs} />
            {/* admin routes */}
            <Route exact path="/admin-dashboard" component={AdminDashboard} />
            <Route exact path="/admin-user" component={AdminUser} />
            <Route exact path="/admin-category" component={AdminCategory} />
            <Route
              exact
              path="/admin-subcategory"
              component={AdminSubCategory}
            />
            <Route exact path="/admin-help" component={AdminHelp} />

            <Redirect to="/" />
          </>
        ) : (
          <>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/help" component={HelpUs} />

            {/* <Redirect to="/signin" /> */}
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
