import marker from "/src/images/marker.png";

/*export default function MyMain() {
  return (
    <main>
      <article className="card">
        <div className="img">
          <img
            className="img"
            src="https://scrimba.com/links/travel-journal-japan-image-url"
            alt="mount fuji"
          />
        </div>
        <div className="details">
          <header>
            <img src="/src/images/marker.png" alt="marker" width={11} />
            <span>
              Japan{" "}
              <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
                View on Google Maps
              </a>{" "}
            </span>
          </header>
          <h2>Mount Fuji</h2>
          <span className="dates">12 Jan, 2021 - 24 Jan, 2021</span>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </article>
    </main>
  );
}*/

/*export default function MyMain(props) {
  console.log(props);
  return (
    <main>
      <article className="card">
        <div className="img">
          <img className="img" src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="details">
          <header>
            <img src={marker} alt="marker" width={11} />
            <span>
              {props.location} <a href={props.map}>View on Google Maps</a>{" "}
            </span>
          </header>
          <h2>{props.title}</h2>
          <span className="dates">{props.date}</span>
          <p>{props.text}</p>
        </div>
      </article>
    </main>
  );
}*/

export default function MyMain({ key, props }) {
  // props alone also could have worked but would have required props.props.img.src,
  // or props.entry.img.src or somethuiing like this, i destructured it in the params thats why it was not needed
  console.log(props);
  return (
    <main>
      <article className="card">
        <div className="img">
          <img className="img" src={props.img?.src} alt={props.img?.alt} />
        </div>
        <div className="details">
          <header>
            <img src={marker} alt="marker" width={11} />
            <span>
              {props.country.toUpperCase()}{" "}
              <a href={props.googleMapsLink}>View on Google Maps</a>{" "}
            </span>
          </header>
          <h2>{props.title}</h2>
          <span className="dates">{props.dates}</span>
          <p>{props.text}</p>
        </div>
      </article>
    </main>
  );
}
