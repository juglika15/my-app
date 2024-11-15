import '../globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Providers } from './providers';

export const metadata = {
  title: 'Dune',
  description: 'Web site created with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body className="cont">
          <Providers>
            <div id="root">{children}</div>
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
