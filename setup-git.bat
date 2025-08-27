@echo off
echo Setting up Git for new repository...
echo.

echo Removing old remote...
git remote remove origin

echo Adding new remote...
git remote add origin https://github.com/eybuc/soccer-cheats.git

echo Checking remote...
git remote -v

echo Pushing to new repository...
git push -u origin main

echo.
echo Done! Check if the push was successful above.
pause
