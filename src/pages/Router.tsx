import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import TodoPage from "./TodoPage";
export default function Router() {
  const location = useLocation();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && location.pathname !== "/todo") {
      navigator("/todo");
    }
    if (!token && location.pathname === "/todo") {
      navigator("/signin");
    }
    setLoading(false);
  }, []);

  return loading ? (
    <></>
  ) : (
    <Routes>
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/" element={<Navigate to="/signin" />}></Route>
    </Routes>
  );
}
