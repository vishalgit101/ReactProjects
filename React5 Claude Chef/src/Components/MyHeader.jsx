import "/src/index.css";
import logo from "/src/images/chef-claude-icon.png";
export default function MyHeader() {
  return (
    <header className="header">
      <img src={logo} alt="icon" className="logo" />
      <span>Chef Claude</span>
    </header>
  );
}
