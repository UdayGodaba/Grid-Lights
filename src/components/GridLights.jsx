/* eslint-disable react/prop-types */
const GridLights = ({ grid }) => {
  return (
    <div className="grid">
      {grid
        .flat(1)
        .map((val, idx) =>
          val ? (
            <button
              key={idx}
              className={`button ${true && "selected"}`}
            ></button>
          ) : (
            <span key={idx}> </span>
          )
        )}
    </div>
  );
};

export default GridLights;
