const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const comment = core.getInput('comment');
        const github_token = core.getInput('GITHUB_TOKEN');

      const context = github.context;
      if (context.payload.pull_request == null) {
          core.setFailed('No pull request found.');
          return;
      }
      const pull_request_number = context.payload.pull_request.number;

      const octokit = new github.GitHub(github_token);
      const new_comment = octokit.issues.createComment({
          ...context.repo,
          issue_number: pull_request_number,
          body: comment
        });

    } catch (error) {
      core.setFailed(error.message);
    }
  }

  run();
