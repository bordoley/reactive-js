import { ConcatAll } from "../container";
import {
  addTo,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer, scheduler } from "../observer";
import { notifySink } from "../source";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

function onDispose(this: SwitchObserver<unknown>) {
  if (isDisposed(this.inner)) {
    pipe(this.delegate, dispose());
  }
}

class SwitchObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  inner = disposed;

  notify(next: ObservableLike<T>) {
    this.assertState();

    pipe(this.inner, dispose());

    const inner = pipe(
      next,
      onNotify(notifySink(this.delegate)),
      subscribe(scheduler(this)),
      addTo(this.delegate),
      onComplete(() => {
        if (isDisposed(this)) {
          pipe(this.delegate, dispose());
        }
      }),
    );
    this.inner = inner;
  }
}

const operator = <T>(delegate: Observer<T>) =>
  pipe(new SwitchObserver(delegate), addTo(delegate), onComplete(onDispose));

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
