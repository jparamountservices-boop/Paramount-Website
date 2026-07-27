@echo off
REM ============================================================
REM  Paramount website - one-click local start (Windows)
REM  Double-click this file. It installs what's needed the first
REM  time, then starts the local site at http://localhost:4321
REM  Requires Node.js installed once from https://nodejs.org
REM ============================================================
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo.
  echo   Node.js is not installed yet.
  echo   1^) Go to https://nodejs.org
  echo   2^) Download the LTS Windows installer and run it ^(click Next through defaults^)
  echo   3^) Close this window, then double-click start-windows.bat again
  echo.
  pause
  exit /b
)

echo Installing project files (first time can take a couple minutes)...
call npm install
echo.
echo ============================================================
echo   Starting your site...
echo   When you see "Local  http://localhost:4321/", open that
echo   address in your web browser.
echo   To stop the site later: close this window.
echo ============================================================
echo.
call npm run dev
pause
