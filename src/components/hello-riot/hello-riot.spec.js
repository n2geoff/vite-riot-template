import {component} from 'riot';
import {expect} from 'chai';
import HelloRiot from './hello-riot.riot';

describe('Hello Riot Page Unit Test', () => {
    const mount = component(HelloRiot);

    it('The component properties are properly rendered', () => {
        const div = document.createElement('div')

        const component = mount(div, {
            version: 'v7.x'
        });

        expect(component.$('p').innerHTML).to.be.equal('v7.x');
    });
});