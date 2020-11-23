import { DisposableLike, addDisposable } from "../disposable";
import { ObservableLike } from "../observable";
import { createObservable } from "./createObservable";

export const fromDisposable = (
  disposable: DisposableLike,
): ObservableLike<unknown> =>
  createObservable(dispatcher => {
    addDisposable(disposable, dispatcher);
  });
