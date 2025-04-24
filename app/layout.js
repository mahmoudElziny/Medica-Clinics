import './globals.css';
import Header from './components/Header';

export const metadata = {
    title: 'Medica Clinics',
    description: 'Medical services including plastic surgery, laser, and dental care',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-background text-dark font-sans">
                <Header />
                <main className="p-6">{children}</main>
            </body>
        </html>
    );
}
