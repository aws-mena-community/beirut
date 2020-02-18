# AWS Mena Community Blog

This is the repository of the website [beirut.awsmena.community](https://beirut.awsmena.community). It is hosted directly from the repository as a [GitHub Pages](https://pages.github.com/) website.

- [Local Setup](#local-setup)
- [Add an event](#add-an-event)
- [Create a new user group blog](#add-a-new-user-group-blog)
- [Contributions](#contributions)
- [Credits](#credits)

## Local Setup

To preview the website locally:

1. Install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you don't have them already.

2. Install Jekyll and other [dependencies](https://pages.github.com/versions/) from the GitHub Pages gem:

3. Install [Node](https://nodejs.org/en/download/).

```sh
$ npm start
```

Then, load [http://localhost:4000/](http://localhost:4000/) in your browser.

## Add an event

```sh
yarn create:post My Event Title
# or npm run create:post -- My Event Title
# or node cli/create-post.js My Event Title
```

This command will create a new markdown file in `_posts/` named : `YEAR-MONTH-DAY-title.md`

Replace YEAR MONTH and DAY with the date of the event.

## Add a new user group blog

1. Fork this repo to a new one under aws-mena-community.
2. Replace events in `_data/old-events.yml` with your previous events or delete the file.
3. In `_config.yml`, replace `city` with your city and url with `YOURCITY.awsmena.community`
4. Delete posts and add your own as needed
5. Replace `CNAME` file with `YOURCITY.awsmena.community`

## Contributions

Issues and PRs are welcome and appreciated.

## Credits

This website was originally forked from [martinbuberl/awscommunitynordics](https://github.com/martinbuberl/awscommunitynordics).

Big thanks to [AWS Community Nordics](https://awscommunitynordics.org/).
