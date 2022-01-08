import React, { useState } from "react";
import "./Forget.css";
import { useForget } from "../../hooks/useForget";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import CommonSnackbar from "../../common/Snackbar";

function Forget() {
  const [email, setemail] = useState("");
  const { forget, error, isPending } = useForget();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    forget(email);
  };

  let snackbar;
  
  console.log('20',isPending,error)
  if (!isPending && !error) {
    console.log("hyy")
    snackbar = (
      <CommonSnackbar message="Check your mail" statusCode="200" />
    );
  }
  if (!isPending && error) {
    snackbar = <CommonSnackbar message={error} statusCode="400" />;
  }
  if (isPending && !error) {
    return <LoadingSpinner />;
  }
  return (
    <form onSubmit={handleSubmit} className={"login-form"}>
      <h2>Forget</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
          value={email}
        />
      </label>
      <button className="btn">send</button>
      {/* {!isPending && <button className="btn">send</button>}
        <div
          style={{
            color: "darkgreen",
            alignItems: "center",
            textShadowRadius: 10,
          }}
        >
          Check you mail
        </div>
      ) : (
        ""
      ) */}
      {snackbar}

      {/* {error && <p>{error}</p>} */}
    </form>
  );
}

export default Forget;
