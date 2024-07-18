import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
  const currentLocation = useLocation();

  let currentURL = "";

  const crumbs = currentLocation.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentURL += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentURL}>{crumb}</Link>
        </div>
      );
    });

  // "/help/contact/" --> ["", "help", "contact", ""] --> ["help", "contact"]

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
