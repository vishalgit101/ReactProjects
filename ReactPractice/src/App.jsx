import MyHeader from "./Components/MyHeader";
import MyMain from "./Components/MyMain";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <>
      <MyHeader />
      <MyMain darkmode={true} />
      <MyFooter />
    </>
  );
}

export default App;
