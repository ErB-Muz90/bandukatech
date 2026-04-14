import { execSync } from 'child_process';

try {
  console.log('Adding files...');
  execSync('git add vite.config.ts index.html vercel.json', { stdio: 'inherit' });

  console.log('Committing changes...');
  execSync('git commit -m "fix: Update Vite and Vercel configuration for proper deployment\n\n- Change vite.config.ts base from \'.\/\' to \'/\' for absolute asset paths\n- Remove non-existent /index.css link from index.html\n- Update vercel.json with proper rewrites and caching headers for Vercel deployment"', { stdio: 'inherit' });

  console.log('Pushing to master...');
  execSync('git push origin master', { stdio: 'inherit' });

  console.log('✓ All changes committed and pushed successfully!');
} catch (error) {
  console.error('Error during commit/push:', error.message);
  process.exit(1);
}
