import { getSession } from '@auth0/nextjs-auth0';
import Login from '../../login';
import Logout from '../../logout';

export default async function User() {
  const session = await getSession();
  const user = session?.user;

  return user ? <Logout /> : <Login />;
}
