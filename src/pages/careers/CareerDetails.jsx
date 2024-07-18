import { useLoaderData, useParams } from "react-router-dom";

// Loader function
export async function careerDetailsLoader({ params }) {
  const { careerDetailsId } = params;

  const response = await fetch(
    `http://localhost:4000/careers/${careerDetailsId}`
  );

  if (!response.ok)
    throw new Error("Couldn't find the requested career details!");

  return response.json();
}

function CareerDetails() {
  const careerDetails = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {careerDetails.title}</h2>

      <p>Starting salary: ${careerDetails.salary}</p>

      <p>Location: {careerDetails.location}</p>

      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis autem
        consectetur hic consequatur necessitatibus incidunt beatae repellendus
        modi dolore iure.
      </div>
    </div>
  );
}

export default CareerDetails;
