import { addDisposable } from "../../disposable.js";
import { compose, pipe } from "../../functions.js";
import { onNotify, using, endWith, dispatchTo, } from "../../observable.js";
import { none } from "../../option.js";
import { ignoreElements } from "../observable/ignoreElements.js";
import { subscribe } from "../observable/subscribe.js";
import { stream } from "./streamable.js";
const ignoreAndNotifyVoid = compose(ignoreElements(), endWith(none));
export const sink = (src, dest) => using(scheduler => {
    const srcStream = stream(src, scheduler);
    const destStream = stream(dest, scheduler);
    const srcSubscription = pipe(srcStream, onNotify(dispatchTo(destStream)), subscribe(scheduler));
    const destSubscription = pipe(destStream, onNotify(dispatchTo(srcStream)), subscribe(scheduler));
    addDisposable(srcSubscription, destStream);
    addDisposable(destSubscription, srcStream);
    return destStream;
}, ignoreAndNotifyVoid);
