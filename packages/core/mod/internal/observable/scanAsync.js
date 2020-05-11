import { pipe } from "../../functions.js";
import { createSubject } from "./createSubject.js";
import { dispatchTo, dispatch } from "./dispatcher.js";
import { onNotify } from "./onNotify.js";
import { onSubscribe } from "./onSubscribe.js";
import { switchAll } from "./switchAll.js";
import { takeFirst } from "./takeFirst.js";
import { using } from "./using.js";
import { zipWithLatestFrom } from "./zipWithLatestFrom.js";
export const scanAsync = (scanner, initialValue) => observable => using(_ => createSubject(), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify(dispatchTo(accFeedbackStream)), onSubscribe(() => {
    dispatch(accFeedbackStream, initialValue());
})));
