import { useState } from "react";
import icon100 from "./assets/icon100.svg";
import icon50 from "./assets/icon50.svg";
import icon30 from "./assets/icon30.svg";
import icon0 from "./assets/icon0.svg";
import badge from "./assets/Badge.svg";
import rating from "./assets/Stars.svg";

function Item({ title, description, icon, link }) {
  return (
    <div className="flex items-start p-2 mt-4 ml-4">
      <img src={icon} alt="React Logo" className="w-8 h-8 mr-2 mt-2" />
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">{title}</p>
        {description && (
          <p className="text-base text-gray-400">{description}</p>
        )}
        {link && <p className="text-base text-purple-400">{link}</p>}
      </div>
    </div>
  );
}

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
        <div className="absolute bottom-4 right-4 z-20">
          <div className="w-64 h-36 bg-white border border-gray p-4 shadow-md items-start rounded-md">
            <p className="text-base font-medium text-black">
              A to Z Construction, LLC
            </p>
            <div className="flex justify-between w-full mt-4">
              <p className="text-base text-gray-500">Status</p>
              <img
                src={badge}
                alt="Status Icon"
                className="w-30 h-30 mr-10"
              />{" "}
            </div>
            <div className="flex justify-between w-full mt-4">
              <p className="text-base text-gray-500">Reviews</p>
              <img src={rating} alt="Reviews Icon" className="w-30 h-30" />{" "}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 gap-4 mt-12">
        <Item
          title="Upload Business License"
          description="Upload your articles of incorporation, contractor license, or other registration with the state."
          icon={icon100}
        />
        <Item title="Complete Onboarding Questionnaire" icon={icon50} />
        <Item
          title="Sign NDA"
          description="NDA will be sent separately, via Adobe e-sign"
          icon={icon30}
        />
        <Item
          title="Upload Certificate of Insurance"
          description="Requirements and example document attached."
          link={"accord_sample.pdf"}
          icon={icon0}
        />
      </div>
    </div>
  );
}

export default App;
