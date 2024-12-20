import { Inter } from "next/font/google";
import "./styles/globals.css";  // Correct path to globals.css

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job App Landing Page",
  description: "AI-powered job placement platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
