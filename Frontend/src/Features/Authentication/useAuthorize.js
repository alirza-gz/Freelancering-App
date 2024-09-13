import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation(); //* pathname => /owner/projects

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  let isAuthorized = false;

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { isAuthenticated, isAuthorized, user, isLoading, isVerified };
}
