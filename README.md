# Coding Contributions

A NextJS serverless API to get a user's Github, Hackerrank, and Leetcode contributions. Hosted on [now.sh](https://now.sh/). Faster than Heroku servers.

### Endpoint

https://coding-contributions.vercel.app/api

### Example Request

```sh
curl https://coding-contributions.vercel.app/api/ethanneff/github
curl https://coding-contributions.vercel.app/api/ethanneff/leetcode
curl https://coding-contributions.vercel.app/api/ethanneff/hackerrank
```

### Example Response

```json
{
  "2018-12-23": 0,
  "2018-12-24": 5,
  "2018-12-25": 2,
  "2018-12-26": 10,
  "2018-12-27": 3,
  "2018-12-28": 24,
  "2018-12-29": 5,
  "2018-12-30": 0,
  "2018-12-31": 11,
  "2019-01-01": 8
}
```

### Develop

```sh
yarn dev
open http://localhost:3333/
```

### Production

```sh
yarn build
yarn start
open http://localhost:3333/
```

### Deploy

Automatically on merge to master
https://vercel.com/ethanneff/coding-contributions
