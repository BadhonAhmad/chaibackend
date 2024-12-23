require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000
const githubData = {
  "login": "Badhonahmed",
  "id": 67929783,
  "node_id": "MDQ6VXNlcjY3OTI5Nzgz",
  "avatar_url": "https://avatars.githubusercontent.com/u/67929783?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Badhonahmed",
  "html_url": "https://github.com/Badhonahmed",
  "followers_url": "https://api.github.com/users/Badhonahmed/followers",
  "following_url": "https://api.github.com/users/Badhonahmed/following{/other_user}",
  "gists_url": "https://api.github.com/users/Badhonahmed/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Badhonahmed/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Badhonahmed/subscriptions",
  "organizations_url": "https://api.github.com/users/Badhonahmed/orgs",
  "repos_url": "https://api.github.com/users/Badhonahmed/repos",
  "events_url": "https://api.github.com/users/Badhonahmed/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Badhonahmed/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-07-06T21:34:40Z",
  "updated_at": "2020-07-06T21:37:09Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('badhon.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at our website</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> chai aur code </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})