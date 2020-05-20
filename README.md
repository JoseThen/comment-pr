# Comment PR

This action can be used to post a dynamic comment on a github PR

## Inputs

### `comment`

**Required** The comment you would like to post. Default `''`.

## Example usage

```yaml
uses: JoseThen/comment-pr@v1
with:
  comment: 'This PR is the bees knees!'
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
