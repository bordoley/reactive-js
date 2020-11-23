import { DisposableLike, addDisposable } from "../../disposable";
import { createObservable } from "./createObservable";
import { ObservableLike } from "../../observable";

export const fromDisposable = (
  disposable: DisposableLike,
): ObservableLike<unknown> =>
  createObservable(dispatcher => {
    addDisposable(disposable, dispatcher);
  });
