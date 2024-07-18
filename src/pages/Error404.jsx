import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-404">
      <h2>Page not found!</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe minima
        adipisci animi earum voluptatibus deleniti quam ex, tempore quis dicta.
      </p>

      <p>
        Back to <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}

export default Error404;
