# next-relay-template

The idea of this repo is to find the best way of configure [Relay](https://relay.dev/) in a [Next](https://nextjs.org/) app to have the highest DX and the best possible performance.

### Requirements

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) (Repo is configured to use [PnP](https://yarnpkg.com/features/pnp) installation)

### Run the project

1- `npm install -g yarn //dedw` (Update yarn to latest v1)
2- `yarn set version berry` (Set yarn 2 in the project)
3- `yarn`
4- `yarn dev`

### Configure editor (VS Code)

* [Make VS Code works with TypeScript + PnP](https://yarnpkg.com/getting-started/editor-sdks#vscode)
    * `yarn dlx @yarnpkg/pnpify --sdk vscode`
    * For safety reason VSCode requires you to explicitly activate the custom TS settings
    * Press `ctrl+shift+p` in a TypeScript file
    * Choose **"Select TypeScript Version"**
    * Pick **"Use Workspace Version"**
* Install [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)