# Vite RiotJS Template

Use [Vite](https://vitejs.dev/) Starter Template to scaffold a new [Riot](https://riot.js.org/) project.

## Features

Minimal SPA setup using

- Riot 9.x
- Route 9.x
- Vite 5.x

## Getting Started

Pull the template files with [degit](https://github.com/Rich-Harris/degit) and install dependencies

```
npx degit n2geoff/vite-riot-template my-project

cd my-project
npm install
npm run dev
```

### Checklist

When you use this template, you should update the following with your information

- [ ] Update `package.json` information
- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `public`
- [ ] Clean up the README


### Project Structure

```
dist/                               <-- `npm run build` app
src/                                <-- your source code
    css/                            <-- processed css files
    js/                             <-- processed javascript files
    public/                         <-- unprocessed static `/` assets
    components/                     <-- riots components examples
        riot-welcome.riot
        riot-about.riot
    main.js                         <-- main app initialization
index.html                          <-- START HERE
vite.config.js                      <-- build configuration
README.md
...                                 <-- misc project meta files
```

## NPM Scripts

- `npm run dev` - Starts the development server at port 5173
- `npm run build` - Builds the application in a dist folder
- `npm run preview` - Serves the build files (dist folder) locally at port 4173

> See [ViteJS Documentation](https://vitejs.dev/) for more information


## License

- [MIT License](https://github.com/n2geoff/vite-riot-template/blob/main/LICENSE).
