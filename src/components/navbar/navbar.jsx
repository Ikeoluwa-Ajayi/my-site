import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar">
      <h1 class="logo">MySite</h1>

      <ul class="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <button class="btn">Sign Up</button>
    </nav>
  );
}

export default Navbar;
