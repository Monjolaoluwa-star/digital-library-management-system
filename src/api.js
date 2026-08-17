const API_URL =
  "https://openlibrary.org/search.json";


export const searchBooks = async (
  query
) => {

  try {

    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(
        query
      )}&limit=20`
    );


    if (!response.ok) {

      throw new Error(
        "Failed to fetch books"
      );

    }


    const data =
      await response.json();


    return data.docs || [];


  } catch (error) {

    console.error(
      "Error fetching books:",
      error
    );

    throw error;

  }

};