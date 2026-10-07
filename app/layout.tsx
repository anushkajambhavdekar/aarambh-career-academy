import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AARAMBH Career Academy | IIT-JEE, NEET & CET Coaching in Nanded",
  description:
    "Akshay Sir's AARAMBH Career Academy in Nanded offers classroom coaching for IIT-JEE, NEET, CET and foundation programs.",
  openGraph: {
    title: "AARAMBH Career Academy | Nanded",
    description: "Concept-focused coaching for IIT-JEE, NEET, CET and foundation programs.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
