import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'John Elton — Business & Strategy Portfolio',
  description: 'John Elton is a final-year Business Administration student at UiTM, seeking a business internship from March to August 2027.',
  openGraph: { title: 'John Elton — Business & Strategy', description: 'Business strategy, operations, analytics and leadership.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
