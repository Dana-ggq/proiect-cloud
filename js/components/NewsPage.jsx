import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const News = () => {
  const router = useRouter();
  const { city } = router.query;
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.ai/api/v1/article/getArticles?apiKey=874c358c-8d62-45ad-ac05-1dc272e5539e&keyword=${city}&lang=eng`);
        const data = await response.json();
        //console.log('articles')
        //console.log(data.articles.results)
        setArticles(data.articles.results); 
      } catch (error) {
        console.error(error);
      }
    };
    if (city) {
        console.log(city)
      fetchNews();
    } 
  }, [city]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="w-[500px] mx-auto text-center text-6xl font-bold">News from {city}</h1>
        <br/>
  
        <Link href="/" passHref>
				<div className="px-2 py-2 mx-auto max-w-md rounded-md text-lg font-medium text-gray bg-white-400 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center">
						Go back to main page
					</div>
				</Link>
        <br/>
        <div className="w-full mx-auto bg-gray-100 shadow-lg rounded-lg p-6">
          {articles.length > 0 ? (
            <div className="grid grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-1 md:grid-cols-2">
              {articles.map((article) => (
                <div
                  key={article.url}
                  className="block border border-gray-200 rounded-lg shadow bg-blue-100 dark:bg-blue-700"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="mb-4 rounded-lg"
                    />
                  )}
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                  </h2>
                  <p className="mb-2 text-sm font-medium tracking-tight text-gray-400 dark:text-gray-400">
                   {article.date}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{article.body}</p>
                  <p className="text-sm mt-4 text-blue-500 dark:text-gray-400">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ height: "calc(100vh - 300px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <p className="text-2xl text-center mt-8 text-black text-lg">
                No news found for {city}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );    
}; 

export default News;
