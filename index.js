import * as riot from 'riot';
import app from "./app.riot";

riot.register('app', app);
riot.mount('app', {message: 'Hello Riot'});