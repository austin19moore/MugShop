import Item from "./pages/Item";
import Home from "./pages/Home";
import Help from "./pages/Help";
import OrderHistory from "./pages/OrderHistory";
import ItemList from "./pages/ItemList";
import ShoppingCart from "./pages/ShoppingCart";
import SignUpSignIn from "./pages/SignUpSignIn";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import AdminOrderHistory from "./pages/AdminOrderHistory";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products/" element={<ItemList/>}/>
            <Route path="/products/:id" element={<Item/>}/>
            <Route path="/help-center" element={<Help/>}/>
            <Route path="/order-history" element={<OrderHistory/>}/>
            <Route path="/admin" element={<AdminOrderHistory/>}/>
            <Route path="/cart" element={user ? <ShoppingCart/> : <SignUpSignIn/>}/>
            <Route path="/account-log-in-sign-up" element={user ? <Home/> : <SignUpSignIn/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
    </Router>
  )
};

export default App;
