import { pipe } from "../../functions.js";
import { createObservable } from "./createObservable.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const subscribeOn = (scheduler) => observable => createObservable(subscriber => {
    subscriber.add(pipe(observable, onNotify(next => subscriber.dispatch(next)), subscribe(scheduler)).add(e => subscriber.dispose(e)));
});
