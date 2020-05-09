import { pipe } from "../../functions.js";
import { createObservable } from "./createObservable.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const subscribeOn = (scheduler) => observable => createObservable(dispatcher => {
    dispatcher.add(pipe(observable, onNotify(next => dispatcher.dispatch(next)), subscribe(scheduler)).add(dispatcher));
});
