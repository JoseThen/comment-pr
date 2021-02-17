# Comment PR

This action can be used to post a dynamic comment on a github PR

## Inputs

### `comment`

**Optional** The comment you would like to post. Default `''`.

### `json`

**Optional** A JSON comment you would like to post. Default `''`.

## Example usage

```yaml
uses: JoseThen/comment-pr@v1
with:
  comment: 'This PR is the bees knees!'
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

```yaml
uses: JoseThen/comment-pr@v1
with:
  json: '{ "this": "pr", "is": "the", "bees": "knees"}'
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Development
You need `vercel/ncc` installed with `npm i -g @vercel/ncc` before you can
compile the logic.

To build just make sure `npm ci` has been run and use `ncc build index.js`
