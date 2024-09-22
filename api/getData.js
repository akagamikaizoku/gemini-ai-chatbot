export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY; // Make sure this is set correctly
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`; // Use your actual API URL

  try {
    const response = await fetch(apiUrl);
    
    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Attempt to parse the response as JSON
    const text = await response.text(); // Read response as text
    let data;

    // Try to parse text as JSON, catch errors
    try {
      data = JSON.parse(text);
    } catch (jsonError) {
      throw new Error('Response is not valid JSON');
    }

    res.status(200).json(data); // Send the data back to the frontend
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
}
