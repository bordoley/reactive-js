import { bindDisposables } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { createSubject } from "./createSubject.js";
import { dispatchTo } from "./dispatcher.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const publish = (scheduler, options) => observable => {
    const subject = createSubject(options);
    const srcSubscription = pipe(observable, onNotify(dispatchTo(subject)), subscribe(scheduler));
    bindDisposables(srcSubscription, subject);
    return subject;
};
