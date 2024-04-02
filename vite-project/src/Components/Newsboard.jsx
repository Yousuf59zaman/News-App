// Newsboard.js
import { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  let URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="d-flex flex-wrap justify-content-evenly">
        {articles.map((article, index) => (
          <NewsItems
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
