import { useLogout } from "../../hooks/useLogout";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

export default function Home() {
  const { logout, isPending } = useLogout();
  // if (isPending) {
  //   return <LoadingSpinner />;
  // }
  return (
    <div>
      {isPending && <LoadingSpinner />}

      <h3> Home Page</h3>
      <p>User login successfully!</p>
    </div>
  );
}
