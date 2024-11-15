import { getSession, Session, Claims } from '@auth0/nextjs-auth0';
import Profile from './profile';

export default async function ProfilePage() {
  // Retrieve the session, which includes user data
  const session: Session | null | undefined = await getSession();

  // Extract the user from the session or set it to null
  const user: Claims | null = session?.user || null;

  return <Profile user={user} />;
}
