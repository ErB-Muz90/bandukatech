#!/bin/bash

# Commit and push Vite/Vercel configuration fixes
git add vite.config.ts index.html vercel.json
git commit -m "fix: Update Vite and Vercel configuration for proper deployment

- Change vite.config.ts base from './' to '/' for absolute asset paths
- Remove non-existent /index.css link from index.html
- Update vercel.json with proper rewrites and caching headers for Vercel deployment"

git push origin master
