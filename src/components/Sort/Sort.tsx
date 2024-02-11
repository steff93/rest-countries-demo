import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Region } from "../../types";
import "./Sort.scss";

interface SortProps {
  onSort: (region: Region) => void;
  regions: Region[];
}

const Sort = ({ onSort, regions }: SortProps) => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [sortExpanded, setSortExpanded] = useState(false);
  const defaultValue = "Filter by Region";
  const highlightedValue =
    selectedRegion && selectedRegion !== "All" ? selectedRegion : defaultValue;

  const expandedClass = sortExpanded ? "sort__select--expanded" : "";
  if (!regions.includes("All")) {
    regions.push("All");
  }

  const handleSortSelect = (region: Region) => {
    setSelectedRegion(region);
    setSortExpanded(false);

    onSort(region);
  };

  const handleSortToggle = () => {
    setSortExpanded((prev) => !prev);
  };

  return (
    <div className="sort">
      <div
        className={`sort__select ${expandedClass}`}
        onClick={handleSortToggle}
      >
        <span className="sort__selected">{highlightedValue}</span>
        <FontAwesomeIcon className="sort__icon" icon={faChevronUp} />
      </div>
      {sortExpanded && (
        <ul className="sort__regions">
          {regions.map((region, index) => {
            return (
              <li
                className="sort__region"
                key={index}
                onClick={() => handleSortSelect(region)}
              >
                {region}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;
