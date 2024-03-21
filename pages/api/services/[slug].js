import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const {
    query: { slug },
  } = req;

  const filePath = path.join(process.cwd(), 'public', 'services.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(fileContents);

  const service = items.find(item => item.slug === slug);

  if (!service) {
    res.status(404).json({ message: 'Service not found' });
    return;
  }

  res.status(200).json(service);
}
