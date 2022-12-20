# simonrodrig.github.io

This is my personal landing page! At the moment I'm just displaying basic info
about myself, but I gave myself room for a blog if I feel up to it in the future.

Feel free to send in PRs for typos and other improvements!

## How to Build

Run the following:

```sh
npm run build
```

This should output to a `build/` directory. The site is static, so you can
deploy from your favorite hoster. In my case, I'm using Github Pages.

## GitHub Pages Deployment

I have a GitHub Actions workflow that will deploy on every push to the `master`
branch. However, if you'd like to deploy manually, do the following:

```sh
npm run deploy
```

This should build the project, and execute the `gh-pages` package to push the
built project to the remote `gh-pages` branch.
