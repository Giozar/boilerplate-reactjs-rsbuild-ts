import './styles/Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
