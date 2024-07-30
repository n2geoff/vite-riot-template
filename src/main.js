import * as riot from "riot";
import app from "./components/app.riot";

const main = {
    init() {
        // start-up actions here

        // mount components
        this.mount();
    },

    mount() {
        // register core app component
        riot.register("app", app);

        // mount main app
        riot.mount("app");
    }
}

main.init();
