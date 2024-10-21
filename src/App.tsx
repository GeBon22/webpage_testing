import { CardWithForm } from "./components/CardWithForm";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-slate-900 text-white min-h-screen">
        <Header />
        <section className="mt-4">
          <div className="flex justify-center flex-row gap-4 mt-4">
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div>
          <div className="flex justify-center flex-row gap-4 mt-4">
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div>
          <div className="flex justify-center flex-row gap-4 mt-4">
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
