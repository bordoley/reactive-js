import { ObservableLike } from "./interfaces";
import { DisposableLike, add } from "../../disposable";
import { createObservable } from "./createObservable";

export const fromDisposable = (
  disposable: DisposableLike
): ObservableLike<unknown> => createObservable(
  dispatcher => {
    add(disposable, dispatcher)
  }
);