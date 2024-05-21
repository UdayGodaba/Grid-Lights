/* eslint-disable react/prop-types */
const GridLights = ({ grid }) => {
  return (
    <div className="grid">
      {grid
        .flat(1)
        .map((val, idx) =>
          val ? <button key={idx}></button> : <span key={idx}> </span>
        )}
    </div>
  );
};

export default GridLights;
