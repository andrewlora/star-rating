import { useCallback, useEffect, useState } from "react";
import "./StartRating.styles.css";
const StartRating = ({ maxRating = 5, onChange }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

  const onClickHandler = useCallback(
    (ratingValue: number) => {
      ratingValue === currentRating
        ? setCurrentRating(0)
        : setCurrentRating(ratingValue);
    },
    [currentRating]
  );
  const stars = [...Array(maxRating)].map((_, idx) => {
    const ratingValue = idx + 1;
    return (
      <p
        className={`star ${
          ratingValue <= (hoveredRating || currentRating) ? "active" : ""
        }`}
        key={idx}
        onClick={() => onClickHandler(ratingValue)}
        onMouseEnter={() => setHoveredRating(ratingValue)}
        onMouseLeave={() => setHoveredRating(0)}
      >
        &#9733;
      </p>
    );
  });
  return <div className="start-rating-container">{stars}</div>;
};

export default StartRating;
