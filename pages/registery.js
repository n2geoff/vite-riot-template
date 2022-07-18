import {register, mount} from 'riot';
import HelloRiot from './hello-riot/hello-riot.riot';

/*
    Add Global Pages to registry
*/
const Registry = {
    'hello-riot': HelloRiot
};

export default () => {
    Object.entries(Registry).map(([name, component]) => {
        register(name, component);
        mount(name);

        return {
            name,
            component
        }
    });
}
