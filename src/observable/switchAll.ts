import { ConcatAll } from "../container";
import {
  addToDisposeOnChildError,
  dispose,
  disposed,
  onComplete,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { lift } from "./lift";
import { Observer } from "./observer";
import { subscribe } from "./subscribe";

function onDispose(this: SwitchObserver<unknown>) {
  if (this.inner.isDisposed) {
    pipe(this.delegate, dispose());
  }
}

function onNotify<T>(this: SwitchObserver<T>, next: T) {
  this.delegate.notify(next);
}

class SwitchObserver<T> extends Observer<ObservableLike<T>> {
  inner = disposed;

  constructor(readonly delegate: Observer<T>) {
    super(delegate.scheduler);
  }

  notify(next: ObservableLike<T>) {
    this.assertState();

    pipe(this.inner, dispose());

    const inner = pipe(
      next,
      subscribe(this.scheduler, onNotify, this),
      addToDisposeOnChildError(this.delegate),
      onComplete(() => {
        if (this.isDisposed) {
          pipe(this.delegate, dispose());
        }
      }),
    );
    this.inner = inner;
  }
}

const operator = <T>(delegate: Observer<T>) =>
  pipe(
    new SwitchObserver(delegate),
    addToDisposeOnChildError(delegate),
    onComplete(onDispose),
  );

const switchAllInstance = lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  switchAllInstance as ObservableOperator<ObservableLike<T>, T>;

export const switchAllT: ConcatAll<
  ObservableLike<unknown>,
  Record<string, never>
> = {
  concatAll: switchAll,
};
