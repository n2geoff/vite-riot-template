import * as riot from "riot";
import {Route, Router} from "@riotjs/route";
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
            component.version = {
                riot: "9.x.x",
                vite: "5.x.x",
                app: "3.1.0"
            };
        });
    },

    mount() {
        // register core app component
        riot.register("app", app);
        riot.register("router", Router);
        riot.register("route", Route);

        // mount main app
        riot.mount("app");
    }
}

main.init();
