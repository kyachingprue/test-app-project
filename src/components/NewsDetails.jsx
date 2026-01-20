import React from "react";
import {motion} from 'motion/react'
import { useNavigate, useParams } from "react-router-dom";

const NewsDetails = () => {
  const { slug } = useParams(); // Get URL param
  const decodedUrl = decodeURIComponent(slug);
  const navigate = useNavigate();

  // Retrieve all news from localStorage
  const allNews = JSON.parse(localStorage.getItem("news")) || [];

  // Find the specific news by URL
  const news = allNews.find((item) => item.url === decodedUrl);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-center text-2xl md:text-4xl font-semibold text-gray-700">
          News not found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{news.title}</h1>
      <img
        src={news.urlToImage}
        alt={news.title}
        className="my-4 rounded"
      />
      <p className="text-gray-700">{news.content}</p>
      <p className="text-sm text-gray-500 mt-2">
        Source: {news.source?.name} | Published at: {news.publishedAt}
      </p>
      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-3 block"
      >
        Go to Original Article
      </a>
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 mt-10 bg-sky-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Go Back
      </motion.button>
    </div>
  );
};

export default NewsDetails;
