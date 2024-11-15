import { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");

  async function fetchData() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${input}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const jsonData = await response.json()
    console.log(jsonData)
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">News App</a>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-outline-success" onClick={fetchData} type="button">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
