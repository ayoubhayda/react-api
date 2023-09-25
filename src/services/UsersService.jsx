import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook for fetching data
export function useFetchData(apiUrl, id = "") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(apiUrl + id);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (id == "") {
        setError("Sorry, an error occurred while fetching the data.");
      } else {
        setError("Sorry, this item does not exist.");
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [apiUrl, id]);

  return { data, error };
}

//delete item

export const Destroy = async (apiUrl, id) => {
  const confirm = window.confirm("Would you like to Delete?");
  if (confirm) {
    try {
      console.log(apiUrl + id);
      await axios.delete(apiUrl + id);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }
};
