import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category"); // here we are getting all the categories present in our database
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
// here we are creating the custom hooks which returns list of all categories