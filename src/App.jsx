import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import menu from "./common/data";
import Header from "./components/Header/Header";
import FoodItemCard from "./components/FoodItemCard/FoodItemCard";

function App() {
  return (
    <>
      <div className="all-container">
        <Header menuName="Evangadi Menu" />

        <div className="foods-container">
          {menu.map((item) => (
            <FoodItemCard
              key={item.id}
              footItemImg={item.img || "/images/default-image.png"} // Fallback image
              foodItemHeading={item.title || "No Title"}
              Price={item.price || "N/A"}
              foodDesc={item.desc || "No description available"}
            />

            /*
        const props = {
                        key: item.id,
                        foodItemImg: itme.img,
                        foodItmeHeading: item.title,
                        Price: item.price,
                        foodDesc: itme.desc
                      }
        */
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
