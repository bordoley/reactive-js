import { pipe } from "../../functions.js";
import { createObservable } from "./createObservable.js";
import { dispatchTo } from "./dispatcher.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { addDisposableOrTeardown, add } from "../../disposable.js";
export const subscribeOn = (scheduler) => observable => createObservable(dispatcher => {
    add(dispatcher, pipe(observable, onNotify(dispatchTo(dispatcher)), subscribe(scheduler), addDisposableOrTeardown(dispatcher)));
});
