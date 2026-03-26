// src/App.tsx
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  if (isAuth) {
    return <Dashboard />;
  }

  return (
    <div>
      {isLogin ? (
        <>
          <Login onLogin={() => setIsAuth(true)} />
          <p onClick={() => setIsLogin(false)}>
            Don't have an account? Register
          </p>
        </>
      ) : (
        <>
          <Register switchToLogin={() => setIsLogin(true)} />
          <p onClick={() => setIsLogin(true)}>
            Already have an account? Login
          </p>
        </>
      )}
    </div>
  );
}

export default App;