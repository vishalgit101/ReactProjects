import React from "react";

export default function WindowTracker() {
  // console.log(props);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);

    // now this useEffect function should return the clean up function so after unmouont taht it stops registering the events
    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWindowWidth);
    };
  });
  return (
    <>
      <h1>Window width: {windowWidth}</h1>
    </>
  );
}
