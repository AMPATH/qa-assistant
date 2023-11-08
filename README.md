

# AMPATH QA Assistant 
 - An Internal Tool to Help QA team and Automate Simple Dev on-call tasks



## Pre-requisites

Ensure you have chrome installed.
Install and setup git on your local machine.
Install npm and nodeJS.NodeJS version 10-12 and Npm version 6 recommended.
Install visual studio code.

### Setup

After you've made sure to have the correct things setup, you should be able to run a few commands to get set up:

```
cd QA-Assistant
yarn install
```

### Running the app

To get the app up and running locally, run: 

```
yarn run dev

```
Chrome comes with the Cross-Origin-Resource-Sharing security feature activated, run the followwing command in your terminal to deactivate CORS and run qa-assistant
```
$ google-chrome --disable-site-isolation-trials --disable-web-security --user-data-dir="~/tmp"


```

Fire up your chrome and go to ` http://localhost:5173/`. You should see a login screen with the AMPATH logo.
### Building locally

When building for production environment use:
`yarn build`

### Building for deployment

When building for production environment use:
``
When building for staging or test environment use:
``
This assists the team to differentiate which environment they are working on

### Running tests

```
yarn test
```

This command will build the app and launch the [vitest](https://vitest.dev) test runner. Vitest should spin up [several](https://www.npmjs.com/package/vitest) chrome browser instances (equal to the number of cores on your machine) and run the test specs in parallel the specs across them.

### Communication and management

There are a few tools that we use extensively that all AMPATH developers should have set up:

- [JIRA](https://www.atlassian.com/software/jira) for tracking bugs and project management.
- [Slack](https://slack.com) for project-specific group chats.
- AMRS is AMPATH's medical records system. You'll need an AMRS account for use with a lot of AMPATH's internal tools, including AMPATH POC.

Access to these platforms is managed by the AMPATH IT team.