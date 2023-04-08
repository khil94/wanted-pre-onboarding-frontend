import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Todos from "../pages/Todos";
import SignUp from "../pages/SignUp";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

export default function Gate() {
  const loc = useLocation();
  const nav = useNavigate();
  const [judging, setJudging] = useState(true);

  useEffect(() => {
    const key = localStorage.getItem("pre-onboarding-key");
    if (key && loc?.pathname !== "/todo") {
      nav("/todo");
    }
    if (!key && loc?.pathname === "/todo") {
      nav("/signin");
    }
    setJudging(false);
  }, []);

  return judging ? (
    <></>
  ) : (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/todo" element={<Todos />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
