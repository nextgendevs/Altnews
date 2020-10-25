const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),

    // only needed if you want to purge
   // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};