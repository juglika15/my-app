import { getSession } from '@auth0/nextjs-auth0';
import Profile from './Profile';

export default async function ProfilePage() {
  const session = await getSession();
  const user = session?.user || null;

  return <Profile user={user} />;
}
