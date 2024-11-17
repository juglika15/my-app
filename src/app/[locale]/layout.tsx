import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import '../../globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Providers } from '../providers';

export const metadata = {
  title: 'Dune',
  description: 'Web site created with Next.js.',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'ka' };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}
