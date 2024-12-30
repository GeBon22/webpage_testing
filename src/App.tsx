import { useEffect, useRef } from "react";
import { CardWithForm } from "./components/CardWithForm";
import { Header } from "./components/Header";
import { createSwapy, Swapy } from "swapy";
import { DataTableDemo } from "./components/DataTable";
import { CustomCalendar } from "./components/Calendar";

function App() {
  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      console.log("Container HTML:", containerRef.current.innerHTML);

      swapyRef.current = createSwapy(containerRef.current, {
      });

      swapyRef.current.onSwapStart((event) => {
        console.log("Swap Start:", event);
      });
      swapyRef.current.onSwap((event) => {
        console.log("Swapping:", event);
      });
      swapyRef.current.onSwapEnd((event) => {
        console.log("Swap End:", event);
      });
    }

    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
    <Header />
    <section className="mt-4 pb-4">
      <div className="container grid grid-cols-3 gap-4" ref={containerRef}>
        <div data-swapy-slot="1" className="flex justify-center">
          <div data-swapy-item="1">
            <DataTableDemo />
          </div>
        </div>
        <div data-swapy-slot="2" className="flex justify-center">
          <div data-swapy-item="2">
            <CustomCalendar />
          </div>
        </div>
        <div data-swapy-slot="3" className="flex justify-center">
          <div data-swapy-item="3">
            <CardWithForm cardNumber={3} />
          </div>
        </div>

        <div data-swapy-slot="4" className="flex justify-center">
          <div data-swapy-item="4">
            <CardWithForm cardNumber={4} />
          </div>
        </div>
        <div data-swapy-slot="5" className="flex justify-center">
          <div data-swapy-item="5">
            <CardWithForm cardNumber={5} />
          </div>
        </div>
        <div data-swapy-slot="6" className="flex justify-center">
          <div data-swapy-item="6">
            <CardWithForm cardNumber={6} />
          </div>
        </div>

        <div data-swapy-slot="7" className="flex justify-center">
          <div data-swapy-item="7">
            <CardWithForm cardNumber={7} />
          </div>
        </div>
        <div data-swapy-slot="8" className="flex justify-center">
          <div data-swapy-item="8">
            <CardWithForm cardNumber={8} />
          </div>
        </div>
        <div data-swapy-slot="9" className="flex justify-center">
          <div data-swapy-item="9">
            <CardWithForm cardNumber={9} />
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
