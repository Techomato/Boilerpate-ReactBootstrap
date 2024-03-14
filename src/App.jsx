import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route } from "react-router";
// import { Login } from "./components/Login/login";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Container } from "react-bootstrap";

// import { Register } from "./components/Register/register";
// import Dashboard from "./components/Dashboard/dashboard";

// function PrivateRoute({ children }) {
//   const userTokenCheck = localStorage.getItem("token");
//   const auth = userTokenCheck ? true : false;
//   return auth ? children : <Navigate to="/signin" />;
// }

function App() {
  return (
    <Router>
      <Header />
      <Container>Test ssssdasdsaContainner</Container>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

      {/* <Route
          path="/dashboard/:id"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

      {/* </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
