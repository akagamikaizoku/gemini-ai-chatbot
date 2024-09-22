// api/getData.js
export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY; // Access the API key from environment variables
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`; // Replace with your actual API URL

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Respond with the data
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
}
