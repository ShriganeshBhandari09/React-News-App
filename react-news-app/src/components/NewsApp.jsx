import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
// import Navbar from "./Navbar";
import newspaper from "../assets/newspaper.png";

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

  const getCategoryData = async (category) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${
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
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <img src={newspaper} alt="" />
            INSTA NEWS
          </a>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={getData} type="button">
              Search
            </button>
          </div>
        </div>
      </nav>

      <h1 className="text-center py-3">Latest News</h1>

      <div className="container-buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("General");
          }}
        >
          General
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("Business");
          }}
        >
          Business
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("Entertainment");
          }}
        >
          Entertainment
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("Health");
          }}
        >
          Health
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("Science");
          }}
        >
          Science
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("Sports");
          }}
        >
          Sports
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            getCategoryData("Technology");
          }}
        >
          Technology
        </button>
      </div>
      <div className="card-container">
        {newsData.map((item, index) => {
          if (!item.urlToImage) {
            return null;
          } else {
            return (
              <NewsCard
                key={index}
                title={
                  item.title.length > 50
                    ? item.title.slice(0, 40).concat("...")
                    : item.title
                }
                description={
                  item.description.length > 100
                    ? item.description.slice(0, 90).concat("...")
                    : item.description
                }
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
