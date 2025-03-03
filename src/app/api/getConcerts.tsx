export async function getConcerts() {
    const API_KEY = process.env.BANDSINTOWN_API_KEY; // ✅ Safe access to the API key
    const ARTIST_NAME = "LESPURNA";
  
    if (!API_KEY) {
      throw new Error("Missing API key for Bandsintown");
    }
  
    const response = await fetch(
      `https://rest.bandsintown.com/artists/${ARTIST_NAME}/events?app_id=${API_KEY}&date=all`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch concerts");
    }
  
    return response.json();
  }  