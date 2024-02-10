// Accept a calback prop
// Accept a regions props
// Structure:  Simulate a select with a div, list regions below
// Default value

import { useState } from "react";

interface SortProps {
  onSort: () => void;
  regions: string[];
}

const Sort = ({ onSort, regions }: SortProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const defaultValue = "Filter By Region";
  const highlightedValue =
    selectedRegion && selectedRegion !== "All" ? selectedRegion : defaultValue;

  if (!regions.includes("All")) {
    regions.push("All");
  }

  const handleClick = (region: string) => {
    setSelectedRegion(region);

    onSort();
  };

  return (
    <div>
      <div>{highlightedValue}</div>
      <ul>
        {regions.map((region, index) => {
          return (
            <li key={index} onClick={() => handleClick(region)}>
              {region}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
