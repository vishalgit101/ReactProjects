import reactLogo from "../assets/react-logo3.png";
export default function MyMain() {
  return (
    <main className="main" style={{ backgroundImage: `url(${reactLogo})` }}>
      <h1>Fun facts about React</h1>

      <nav className="nav">
        <ul className="nav-ul">
          <li className="list-element">Was first released in 2013</li>
          <li className="list-element">
            Random fact about react, like how it is managed
          </li>
          <li className="list-element">
            META is tha org that manages the React
          </li>
          <li className="list-element">
            Was first released in 2013, It was developed by the facebook
          </li>
          <li className="list-element">Zuck is the creator of the facebook</li>
        </ul>
      </nav>
    </main>
  );
}
