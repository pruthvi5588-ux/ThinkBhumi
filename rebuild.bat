@echo off
REM Rebuild website from scratch (fixes internal server errors)
cd /d "%~dp0"

set "NODE_DIR=%~dp0nodejs"
set "PATH=%NODE_DIR%;%PATH%"

echo Rebuilding Think Bhumi website...
echo.

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%a >nul 2>&1
)

if exist ".next" (
  echo Removing old build...
  rmdir /s /q ".next"
)

call npm run build
if errorlevel 1 (
  echo BUILD FAILED - see errors above.
  pause
  exit /b 1
)

echo.
echo Rebuild complete! Now run start-dev.bat to open the site.
pause
