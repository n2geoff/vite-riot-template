import * as riot from "riot";
import app from "./components/app.riot";

const main = {
    // start-up actions here
    init() {
        // install plugins
        this.plugins();

        // mount components
        this.mount();
    },

    // extend functionality
    plugins() {
        riot.install((component) => {
            // add your own features here
            component.version = "3.0.0";
        });
    },

    mount() {
        // register core app component
        riot.register("app", app);

        // mount main app
        riot.mount("app");
    }
}

main.init();
