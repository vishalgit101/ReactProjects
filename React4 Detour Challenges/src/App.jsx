import MyJokes from "./Components/MyJokes";
import jokes from "./jokes";

export default function App() {
  console.log(jokes);
  const jokeElements = jokes.map((joke) => {
    return <MyJokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return <main>{jokeElements}</main>;
}

/*export default function App() {
  return (
    <>
      <MyJokes
        setup="My wife told me to stop acting like a flamingo."
        punchline="I had to put my foot down."
        isPun={false}
        comments={[
          { author: "", text: "", title: "" },
          { author: "", text: "", title: "" },
        ]}
      />
      <MyJokes
        setup="Why are gay people always smiling?."
        punchline="Because they cant keep a straight face."
        isPun={true}
      />

      <MyJokes
        setup="Why dont chickens wear underwear?"
        punchline="Because their pecker is on their face"
        isPun={false}
      />

      <MyJokes
        //setup="A naked guy just dunked his balls in glitter"
        punchline="Thats pretty nuts."
        isPun={false}
      />
    </>
  );
}*/
