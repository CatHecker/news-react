import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_URL;
const API_TOKEN = import.meta.env.VITE_NEWS_API_KEY;

type getNewsArgs = {
  page_number: number;
  page_size: number;
  keywords: string;
};

export const getNews = async () => {
  if (!BASE_URL || !API_TOKEN) {
    throw new Error("BASE_URL или API_TOKEN не определены");
  }
  try {
    const res = await axios.get(`${BASE_URL}top-headlines`, {
      params: {
        language: "en",
        apiKey: API_TOKEN,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAllNews = async ({
  page_number = 1,
  page_size = 10,
  keywords,
}: getNewsArgs) => {
  if (!BASE_URL || !API_TOKEN) {
    throw new Error("BASE_URL или API_TOKEN не определены");
  }
  try {
    console.log("something");
    const res = await axios.get(`${BASE_URL}everything/`, {
      params: {
        language: "ru",
        apiKey: API_TOKEN,
        page: page_number,
        pageSize: page_size,
        q: keywords,
        sources: "lenta,rbc",
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
