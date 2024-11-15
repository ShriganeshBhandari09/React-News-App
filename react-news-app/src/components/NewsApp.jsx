import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Navbar from "./Navbar";

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);

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
  console.log(newsData);
  return (
    <>
      <Navbar />
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
