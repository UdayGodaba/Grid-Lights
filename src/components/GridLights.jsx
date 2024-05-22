import { useState } from "react";

/* eslint-disable react/prop-types */
const GridLights = ({ grid }) => {
  const [stack, setStack] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleClick = (idx) => {
    const newStack = [...stack, idx];
    setStack(newStack);

    if (newStack.length == grid.flat(1).filter((val) => val).length) {
      setIsDeactivating(true);
      handleDeactivating();
    }
  };

  const handleDeactivating = () => {
    const intervalId = setInterval(() => {
      setStack((prevStack) => {
        const newStack = prevStack.slice(0, prevStack.length - 1);

        if (newStack.length === 0) {
          clearInterval(intervalId);
          setIsDeactivating(false);
        }

        return newStack;
      });
    }, 500);
  };

  return (
    <div className="grid">
      {grid.flat(1).map((val, idx) =>
        val ? (
          <button
            key={idx}
            className={`button ${stack.includes(idx) && "selected"}`}
            onClick={() => {
              isDeactivating == false && handleClick(idx);
            }}
            {...(stack.includes(idx) && { disabled: true })}
          ></button>
        ) : (
          <span key={idx}> </span>
        )
      )}
    </div>
  );
};

export default GridLights;
