import { add } from "../../disposable.js";
import { createObservable } from "./createObservable.js";
export const fromDisposable = (disposable) => createObservable(dispatcher => {
    add(disposable, dispatcher);
});
