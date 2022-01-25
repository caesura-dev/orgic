# Orgic website project

This repository is intended as the main source code behind the Orgic project. More details about the nature of the project will be added later.

For details on contributing to the project contact [caesuradev@protonmail.com](caesuradev@protonmail.com)

## Contribution guidelines

For developers contributing to the project, follow [trunk-based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) where applicable. In broad strokes contributing to the project should be as follows:

    1. Create a new branch for your feature
    2. Commit all new code to your branch
    3. When finished, create a pull request against the main branch
    4. Request code review from other developers
    5. Wait for automated tests (if any) to complete
    6. After PR is green (all tests passed, code reviewed by at least one other developer) merge branch into main and delete your working branch.

For branch names, keep them succinct but descriptive of the work done, e.g. "add-dark-mode"

## Detailed guide for developers

### Installing Git version tracking system

To get started you **must have** Git installed on your computer. [Get started with Git](https://github.com/git-guides/install-git#:~:text=To%20install%20Git%2C%20run%20the,installation%20by%20typing%3A%20git%20version%20.)

After installing Git you need to add a new SSH key to your account.

For generating new SSH keys [read this](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

For adding SSH keys to your Github profile [read this](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

After you have successfully installed Git, clone this repository to your computer with

`git clone git@github.com:caesura-dev/Orgic.git`

### Making changes

To add new code to the repository first switch to a new branch with

`git checkout -b <new-branch-name-here>`

Then make your changes as usual.

When you're ready to commit your work, do so with

`git add . && git commit -m "<Descriptive message here>"`

Then push your changes to the remote repository with

`git push origin <new-branch-name-here>`

Now you've successfully added code to the codebase and committed your work. To merge your work to the main branch and publish your work to the world, navigate over to https://github.com/caesura-dev/Orgic and you should see a big banner on the top of the page saying "Branch `<new-branch>` has new changes" with a button prompting you to start a new pull request. Click the button to start a pull request and that will take you to a page where you can detail what you've changed, and make sure to request reviews (this should be done automatically). After your code has been reviewed and approved, you can click on the big green merge button and then delete your working branch.

### Tracking tasks

Tracking tasks is done with "Dev work" kanban table in the Projects tab of the repository. Whenever new tasks arise, add them as cards to the "To do" column with a short title and description of what needs to be done. Cards should ideally have at least one assignee to keep the possibility of clashing work (two people doing the same task) as low as possible. Prefer small tasks over large contributions.
