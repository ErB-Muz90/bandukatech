import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('Project root:', projectRoot);

try {
  // Check if .git exists, if not initialize
  console.log('Initializing git repository...');
  execSync('git init', { cwd: projectRoot, stdio: 'inherit' });
  
  console.log('Configuring git user...');
  execSync('git config user.email "v0[bot]@users.noreply.github.com"', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git config user.name "v0"', { cwd: projectRoot, stdio: 'inherit' });
  
  console.log('Adding files...');
  execSync('git add vite.config.ts index.html vercel.json', { cwd: projectRoot, stdio: 'inherit' });
  
  console.log('Creating commit...');
  execSync('git commit -m "fix: Configure Vite and Vercel for proper build and deployment\n\n- Change vite base path from ./ to / for absolute asset paths\n- Remove non-existent /index.css link from index.html\n- Update vercel.json with proper rewrite rules for admin routes and caching headers"', { cwd: projectRoot, stdio: 'inherit' });
  
  console.log('✅ Changes committed successfully!');
  console.log('Note: Push to origin manually or reconnect with GitHub in Vercel settings');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
