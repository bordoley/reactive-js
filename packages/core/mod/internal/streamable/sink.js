import { onNotify, using, endWith } from "../../observable.js";
import { pipe } from "../../functions.js";
import { subscribe } from "../observable/subscribe.js";
import { ignoreElements } from "../observable/ignoreElements.js";
import { isSome, none } from "../../option.js";
export const sink = (src, dest) => using(scheduler => {
    const srcStream = src.stream(scheduler);
    const destStream = dest.stream(scheduler);
    const dataSubscription = pipe(srcStream, onNotify(next => destStream.dispatch(next)), subscribe(scheduler)).add(e => {
        if (isSome(e)) {
            destStream.dispose(e);
        }
    });
    const reqSubscription = pipe(destStream, onNotify(next => srcStream.dispatch(next)), subscribe(scheduler));
    return destStream
        .add(srcStream)
        .add(dataSubscription)
        .add(reqSubscription);
}, (destStream) => pipe(destStream, ignoreElements(), endWith(none)));
