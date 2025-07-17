import React from "react";
import StarWar from "./StarWar";
export default function Main() {
  const [memeData, setMemeData] = React.useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  console.log(memeData);

  function handleClick(event) {
    console.log("changed");
    console.log(event);
    const element = event.currentTarget;
    console.log(element);
    const value = element.value;
    console.log(value);
    const name = element.name;
    console.log([name]);

    // bind it to the useState
    setMemeData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  //https://api.imgflip.com/get_memes
  /*okkkay that means there are two ways to do what im doing
one is storing all the memes data in a local state for that useEffect may bn needed and then clicking button an randomly selcting image from one of the memes that i had saved in the array

second is, making a direcct api call on he button click for that useEffetct in not needed i guess*/

  React.useEffect(() => {
    async function imageFlip() {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        if (!res.ok) {
          throw new Error("Failed to fetch data from Image Flip Api");
        }

        const data = await res.json();
        console.log(data);

        const images = data.data.memes.map((meme) => {
          console.log(meme.url);
          return meme.url;
        });

        setMemeData((prevState) => {
          return { ...prevState, imageUrl: images };
        });
      } catch (error) {
        console.error(error);
      }
    }

    imageFlip();
  }, []);

  const [memeImage, setMemeImage] = React.useState(0);
  function flipImage() {
    setMemeImage((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleClick}
            value={memeData.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleClick}
            value={memeData.bottomText}
          />
        </label>
        <button onClick={flipImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeData.imageUrl[memeImage]} />
        <span className="top">{memeData.topText}</span>
        <span className="bottom">{memeData.bottomText}</span>
      </div>
      <StarWar />
    </main>
  );
}
