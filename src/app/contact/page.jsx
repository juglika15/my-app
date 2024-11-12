import './contact.css';

export default function Contact() {
  return (
    <main className="main dark:bg-orange-300">
      <h1>Contact Us</h1>
      <p>Phone: +995 555 123 343</p>
      <p>Email: contact@dune.com</p>

      <h2>Send Us a Message</h2>
      <form className="form dark:bg-cyan-700  ">
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
          <textarea name="message" placeholder="Write to us..." />
        </label>
        <button
          type="submit"
          className="button  hover:text-black dark:bg-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-white"
        >
          Send
        </button>
      </form>
    </main>
  );
}
