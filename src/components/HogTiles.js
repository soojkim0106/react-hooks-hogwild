import { useState } from "react";
import DisplayHog from "./DisplayHog";

const HogTile = ({ hogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredHog =
    selectedCategory === "All" ? hogs : hogs.filter((hog) => hog.greased);

  return (
    <div className="ui eight wide column">
      <select name="filter" onChange={handleFilter} value={selectedCategory}>
        <option value="All">All Hogs</option>
        <option value="Greased">Greased</option>
      </select>
      <h3>
        {filteredHog.map((hog) => (
          <DisplayHog key={hog.name} {...hog} />
        ))}
      </h3>
    </div>
  );
};

export default HogTile;
