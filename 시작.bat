@echo off
chcp 65001 > nul
title X라이더 웹사이트 실행 중...

cd /d "%~dp0"

echo.
echo  X라이더 웹사이트를 시작합니다...
echo  잠시 후 브라우저가 자동으로 열립니다.
echo.
echo  종료하려면 이 창을 닫으세요.
echo  ----------------------------------------

timeout /t 2 /nobreak > nul
start "" "http://localhost:3939"
npx --yes serve@14 dist -l 3939 -s --no-clipboard

pause
