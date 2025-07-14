import starFilled from "/src/images/star-filled.png";
import starEmpty from "/src/images/star-empty.png";

export default function Star(props) {
  let startIcon = props.isFilled ? starFilled : starEmpty; // this is only setting the image, flipping is done in toggle function which is
  // the parent App componnet
  return (
    <>
      <button
        onClick={props.handleClick}
        aria-pressed={props.isFilled}
        aria-label={props.isFilled ? "Remove from favt" : "Add to favt"}
        className="favorite-button"
      >
        <img
          src={startIcon}
          alt={props.isFilled ? "Filled Star icon" : "Empty Star Icon"}
          className="favorite"
        />
      </button>
    </>
  );
}
