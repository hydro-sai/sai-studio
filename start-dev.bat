@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================
echo   Sai Studio - local preview
echo ============================================
echo.

if not exist node_modules (
  echo First run: installing dependencies. This takes a few minutes...
  echo.
  call npm install
  echo.
)

echo Starting dev server at http://localhost:3000
echo Keep this window open while editing. Press Ctrl+C to stop.
echo.

rem open the browser a few seconds later, once the server is up
start "open-browser" /min cmd /c "timeout /t 8 /nobreak >nul && start http://localhost:3000"

call npm run dev

pause
