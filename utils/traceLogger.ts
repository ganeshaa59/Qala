import fs from 'fs';
import path from 'path';

export const logTrace = (message: string) => {
  const logDir = path.join(process.cwd(), 'logs');
  const logFile = path.join(logDir, 'trace.txt');

  // Ensure logs folder exists
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const timestamp = new Date().toISOString();
  const fullMessage = `[${timestamp}] ${message}\n`;

  // Append to file
  fs.appendFileSync(logFile, fullMessage, 'utf8');
};
