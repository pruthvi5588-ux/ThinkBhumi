@echo off
REM Think Bhumi - Start website (stable production mode)
cd /d "%~dp0"

set "NODE_DIR=%~dp0nodejs"
set "PATH=%NODE_DIR%;%PATH%"

echo ========================================
echo   Think Bhumi - Website Server
echo ========================================
echo.

if not exist "%NODE_DIR%\node.exe" (
  echo ERROR: Node.js not found in the nodejs folder.
  pause
  exit /b 1
)

REM Stop any old server on ports 3000 and 3001
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING" 2^>nul') do (
  taskkill /F /PID %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3001" ^| findstr "LISTENING" 2^>nul') do (
  taskkill /F /PID %%a >nul 2>&1
)

timeout /t 2 /nobreak >nul

if not exist "node_modules" (
  echo Installing dependencies - please wait...
  call npm install
  if errorlevel 1 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
  )
)

REM Always wipe the ENTIRE .next folder to prevent stale/corrupted CSS
if exist ".next" (
  echo Cleaning old build files...
  rmdir /s /q ".next" 2>nul
  timeout /t 1 /nobreak >nul
)

echo Building website - please wait (about 60 seconds)...
echo.
call npm run build
if errorlevel 1 (
  echo.
  echo ERROR: Build failed. See errors above.
  pause
  exit /b 1
)
echo.
echo Build complete! Starting server...
echo.

echo ----------------------------------------
echo   Open in browser: http://localhost:3000
echo   Press Ctrl+C to stop the server.
echo ----------------------------------------
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"

call npm run start

echo.
echo Server stopped.
pause
