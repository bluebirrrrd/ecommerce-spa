import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  actionColor,
  disabledActionColor,
  hoverColor,
  hoverTextColor,
} from "../constants";
import { useState } from "react";

function ShoePage() {
  const [selectedSize, setSelectedSize] = useState("");
  let params = useParams();
  const shoe = useSelector((state) =>
    state.shoeCatalog.shoes.find(
      (pairOfShoes) => pairOfShoes.id === parseInt(params.shoeId)
    )
  );
  return (
    <div className="mx-20 mt-10">
      {shoe ? (
        <div className="flex">
          <div>
            <img
              src={shoe.imageURL}
              className="drop-shadow-md rounded-xl w-[90%]"
            />
          </div>

          <div>
            <p className="text-[28pt]">{shoe.name}</p>
            <p className="text-[16pt]">${shoe.price}</p>
            <div className="grid grid-cols-5 gap-1 mt-5">
              {shoe.sizes.map((size) => {
                const selectedStyles = `bg-[${actionColor}] text-${hoverTextColor}`;
                return (
                  <label
                    key={size}
                    className={`border
                  text-center
                  rounded
                  p-2 px-5
                hover:bg-[${actionColor}]
                hover:text-${hoverTextColor}
                hover:cursor-pointer
                ${size == selectedSize ? selectedStyles : ""}`}
                  >
                    {size}
                    <input
                      onChange={(event) => {
                        setSelectedSize(event.target.value);
                      }}
                      className="opacity-0 w-0"
                      type="radio"
                      name="radioSize"
                      value={size}
                    />
                  </label>
                );
              })}
            </div>
            {/* */}
            <div className="border mt-5 justify-center rounded grid w-[400px]">
              <button
                className={`
                bg-[${selectedSize ? actionColor : disabledActionColor}]
                text-${hoverTextColor}
                hover:bg-[${hoverColor}]
                w-[300px] p-2 mt-3 mb-3
                rounded
                `}
                disabled={!selectedSize}
              >
                Add to Cart
              </button>
              <button className="border w-[300px] p-2 mb-3 rounded">
                Save to List
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-[20pt]">
          Sorry, this shoe is not available
        </p>
      )}
    </div>
  );
}

export default ShoePage;
