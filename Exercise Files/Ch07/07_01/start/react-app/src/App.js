import "./App.css";
import { Link, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet></Outlet>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
