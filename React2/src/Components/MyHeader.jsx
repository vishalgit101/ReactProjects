/*export default function MyHeader() {
  return (
    <header className="header">
      <img
        src="/React2/src/assets/react-logo.png"
        width={40}
        alt="react-logo"
      />
      <span>ReactFacts</span>
    </header>
  );
}*/

import logo from "../assets/react-logo.png";

export default function MyHeader() {
  return (
    <header className="header">
      <img src={logo} width={40} alt="react-logo" />
      <span>ReactFacts</span>
    </header>
  );
}
