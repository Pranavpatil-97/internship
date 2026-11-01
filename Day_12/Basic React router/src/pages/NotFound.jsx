import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! This page doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;