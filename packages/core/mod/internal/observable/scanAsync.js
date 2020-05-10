import { pipe } from "../../functions.js";
import { createSubject } from "./createSubject.js";
import { onNotify } from "./onNotify.js";
import { switchAll } from "./switchAll.js";
import { takeFirst } from "./takeFirst.js";
import { onSubscribe } from "./onSubscribe.js";
import { zipWithLatestFrom } from "./zipWithLatestFrom.js";
import { using } from "./using.js";
export const scanAsync = (scanner, initialValue) => observable => using(_ => createSubject(), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify(next => accFeedbackStream.dispatch(next)), onSubscribe(() => {
    accFeedbackStream.dispatch(initialValue());
})));
