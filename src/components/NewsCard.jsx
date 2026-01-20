import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ newsData }) => {
  const { author, title, urlToImage, url } = newsData;

  // Encode URL as slug
  const slug = encodeURIComponent(url);

  return (
    <div>
      <div className="flex flex-col gap-3 p-5 rounded-2xl shadow-2xl shadow-sky-200">
        <img
          className="rounded-md w-71.25 object-cover h-40"
          src={urlToImage}
          alt="news"
        />
        <div>
          <h3 className="py-3 text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-500">{author}</p>

          {/* Link to details page */}
          <Link
            to={`/news/${slug}`}
            className="text-blue-600 underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
