# Clean Next.js Boilerplates

This repo is a container for various Next.js boilerplates with different functionality tacked on with both JavaScript and TypeScript. To use a specific combination, clone the repo then switch to that branch then follow the instructions in that README.

All branches fetch the latest dependencies and include a dummy api route. All the branches also include a Meta component as well as a manifest.json for easily setting the metadata for your site. Lastly, all the branches disable the dev tools in production.

## Available Branches

1. **with-javascript**
   The default and cleanest boilerplate with no extra dependencies or features.

2. **with-javascript-mongodb**
   A JavaScript Next.js boilerplate with the setup for integration with MongoDB.

3. **with-javascript-sass**
   A JavaScript Next.js boilerplate with the setup for using Sass. It includes the newer `use` and `forward` syntax and has some base styles separated into components and abstracts directories which can be customised.

4. **with-javascript-sass-mongodb**
   A JavaScript Next.js boilerplate which is an amalgamation of the `with-javascript-mongodb` and `with-javascript-sass` branches.

5. **with-typescript**
   The default Next.js boilerplate setup for using TypeScript instead of JavaScript.

6. **with-typescript-mongodb**
   A TypeScript Next.js boilerplate with the setup for integration with MongoDB.

7. **with-typescript-sass**
   A TypeScript Next.js boilerplate with the setup for using Sass. It includes the newer `use` and `forward` syntax and has some base styles separated into components and abstracts directories which can be customised.

8. **with-typescript-sass-mongodb**
   A TypeScript Next.js boilerplate which is an amalgamation of the `with-typescript-mongodb` and `with-typescript-sass` branches.

9. **with-eslint**
   There are `with eslint` versions of all the boilerplates above. These branches just have a stock eslint configuration obtained by running `npx next lint` and choosing the `strict` option. Just add `-eslint` to the branch name to get the respective branches.

10. **with-context**
    There are `with-context` versions of all the boilerplates above which have a stock Context API config. Just add `-context` to the branch name to get the respective branches.
