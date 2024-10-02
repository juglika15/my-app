import "./Profile.css";

export default function Profile() {
  return (
    <div className="main">
      <form className="form">
        <div className="name">
          <label>
            <span>First Name:</span>
            <input type="text" name="first name" value="John" />
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" name="last name" value="Doe" />
          </label>
        </div>
        <label>
          <span>Image URL:</span>
          <input type="url" name="image" />
        </label>
        <label>
          Email:
          <input type="email" name="email" value="johndoe@gmail.com" />
        </label>
      </form>
    </div>
  );
}
