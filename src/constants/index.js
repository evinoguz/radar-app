export const options = {
  method: "GET",
  url: import.meta.env.VITE_API_URL + "/flights/list-in-boundary",
  params: {
    bl_lat: "34.668286",
    bl_lng: "24.943013",
    tr_lat: "43.540389",
    tr_lng: "44.827639",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
