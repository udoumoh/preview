import { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "The Hectre",
  description:
    "The Hectre is a comprehensive property technology (proptech) platform designed to streamline various aspects of the real estate ecosystem. The Hectre serves as a one-stop solution for individuals seeking shared living spaces, simplifying the process of finding roommates, acquiring land, renting apartments, and purchasing houses. Tailored to the unique needs of users, the platform provides a centralized marketplace for property listings, connecting landlords, real estate agents, and individuals in search of diverse housing options.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.poppins.className}>
      <body>
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
