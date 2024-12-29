import { useEffect, useRef } from "react";
import { CardWithForm } from "./components/CardWithForm";
import { Header } from "./components/Header";
import { createSwapy, Swapy } from "swapy";

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
      <section className="mt-4">
        <div className="container" ref={containerRef}>
          <div className="flex justify-center gap-4 mt-4" data-swapy-slot="1">
            <div data-swapy-item="1">
              <CardWithForm cardNumber={1}/>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4" data-swapy-slot="2">
            <div data-swapy-item="2">
              <CardWithForm cardNumber={2}/>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4" data-swapy-slot="3">
            <div data-swapy-item="3">
              <CardWithForm cardNumber={3}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
