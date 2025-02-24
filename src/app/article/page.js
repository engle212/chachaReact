"use client";
export const dynamic = 'force-dynamic';
import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.json-generator.com";
const API_URL = BASE_URL + "/templates/L0Wo66RzmkOi/data";

export default function ArticlePage() {
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        Authorization: "Bearer qbxqx0vjd62pmwgi1eu31edj6kxqrshefotxgqso"
      }
    }).then(function (response) {
      setArticle(response.data[0])
      console.log(article);
    })
    .catch(function (error) {
      console.error("Error fetching article", error);
    })
  }, []);
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.source}</p>
      <p>{article.pubDate}</p>
      <p>{article.content}</p>
    </div>
  );
}
