import NavigationBar from "./layouts/navbar";
import Aside from "./layouts/dashboard/aside";
import MainSection from "./layouts/dashboard/main-section";
import Footer from "./layouts/footer";

export default function MainPage() {
  const navBar = NavigationBar();
  const aside = Aside();
  const section = MainSection();
  const footer = Footer();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="grow-0 shrink-0">
        <nav>{navBar}</nav>
      </header>
      <div className="flex grow">
        <aside className="shrink-0 basis-1/5">{aside}</aside>
        <section className="grow justify-self-stretch">{section}</section>
      </div>
      <footer className="grow-0 shrink-0">{footer}</footer>
    </div>
  );
}
