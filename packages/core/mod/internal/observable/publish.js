import { pipe } from "../../functions.js";
import { createSubject } from "./createSubject.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { dispatchTo } from "./dispatcher.js";
export const publish = (scheduler, replayCount = 0) => observable => {
    const subject = createSubject(replayCount);
    const srcSubscription = pipe(observable, onNotify(dispatchTo(subject)), subscribe(scheduler)).add(subject);
    subject.add(srcSubscription);
    srcSubscription.add(subject);
    return subject;
};
