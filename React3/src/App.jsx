import MyHeader from "./Components/MyHeader";
import MyMain from "./Components/MyMain";
import data from "./data";

/*export default function App() {
  // will be using props/properties now , can also use destructuring with it
  return (
    <>
      <MyHeader />
      <MyMain
        title="Mount Fuji"
        img={{
          src: "https://scrimba.com/links/travel-journal-japan-image-url",
          alt: "Mount Fuji",
        }}
        location="Japan"
        map="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
    </>
  );
}*/

/*export default function App() {
  console.log(data);
  const dataElements = data.map((element) => {
    // Get the Element you want to pass the data and props inside
    return (
      <MyMain
        key={element.id}
        img={element.img}
        title={element.title}
        country={element.country}
        googleMapsLink={element.googleMapsLink}
        dates={element.dates}
        text={element.text}
      />
    );

    // Our Component is getting stuffed, we dont want that, we can also pass the entire object
  });

  return (
    <>
      <MyHeader />
      {dataElements}
    </>
  );
}*/

// Our Component was getting stuffed, we dont want that, we'll be passing the entire object
export default function App() {
  console.log(data);
  const dataElements = data.map((element) => {
    // Get the Element you want to pass the data and props inside
    return (
      <MyMain
        key={element.id}
        /*img={element.img}
        title={element.title}
        country={element.country}
        googleMapsLink={element.googleMapsLink}
        dates={element.dates}
        text={element.text}*/
        props={element}
        // or i could also use spread operator
        //{...element}
      />
    );

    // Our Component is getting stuffed, we dont want that, we can also pass the entire object
  });

  return (
    <>
      <MyHeader />
      {dataElements}
    </>
  );
}
