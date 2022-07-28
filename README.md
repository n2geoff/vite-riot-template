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
    pages/                          <-- page components
        hello-riot/
            hello-riot.riot         <-- riot component
            hello-riot.spec.js      <-- component test
    index.js                        <-- application bootstrap
index.html                          <-- START HERE
vite.config.js                      <-- build configuration
README.md
...                                 <-- misc project meta files
```

### Mounting Strategy

This template uses a **pages** static registry based approach that auto-mounts global *page components* that then can dynaimicly mount other *components* needed build your up your content via the `components` export default property.

> SEE: `/src/js/registry.js` for more information

#### Components Example

```
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

> recommend a dedicated `/components` directory 

### Testing

- TODO

> SEE: `src/pages/hello-riot/hello-riot.spec.js` (unwired)


## NPM Scripts

- npm run dev - Starts the development server at port 3000
- npm run build - Builds the application in a dist folder
- npm run preview - Serves the build files (dist folder) locally at port 5000

> Note that if after this last command you do not see anything, you can use instead this other command:

`npm run preview --host` - You should then be able to see your files locally at port 5000

## TODO

- Add Testing Example w/ Chai & Mocha


## License

- [MIT License](https://github.com/n2geoff/vite-riot-template/blob/main/LICENSE).
