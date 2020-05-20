# Comment on PR javascript action

This action can be used to post a dynamic comment on a github PR

## Inputs

### `comment`

**Required** The comment you would like to post. Default `''`. This can be used
with `word-slots` by adding `{}` for each word you want to add.

## Example usage

```yaml
uses: JoseThen/comment-pr@v1
with:
  comment: 'This PR is the bees knees!'
```
