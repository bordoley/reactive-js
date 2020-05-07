import { onNotify } from "./onNotify.js";
import { createSubject } from "./createSubject.js";
import { pipe } from "../../functions.js";
import { subscribe } from "./subscribe.js";
export const publish = (scheduler, replayCount = 0) => observable => {
    const subject = createSubject(replayCount);
    const srcSubscription = pipe(observable, onNotify(next => subject.dispatch(next)), subscribe(scheduler)).add(subject);
    subject.add(srcSubscription);
    return subject;
};
