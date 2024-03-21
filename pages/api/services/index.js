import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
   // Get the path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'services.json');

  // Read the JSON file
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse JSON data
  const products = JSON.parse(fileContents);

  // Return products as JSON response
  res.status(200).json(products);
  }