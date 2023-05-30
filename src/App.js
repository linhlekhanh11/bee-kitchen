import "./categories.styles.scss";
import HomePage from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";



const Shop = () => {
  return <h1>Hello</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
