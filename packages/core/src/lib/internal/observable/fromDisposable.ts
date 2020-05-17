import { DisposableLike, add } from "../../disposable";
import { createObservable } from "./createObservable";
import { ObservableLike } from "./interfaces";

export const fromDisposable = (
  disposable: DisposableLike,
): ObservableLike<unknown> =>
  createObservable(dispatcher => {
    add(disposable, dispatcher);
  });
