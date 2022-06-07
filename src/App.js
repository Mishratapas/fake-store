import {Routes, Route} from "react-router-dom";

import {
  Home,
  Products,
  About,
  ProductInfo,
  Contact,
  Cart,
  SignUp,
  ProtectedRoute,
  Navbar,
} from "./components";
import "./App.css";
import LogIn2 from "./components/Validation/LogIn2";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn2 />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
