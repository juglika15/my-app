import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '../global.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: 'Dune',
  description: 'Web site created with Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="container">
          <Header />
          <div id="root">{children}</div>
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
