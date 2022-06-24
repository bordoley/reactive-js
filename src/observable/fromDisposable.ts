import {
  DisposableLike,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import { ObservableLike } from "../observable";
import { createObservable } from "./createObservable";

export const fromDisposable = (
  disposable: DisposableLike,
): ObservableLike<unknown> =>
  createObservable(observer => {
    addDisposableDisposeParentOnChildError(disposable, observer);
  });
