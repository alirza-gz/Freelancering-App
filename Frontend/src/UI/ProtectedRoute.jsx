import React, { useEffect } from "react";
import useAuthorize from "../Features/Authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //* 1. load the authenticated user
  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();

  //* 2. check if is authorized or not, check if is authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است!");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/notAccess", { replace: true });
  }, [isAuthenticated, isAuthorized, isVerified, navigate, isLoading]);

  //* 3. while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  //* 4. if user isAuthenticated and isAuthorized => render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
