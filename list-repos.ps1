$headers = @{
    "Authorization" = "token $env:GITHUB_TOKEN"
    "Accept" = "application/vnd.github.v3+json"
}

$result = Invoke-RestMethod -Uri "https://api.github.com/user/repos?per_page=100" -Method Get -Headers $headers
$result | ForEach-Object { $_.full_name }
