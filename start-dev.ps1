# Think Bhumi - Start website (stable production mode)
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$NodeDir = Join-Path $ProjectRoot "nodejs"

$env:PATH = "$NodeDir;$env:PATH"
Set-Location $ProjectRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Think Bhumi - Website Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path (Join-Path $NodeDir "node.exe"))) {
    Write-Host "ERROR: Node.js not found." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

if (-not (Test-Path ".next\BUILD_ID")) {
    Write-Host "Building website (first time ~2 min)..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) { Read-Host "Build failed. Press Enter"; exit 1 }
}

Write-Host "Starting at http://localhost:3000" -ForegroundColor Green
Write-Host "KEEP THIS WINDOW OPEN." -ForegroundColor Yellow
Write-Host ""

Start-Job -ScriptBlock {
    Start-Sleep -Seconds 3
    Start-Process "http://localhost:3000"
} | Out-Null

npm run start
