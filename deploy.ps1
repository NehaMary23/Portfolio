npm run build

cd dist/client

# Patch wrangler.json to add main entry point and nodejs compat
$config = Get-Content wrangler.json | ConvertFrom-Json
$config | Add-Member -Force -NotePropertyName "name" -NotePropertyValue "neha-portfolio"
$config | Add-Member -Force -NotePropertyName "main" -NotePropertyValue "server.js"
$config | Add-Member -Force -NotePropertyName "compatibility_flags" -NotePropertyValue @("nodejs_compat")
$config | ConvertTo-Json -Depth 100 | Set-Content wrangler.json

Remove-Item -ErrorAction SilentlyContinue _redirects
Copy-Item -Force ..\server\server.js .\
Copy-Item -Force -Recurse ..\server\assets\* .\assets\
# Force favicon re-upload by modifying timestamp
(Get-Item .\favicon.png).LastWriteTime = Get-Date
wrangler deploy --config wrangler.json
cd ..\..