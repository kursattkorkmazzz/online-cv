import "./global.css";

export const metadata = {
  title: "Online CV | Build & Share your CVs",
};

export default function RootLayout({ children }) {
  const darkMode = false;
  return (
    <html lang="en" className={(darkMode ? "dark" : "") + " scroll-smooth"}>
      <body className="bg-slate-200 dark:bg-slate-800">{children}</body>
    </html>
  );
}
