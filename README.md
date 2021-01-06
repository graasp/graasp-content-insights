# Graasp Insights Landing Page

The Graasp Insights [website](https://insights.graasp.org), built with GatsbyJS starting with the [Woo](https://www.styleshout.com/free-templates/woo/) template. The website contains:

- A link to Graasp Insights' GitHub repo (executables to come)
- An overview of Graasp Insights' features

![screenshot](https://user-images.githubusercontent.com/19311953/103768295-870fc580-5022-11eb-896c-547c765d1a0d.png)

## Getting Started

To edit and view the website in your local environment, follow the instructions below.

### Prerequisites

Make sure you have GatsbyJS installed. If you don't, click [here](https://www.gatsbyjs.org/docs/preparing-your-environment/) for installation instructions.

### Installation

1. After cloning the repository, run `yarn install`
2. Run `yarn start` to launch the project on a live local server; by default, the project will launch on [http://localhost:8000](#)
3. Edit the source code! The main content of the site is located in `/content`. When you finish editing, save your changes, and Gatsby will automatically reload [http://localhost:8000](#) to reflect them

### Deployment

When you are ready to show the site to the world:

1. Run `yarn build`
2. Deploy the website to the development environment by running `./scripts/deploy.sh -e .env.dev`
3. Deploy the website to production by running `./scripts/deploy.sh -e .env.prod`

## Credits

This theme was originally designed by [StyleShout](https://www.styleshout.com/free-templates/woo/) and was ported to Gatsby by [Fahad Desmukh](https://github.com/desmukh/).
