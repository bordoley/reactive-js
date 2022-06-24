import {
  DisposableOrTeardown,
  addDisposableDisposeParentOnChildError,
  addTeardown,
} from "../disposable";
import { Factory, pipe } from "../functions";
import { ObservableOperator } from "../observable";
import { isSome, none } from "../option";
import { sinkInto } from "../source";
import { createObservable } from "./createObservable";

/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
export const onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>): ObservableOperator<T, T> =>
  src =>
    createObservable(observer => {
      pipe(src, sinkInto(observer));
      const disposable = f() || none;
      if (disposable instanceof Function) {
        addTeardown(observer, disposable);
      } else if (isSome(disposable)) {
        addDisposableDisposeParentOnChildError(observer, disposable);
      }
    });
