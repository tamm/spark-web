# Brighte Spark Design System

## Getting Started

Documentation for the latest published versions of each component are hosted
[here](https://spark.brighte.com.au/). See the
[Getting Started Guide](https://spark.brighte.com.au/guide/getting-started) for
a lightweight example of how Spark Web can be used.

### Running Spark Web Locally

TBC

#### Assumptions

- Using Node v14 or above

## Code

Spark-Web code is currently hosted in
[GitHub](https://github.com/brighte-labs/spark-web). You'll need to be logged
into GitHub via SSO to access the repo. Developers dont yet automatically get
access to GitHub when onboarded so you might need to request.

### Publish a Release

- Create a PR with a valid change set & merge into main
- Wait for new PR to show up called "Version Packages"
- Approve PR and merge.
- Release action triggered on merge
- Notifications of new versions in GitHub.

## Building & Publishing Changes to npm

### Generating Snapshot Releases

We use a feature of changesets called a
[Snapshot Release](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md)
to build and publish releases of components before they are ready for release.
It runs as a GitHub action using the config in
[snapit.yml](./.github/workflows/snapit.yml). This is really useful for
experimenting with new components or publishing a quick fix that might take a
while to be published otherwise.

#### Steps for releasing a snapshot

- Create a PR with a valid changeset.
- Add either `/snapit` or `/snapshot-release` as a comment (if there is any
  extra characters or whitespace in the comment this will not work)
- Your comment should get an 👀 emoji reaction. This means GitHub has kicked off
  the action
- Once your comment gets a 🚀 reaction, the GitHub action has finished.
- The action finishes by commenting with the new published snapshot versions.

## Known Issues

### Storybook shows a blank screen

This usually happens when editing or adding components used in stories, and is
usually because Storybook has cached stale components.

Run

```bash
yarn dev:storybook:no-cache
```

once to reload the cache. Or, if that doesn't work

```bash
yarn clean && yarn install && yarn dev:storybook
```
