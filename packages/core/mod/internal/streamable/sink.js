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
    pipe(srcStream, onNotify(dispatchTo(destStream)), subscribe(scheduler)).add(destStream);
    pipe(destStream, onNotify(dispatchTo(srcStream)), subscribe(scheduler)).add(srcStream);
    return destStream;
}, ignoreAndNotifyVoid);
