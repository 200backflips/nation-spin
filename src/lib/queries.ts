const REST_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
  const url = new URL(REST_COUNTRIES_URL);
  url.search = new URLSearchParams({
    fields: "name,flags",
  }).toString();

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
