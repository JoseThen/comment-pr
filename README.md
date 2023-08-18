# Comment PR
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This action can be used to post a dynamic comment on a github PR

## Inputs

### `comment`

**Optional** The comment you would like to post. Default `''`.

### `json`

**Optional** A JSON comment you would like to post. Default `''`.

### `GITHUB_TOKEN`

**Required** The value of your GitHub Actions GitHub Token, this is
usually: `${{ secrets.GITHUB_TOKEN }}`
Make sure your `GITHUB_TOKEN` has the proper permissions to write on a pull-request.
Check here[https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token] how to add permissions if necessary.

## Permission example

```yaml
permissions:
  checks: read
  contents: read
  pull-requests: write
```

## Example usage

```yaml
uses: JoseThen/comment-pr@v1.1.1
with:
  comment: 'This PR is the bees knees!'
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

```yaml
uses: JoseThen/comment-pr@v1.1.1
with:
  json: '{ "this": "pr", "is": "the", "bees": "knees"}'
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Development
You need `vercel/ncc` installed with `npm i -g @vercel/ncc` before you can
compile the logic.

To build just make sure `npm ci` has been run and use `ncc build index.js`

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ciaranevans"><img src="https://avatars.githubusercontent.com/u/9111975?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ciaran Evans</b></sub></a><br /><a href="https://github.com/JoseThen/comment-pr/commits?author=ciaranevans" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
