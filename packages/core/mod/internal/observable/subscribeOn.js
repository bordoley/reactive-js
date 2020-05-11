import { pipe } from "../../functions.js";
import { createObservable } from "./createObservable.js";
import { dispatchTo } from "./dispatcher.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const subscribeOn = (scheduler) => observable => createObservable(dispatcher => {
    dispatcher.add(pipe(observable, onNotify(dispatchTo(dispatcher)), subscribe(scheduler)).add(dispatcher));
});
