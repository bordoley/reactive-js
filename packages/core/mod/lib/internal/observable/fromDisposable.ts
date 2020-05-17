import { ObservableLike } from "./interfaces.ts";
import { DisposableLike, add } from "../../disposable.ts";
import { createObservable } from "./createObservable.ts";

export const fromDisposable = (
  disposable: DisposableLike
): ObservableLike<unknown> => createObservable(
  dispatcher => {
    add(disposable, dispatcher)
  }
);