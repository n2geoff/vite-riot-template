# Vite RiotJS Template

Use [Vite](https://vitejs.dev/) Starter Template to scaffold a new [Riot](https://riot.js.org/) project.


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
    components/                     <-- riots components
        hello-riot/
            hello-riot.riot         <-- riot component
            hello-riot.spec.js      <-- component tests
    index.js                        <-- application bootstrap
index.html                          <-- START HERE
vite.config.js                      <-- build configuration
README.md
...                                 <-- misc project meta files
```

### Mounting Strategy

This template uses a static object registry to mount global **components** which in-turn can mount other nested components via `components` export option.

#### Example

```
// my-page.riot
<my-page>
    <div>
        <example-component></example-component>
    </div>

    <script>
        import Example from './example-component/example-component.riot';

        export default {
            components: {
                Example
            }
        }
    </script>
</my-page>
```

> SEE: `/src/index.js` for more information


### Tests

In a folder-per-component setup, you can place your `*.spec.js` files right next to your web components for isolated testing, but this template is a...

*bring your own testing solution*

> CHAI/MOCHA EXAMPLE: `src/components/hello-riot/hello-riot.spec.js` (unwired)


## NPM Scripts

- `npm run dev` - Starts the development server at port 3000
- `npm run build` - Builds the application in a dist folder
- `npm run preview` - Serves the build files (dist folder) locally at port 5000

> Note that if after this last command you do not see anything, you can use instead this other command:

`npm run preview --host` - You should then be able to see your files locally at port 5000


## License

- [MIT License](https://github.com/n2geoff/vite-riot-template/blob/main/LICENSE).
