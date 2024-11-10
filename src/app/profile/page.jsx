import './profile.css';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Profile() {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="main">
      <form className="form">
        <img
          className="profile"
          src={user?.picture}
          alt="Profile"
          width={150}
          height={150}
        />
        <div className="name">
          <label>
            <span>First Name:</span>
            <input
              type="text"
              name="first name"
              value={user?.name.split(' ')[0]}
            />
          </label>
          <label>
            <span>Last Name:</span>
            <input
              type="text"
              name="last name"
              value={user?.name.split(' ')[1]}
            />
          </label>
        </div>

        <label>
          Email:
          <input type="email" name="email" value={user?.email} />
        </label>
      </form>
    </div>
  );
}
