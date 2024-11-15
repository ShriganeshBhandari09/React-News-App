import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
// import Navbar from "./Navbar";

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=india&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const jsonData = await response.json();
        // console.log(jsonData);
        setNewsData(jsonData.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${input}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const jsonData = await response.json();
      // console.log(jsonData);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.log(error);
    }
  };

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
            <button
              className="btn btn-outline-success"
              onClick={getData}
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <h1 className="text-center">Latest News</h1>
      <div className="card-container">
        {newsData.map((item, index) => {
          if (!item.urlToImage) {
            return null;
          } else {
            return (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                img={item.urlToImage}
                url={item.url}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default NewsApp;
