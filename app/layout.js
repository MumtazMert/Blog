import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#3e3d6f] w-screen h-screen">
                <Header />
                <div className="w-full min-h-[calc(100vh-142px)]">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
