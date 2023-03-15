import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./constants";

const App = () => {
  console.log(localStorage.getItem('token'));

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
};

export default App;