module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
  ],
  siteMetadata: {
    title: "Fiber",
    description:
      "Create your portfolio in minutes with Fiber's premade templates.",
    copyright: "This website is copyright 2021 Isaac Arnold",
    contact: "isaacarnold@icloud.com",
  },
};
