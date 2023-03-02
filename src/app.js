// RiotJS
import * as riot from 'riot';

/**
 * Recursively scan this directory for the Riot components and
 * automatically register them with their "name".
 *
 * Eg. ./components/ExampleComponent.riot -> <example-component></example-component>
 */
Object.entries(import.meta.glob('./**/*.riot', { eager: true })).forEach(([path, definition]) => {

    // component name
    let name = path.split('/').pop().replace(/\.\w+$/, '');

    riot.register(name, definition.default);
    riot.mount(name);
});