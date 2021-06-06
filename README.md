# next-relay-template

The idea of this repo is to find the best way of configure [Relay](https://relay.dev/) in a [Next](https://nextjs.org/) app to have the highest DX and the best possible performance.

### Requirements

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) (Repo is configured to use [PnP](https://yarnpkg.com/features/pnp) installation)

### Run the project

    1- npm install -g yarn (Update yarn to latest v1)
    2- yarn set version berry (Set yarn 2 in the project)
    3- yarn
    5- yarn dev

### Configure editor (VS Code)

* `yarn dlx @yarnpkg/pnpify --sdk vscode`

* [Make VS Code works with TypeScript + PnP](https://yarnpkg.com/getting-started/editor-sdks#vscode) (in he future maybe VS Code requires you to repeat this actions)
    
    * For safety reason VSCode requires you to explicitly activate the custom TS settings
    * Press `ctrl+shift+p` in a TypeScript file
    * Choose **"Select TypeScript Version"**
    * Pick **"Use Workspace Version"**
* Install [ESlint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

* **Make VS Code works with ESlint + PnP** (in he future maybe VS Code requires you to repeat this actions)
    * Press `ctrl+shift+p`
    * Chose **ESLint: Select Node Path**
    * Pick **Use NODE_PATH value defined via setting .yarn/sdk**


* Install [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

* Install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
