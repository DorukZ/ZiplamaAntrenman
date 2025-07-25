
const BIN_ID = "687a13b96213bd325afbbe5e";
const API_KEY = "$2a$10$PcJkIv48pesO0aLFSpA13OZaEjbtZ0YvCdYGfzehuQsHfySO7OSKi";
const BASE_URL = "https://api.jsonbin.io/v3/b/" + BIN_ID;

async function fetchData() {
  const res = await fetch(BASE_URL + "/latest", {
    headers: { "X-Master-Key": API_KEY }
  });
  const json = await res.json();
  return json.record;
}

async function saveData(data) {
  await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify(data)
  });
}
