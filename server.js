const app = require("./api/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aura Reels API running on http://localhost:${PORT}`);
});