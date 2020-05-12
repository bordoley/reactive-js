import { pipe } from "../../functions.js";
import { createSubject } from "./createSubject.js";
import { dispatchTo } from "./dispatcher.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { addDisposableOrTeardown, add } from "../../disposable.js";
export const publish = (scheduler, replayCount = 0) => observable => {
    const subject = createSubject(replayCount);
    const srcSubscription = pipe(observable, onNotify(dispatchTo(subject)), subscribe(scheduler), addDisposableOrTeardown(subject));
    add(subject, srcSubscription);
    add(srcSubscription, subject);
    return subject;
};
