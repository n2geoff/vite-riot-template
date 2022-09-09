import {register, mount} from 'riot';

/**
 * Register Global Components
 *
 * helper that registers and mounts global components
 * via an object registry
 *
 * @param {Object} registry     key:value object registry
 */
export function Register(registry = {}) {
    Object.entries(registry).map(([name, component]) => {
        register(name, component);
        mount(name);

        return {
            name,
            component
        }
    });
}

export default Register;
