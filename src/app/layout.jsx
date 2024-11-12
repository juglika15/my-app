import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '../globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Providers } from './providers';

export const metadata = {
  title: 'Dune',
  description: 'Web site created with Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body className="cont">
          <Providers>
            <Header />
            <div id="root">{children}</div>
            <Footer />
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
