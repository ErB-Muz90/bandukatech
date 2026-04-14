import { execSync } from 'child_process';
import { cwd } from 'process';

const projectRoot = '/vercel/share/v0-project';

try {
  console.log('Current directory:', cwd());
  console.log('Project root:', projectRoot);
  
  // Change to project directory
  process.chdir(projectRoot);
  
  // Check git status
  console.log('\n📋 Git status:');
  const status = execSync('git status --short', { encoding: 'utf-8' });
  console.log(status);
  
  // Add all changes
  console.log('\n➕ Adding changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit with descriptive message
  console.log('\n💾 Committing changes...');
  const commitMsg = 'fix: Vite/Vercel build configuration\n\n- Change vite.config.ts base path from "./" to "/"\n- Remove non-existent /index.css link from index.html\n- Update vercel.json with proper rewrites and caching';
  execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  
  // Push to current branch
  console.log('\n🚀 Pushing to remote...');
  execSync('git push', { stdio: 'inherit' });
  
  console.log('\n✅ All done! Changes have been pushed to the repository.');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
