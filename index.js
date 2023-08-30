const core = require('@actions/core');
const {getOctokit, context} = require('@actions/github');
const fs = require('fs');

try {
    let json, file_content = null;
    const comment = core.getInput('comment');
    json = `\`\`\`json\n${core.getInput('json')}\n\`\`\``;
    const file_path = core.getInput('file_path')
    const github_token = core.getInput('GITHUB_TOKEN');

    const {owner, repo} = context.repo;

    if (context.payload.pull_request == null) {
        core.setFailed('No pull request found.');
        return;
    }
    if (file_path !== '' && !!file_path) {
        try {
            file_content = fs.readFileSync(file_path, { encoding: 'utf8' });
        } catch (error) {
            core.setFailed(error.message);
        }
    }
    const pull_request_number = context.payload.pull_request.number;

    const octokit = new getOctokit(github_token);
    const new_comment = octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: pull_request_number,
        body: file_content || json || comment,
        // body: (comment === "" ? json : comment),
    });
} catch (error) {
    core.setFailed(error.message);
}
