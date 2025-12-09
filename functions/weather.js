export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // 取得 URL 參數
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");

  // 從 Cloudflare 環境變數讀取 API Key
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
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch weather" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
