import { CardWithForm } from "./components/CardWithForm";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-slate-900 text-white min-h-screen">
        <Header />
        <section className="mt-4 container">
          <div className="flex justify-center gap-4 mt-4" data-swapy-slot="1">
            <CardWithForm data-swapy-item="a" />
          </div>
          <div className="flex justify-center gap-4 mt-4" data-swapy-slot="2">
            <CardWithForm data-swapy-item="b" />
          </div>
          <div className="flex justify-center gap-4 mt-4" data-swapy-slot="3">
            <CardWithForm data-swapy-item="c" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
