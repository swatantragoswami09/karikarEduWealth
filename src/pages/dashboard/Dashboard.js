import { useLogout } from "../../hooks/useLogout";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

export default function Dashboard() {
  const { logout, isPending } = useLogout();
  // if (isPending) {
  //   return <LoadingSpinner />;
  // }
  return (
    <div>
      {isPending && <LoadingSpinner />}

      <h3> Dashboard Page</h3>
      <p>User login successfully!</p>
    </div>
  );
}
