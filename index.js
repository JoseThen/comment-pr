const core = require('@actions/core');
const {getOctokit, context} = require('@actions/github');

try {
    const comment = core.getInput('comment');
    const json = `\`\`\`json\n${core.getInput('json')}\n\`\`\``;
    const github_token = core.getInput('GITHUB_TOKEN');

    const {owner, repo} = context.repo;

    if (context.payload.pull_request == null) {
        core.setFailed('No pull request found.');
        return;
    }
    const pull_request_number = context.payload.pull_request.number;

    const octokit = new getOctokit(github_token);
    const new_comment = octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: pull_request_number,
        body: (comment === "" ? json : comment),
    });
} catch (error) {
    core.setFailed(error.message);
}
