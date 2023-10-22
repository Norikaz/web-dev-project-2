## Set up

1. Clone the repo to your perfered IDE(VS Code Highly suggested)
2. run npm install
3. Assuming you are using VS Code -> Install the following extentsions for ideal development:

- Eslint: dbaeumer.vscode-eslint (Extension Id's)
- Prettier: esbenp.prettier-vscode

### [Learn how to contribute to the repo and make revisions](https://cuny-my.sharepoint.com/:v:/g/personal/norik_zhagui69_qmail_cuny_edu/EaAxVWmxerVPuvE5fhPhfhEBtV8XoVmVsRc6z__jiEb4Wg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19&e=evrRlK) 
Note you may need to run this before making a revision 

```
git config pull.rebase true
```
### [Learn how to work with other developers and update your existing branch when someone has mereged theirs](https://www.youtube.com/watch?v=f1wnYdLEpgI&t=313s)


## [UI Library](https://mui.com/material-ui/getting-started/)
We are using MUI for our front end components 

## Team Coding conventions

### Componenets

Should follow this [structure](https://cuny-my.sharepoint.com/:i:/g/personal/norik_zhagui69_qmail_cuny_edu/ESHZa8w1_kRFrJPUwNlhLp8BHO0K2u495hB0REJPf1hQ3A?e=wl9gZq)

### Props

If your component takes in any props define an interface for them at the top most level underneath the imports

## Development

We will be using Git branch work flow

- create a new branch for every new feature that is being implimented
- You must unit test that code if there is functionality

IMPORTANT: Make sure to commit once to a branch and any changes after should be an ammed commit and not a new commit. This will allow the reivewers to see the diff between revisions easier and make reviews more efficient

## Pull Request

should not be more than one page if you have to much code in one pull request you will have to split them up into multiple differnt pull request if possible do not overwhelem the reviewers with too much code.
Look into [Sub branching](https://stackoverflow.com/questions/4470523/create-a-branch-in-git-from-another-branch) to optimize your development workflow in order to not be slowed down while waiting on code to be reviewed or use it to have a follow up pull request if your original one was to large

A PR can only be merged when it has approval from atleast two reviewers
