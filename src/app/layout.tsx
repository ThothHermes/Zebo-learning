import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Zebo-Learning - Elevate Learning with Engaging Videos',
  description: 'Create and share engaging educational videos with Zebo-Learning. Enhance knowledge retention and make learning fun and interactive.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 