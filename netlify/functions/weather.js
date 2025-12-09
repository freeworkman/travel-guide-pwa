export default async (req, context) => {
  // 從 URL 參數獲取經緯度
  const url = new URL(req.url);
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");

  // 從 Netlify 的環境變數中讀取 API Key (這是最安全的地方)
  const API_KEY = Netlify.env.get("f2dcf92ac0c917a85ced2e416d61b385");

  // 基本檢查
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: "Server Configuration Error: API Key missing" }), { status: 500 });
  }
  if (!lat || !lon) {
    return new Response(JSON.stringify({ error: "Missing latitude or longitude" }), { status: 400 });
  }

  try {
    // 由後端發起真正的 API 請求
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=zh_tw&appid=${API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // 將結果回傳給前端
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // 允許跨域 (可選)
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch weather data" }), { status: 500 });
  }
};