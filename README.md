# bizhare-tech-test

## Live Demo

You can try the live demo of the application here: [Live Demo](https://bizhare-app.vercel.app)

## Tech Stack Overview

### Language
- **JavaScript/TypeScript**: A versatile and widely-used language, which allows for both client-side and server-side development.

### Web Framework
- **Vue 3**: A progressive JavaScript framework for building user interfaces. Vue 3 is the latest version, offering improved performance and better composition API.
- **Vite**: A modern frontend build tool, significantly faster than traditional tools due to its native ES Modules support.

### Development Tools
- **Volar**: A Visual Studio Code extension enhancing the development experience for Vue.js, especially with TypeScript support.
- **ESLint**: A linter that helps in identifying and reporting on patterns in JavaScript and TypeScript, with a focus on code quality and consistency.
- **Prettier**: An opinionated code formatter that enforces a consistent style by reformatting code according to its rules.
- **Husky**: Used to enforce code quality by setting up Git hooks easily.
- **Commitlint**: Ensures that your commit messages meet the conventional commit format.
- **lint-staged**: Runs linters on staged git files, catching and fixing coding errors before they are committed.


## Why This Tech Stack?

1. **Vue 3**: Chosen for its simplicity and ease of integration. Vue 3's composition API offers improved code organization and reusability. It's a good fit for developing interactive web interfaces with a minimal overhead.
   
2. **Vite**: Vite was selected for its fast build times, significantly speeding up the development process. It leverages modern web standards and provides out-of-the-box support for Vue 3.

3. **TypeScript**: TypeScript offers type safety, making the code more robust and maintainable. Its integration with Vue enhances the development experience, especially for larger applications.

4. **ESLint & Prettier**: ESLint is included to enforce coding standards and reduce errors, while Prettier ensures consistent formatting. This combination ensures code quality and consistency throughout the project.

5. **Husky & Commitlint**: Husky and Commitlint are integrated to maintain high code quality standards. Husky sets up Git hooks to automate tasks like linting and tests before commits, while Commitlint ensures that commit messages follow a standard format.

6. **lint-staged**: This tool is used to run linters on staged changes in Git, helping to catch and fix issues early and ensuring that only well-formatted code gets committed.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Environment Setup
To properly configure the project environment, you need to create a `.env` file at the root of the project. This file should contain environment-specific variables necessary for the project to run correctly.

### Creating the `.env` File
1. Locate the `.env.example` file in the project root. This file contains template environment variables.
   
2. Create a new file named `.env` in the same directory.

3. Copy the contents of `.env.example` into the `.env` file.

4. Modify the values in `.env` as required for your development environment.

### `.env.example` Contents

The `.env.example` file contains default environment variables. For example:

```bash
VITE_API_BASE_URL="http://sandbox.bizharedev.id"
```


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
