import { DisposableLike, addDisposable } from "../../disposable.ts";
import { createObservable } from "./createObservable.ts";
import { ObservableLike } from "./interfaces.ts";

export const fromDisposable = (
  disposable: DisposableLike,
): ObservableLike<unknown> =>
  createObservable(dispatcher => {
    addDisposable(disposable, dispatcher);
  });
