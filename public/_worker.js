export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // === 天氣 API 處理區塊 ===
    // 只要網址是 /weather 開頭，就執行這裡的邏輯
    if (url.pathname === "/weather" || url.pathname === "/api/weather") {
      const lat = url.searchParams.get("lat");
      const lon = url.searchParams.get("lon");
      const API_KEY = env.OPENWEATHER_API_KEY;

      if (!API_KEY) {
        return new Response(JSON.stringify({ error: "Server Error: API Key not configured" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }

      if (!lat || !lon) {
        return new Response(JSON.stringify({ error: "Missing lat or lon" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=zh_tw&appid=${API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch weather" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // === 靜態資源處理區塊 ===
    // 如果不是天氣 API，就直接回傳對應的網頁檔案 (index.html, css, js 等)
    // env.ASSETS 是 Cloudflare Pages 專用的變數，代表靜態資源
    return env.ASSETS.fetch(request);
  }
};
