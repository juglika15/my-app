import "./Contact.css";

export default function Contact() {
  return (
    <div className="content">
      <h1>Contact Us</h1>
      <p>Phone: +995 555 123 343</p>
      <p>Email: contact@dune.com</p>

      <h2>Send Us a Message</h2>
      <form className="form">
        <div className="name">
          <label>
            <span>First Name:</span>
            <input type="text" name="name" />
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" name="name" />
          </label>
        </div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Write us..." />
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}
