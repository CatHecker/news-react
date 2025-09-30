import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_URL;
const API_TOKEN = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page_number = 1, page_size = 10) => {
  if (!BASE_URL || !API_TOKEN) {
    throw new Error("BASE_URL или API_TOKEN не определены");
  }

  try {
    const res = await axios.get(`${BASE_URL}top-headlines`, {
      params: {
        language: "en",
        apiKey: API_TOKEN,
        page: page_number,
        pageSize: page_size,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
