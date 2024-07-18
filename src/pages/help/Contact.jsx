import { Form, redirect, useActionData } from "react-router-dom";

// Action function
export async function contactAction({ request }) {
  console.log(request);

  const formData = await request.formData();

  const submittedData = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log(submittedData);

  // Send a post request
  if (submittedData.message.length < 10)
    return { errorMsg: "Your message must be at least 10 characters long!" };

  // Redirect the user
  return redirect("/");
}

function Contact() {
  const actionData = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>

      <Form method="post" action="/help/contact">
        <label htmlFor="email">Your email:</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="message">Your message:</label>
        <textarea name="message" id="message" required></textarea>

        <button type="submit">Submit</button>

        {actionData && actionData.errorMsg && <p>{actionData.errorMsg}</p>}
      </Form>
    </div>
  );
}

export default Contact;
