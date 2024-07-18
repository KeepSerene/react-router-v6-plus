import { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [user, setUser] = useState("Mario");

  if (!user) return <Navigate to="/" replace={true} />;

  return (
    <div className="About">
      <h2>About Us</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        dolorem obcaecati a harum unde debitis ipsam deserunt. Alias, laboriosam
        perspiciatis iusto ducimus sit quo, sapiente voluptates consectetur
        consequatur praesentium quaerat.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        praesentium ratione harum, dolor id illo facilis quae repellat quis
        ipsa, rem vitae distinctio dolore! Quod ullam consectetur quis eveniet
        amet?
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ipsam
        dolores deserunt tenetur nostrum! Nobis cumque totam possimus,
        perferendis ut quae magni assumenda deserunt explicabo voluptate id
        dolore expedita molestiae!
      </p>

      <p style={{ fontStyle: "italic" }}>User: {user}</p>

      <button type="button" onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  );
}

export default About;
