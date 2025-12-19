import * as riot from "riot";
import {Route, Router} from "@riotjs/route";
import app from "./views/pages/app.riot";

const boot = {
    // start-up actions here
    start() {
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
                riot: "10.x",
                vite: "7.x.",
                app: "5.0.0"
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

boot.start();
