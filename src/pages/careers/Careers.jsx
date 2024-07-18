import { useLoaderData, Link } from "react-router-dom";

// Loader function
export async function careersLoader() {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) throw new Error("Couldn't fetch the careers information!");

  return response.json();
}

function Careers() {
  const careersData = useLoaderData();

  return (
    <div className="careers">
      {careersData.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>

          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export default Careers;
