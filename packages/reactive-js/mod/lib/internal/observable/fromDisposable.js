import { addDisposable } from "../../disposable.js";
import { createObservable } from "./createObservable.js";
export const fromDisposable = (disposable) => createObservable(dispatcher => {
    addDisposable(disposable, dispatcher);
});
