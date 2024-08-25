import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { part } = req.query;

  // Resolve the path to the MP3 file
  const filePath = path.resolve('D:\\personal\\musicali', 'hichkas-full-album-10(berooztarinha.com).mp3');

  // Get the file size
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;

  let start = 0;
  let end = fileSize - 1;

  if (part) {
    // Divide the file into 5 equal parts
    const partSize = Math.ceil(fileSize / 5);
    const partIndex = Number(part) - 1;
    start = partIndex * partSize;
    end = Math.min(start + partSize - 1, fileSize - 1);
  }

  // Create a stream to read the selected part of the file
  const readStream = fs.createReadStream(filePath, { start, end });

  // Set headers for the response
  res.writeHead(206, {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': end - start + 1,
    'Content-Type': 'audio/mpeg',
  });

  // Pipe the stream to the response
  readStream.pipe(res);
}
