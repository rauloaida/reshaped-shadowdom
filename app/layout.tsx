import type { Metadata } from "next";
import "reshaped/themes/reshaped/theme.css";
import App from "./App";

export const metadata: Metadata = {
  title: "Reshaped ShadoDOM",
  description: "A PoC !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-rs-theme="reshaped">
    <body>
      <App>{children}</App>
    </body>
  </html>
  );
}
