import { useLogout } from "../../hooks/useLogout";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSignup } from "../../hooks/useSignup";
import CommonSnackbar from "../../common/Snackbar";

export default function Dashboard() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { signup, isPending, error } = useSignup();
  // if (isPending) {
  //   return <LoadingSpinner />;
  // }
  console.log("user==>", user.displayName);
  let snackbar;
  if (isPending) {
    return <LoadingSpinner />;
  }
  if (!isPending && !error) {
    snackbar = (
      <CommonSnackbar
        message={`${user.displayName} Login successfully`}
        statusCode="200"
      />
    );
  }
  if (!isPending && error) {
    snackbar = <CommonSnackbar message={error} statusCode="400" />;
  }
  return (
    <div>
      {isPending && <LoadingSpinner />}

      <h3> Dashboard Page</h3>
      <p>User login successfully!</p>
      {user && snackbar}
    </div>
  );
}
