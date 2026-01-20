import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

const NewsCartData = () => {
  const [news, setNews] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("All");

  // Domain → Country mapping
  const domainCountryMap = {
    au: "Australia",
    hk: "Hong Kong",
    tw: "Taiwan",
    jp: "Japan",
    ru: "Russia",
    by: "Belarus",
    es: "Spain",
    mx: "Mexico",
    th: "Thailand",
    ua: "Ukraine",
    se: "Sweden",
    be: "Belgium",
    ng: "Nigeria",
    com: "Global",
  };

  // Extract country from URL
  const getCountryFromUrl = (url) => {
    try {
      const hostname = new URL(url).hostname; // drive.com.au
      const tld = hostname.split(".").pop(); // au
      return domainCountryMap[tld] || "Other";
    } catch {
      return "Unknown";
    }
  };

  // Fetch API data
  useEffect(() => {
    fetch(
      "/newsData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const newsWithCountry = data.articles.map((item) => ({
          ...item,
          country: getCountryFromUrl(item.url),
        }));
        setNews(newsWithCountry);
      })
      .catch((err) => console.error(err));
  }, []);

  // Dynamic country list for dropdown
  const countries = ["All", ...new Set(news.map((item) => item.country))];

  // Filtered news based on selected country
  const filteredNews =
    selectedCountry === "All"
      ? news
      : news.filter((item) => item.country === selectedCountry);
  
  return (
    <div className="py-20">

      {/* Dynamic Dropdown */}
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="border border-gray-400 max-w-2xl mx-auto flex px-10 py-2 mb-6 rounded"
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredNews.slice(0, 20).map((newsData, index) => (
          <NewsCard key={newsData.url || index} newsData={newsData} />
        ))}
      </div>
      <Link to="/all-news" className="flex justify-center items-center text-center py-10">
      <button className="py-2 px-6 rounded-2xl bg-sky-400 text-black font-semibold">See more </button>
      </Link>
    </div>
  );
};

export default NewsCartData;
