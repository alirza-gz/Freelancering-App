import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Services/AuthService";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
  const { user } = data || {};
  return { isLoading, user };
}
