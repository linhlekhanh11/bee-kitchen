import "./categories.styles.scss";
import HomePage from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./shop/shop.component";
import Checkout from "./components/routes/check-out-page/checkout-page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

  