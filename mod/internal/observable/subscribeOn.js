import { bindDisposables } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { createObservable } from "./createObservable.js";
import { dispatchTo } from "./dispatcher.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const subscribeOn = (scheduler) => observable => createObservable(dispatcher => {
    const subscription = pipe(observable, onNotify(dispatchTo(dispatcher)), subscribe(scheduler));
    bindDisposables(subscription, dispatcher);
});
