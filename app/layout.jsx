import "./globals.css";


export const metadata = {
  title: "APEX Athletics | Sports Club & Academy",
  description:
    "Professional sports club and academy. Football, Cricket, Fitness, Basketball, Swimming and Martial Arts programs with expert coaches.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white antialiased">{children}</body>
    </html>
  );
}
