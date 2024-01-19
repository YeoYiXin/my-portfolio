import Introduction from "../components/Introduction";
import NavBar from "../components/NavBar";
import About from "../components/About";
//homepage
export default function Home() {
  return (
    <div>
      <div className="z-1000 overflow-x-hidden">
        <NavBar />
      </div>
      <main className="z-10 mt-10  text-stoneWhite overflow-x-hidden">
        <div className="main-content">
          <Introduction />
        </div>
      </main>
      <section className="text-stoneWhite">
        <About />
      </section>
    </div>
  );
}
