import { processItems } from "./constants";
import { ProcessItem } from "./components/ProcessItem";
import { Popup } from "./components/Popup";

function App() {
  return (
    <div className="container mx-auto relative">
      <div
        className="absolute top-0 left-0 border border-black p-4 w-6/12 h-full pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 100%)",
        }}
      >
        <Popup status={'Warning'} rating={3.5} />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-12">
        {processItems.map((item, index) => (
          <ProcessItem
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;