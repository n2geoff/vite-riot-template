import {Register} from './js/register.js';
import HelloRiot from './components/hello-riot/hello-riot.riot';

// define global components here
const registry = {
    'hello-riot': HelloRiot
};

// register global components 
Register(registry);
