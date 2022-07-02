import { ConcatAll } from "../container";
import {
  addTo,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "../disposable";
import { newInstanceWith, pipe } from "../functions";
import { getDelegate } from "../liftable";
import { ObservableLike, ObservableOperator } from "../observable";
import {
  AbstractDelegatingObserver,
  Observer,
  getScheduler,
} from "../observer";
import { assertState, notifySink } from "../source";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

function onDispose(this: SwitchObserver<unknown>) {
  if (isDisposed(this.inner)) {
    pipe(this, getDelegate, dispose());
  }
}

class SwitchObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  inner = disposed;

  notify(next: ObservableLike<T>) {
    assertState(this);

    pipe(this.inner, dispose());

    const inner = pipe(
      next,
      onNotify(pipe(this, getDelegate, notifySink)),
      subscribe(getScheduler(this)),
      addTo(getDelegate(this)),
      onComplete(() => {
        if (isDisposed(this)) {
          pipe(this, getDelegate, dispose());
        }
      }),
    );
    this.inner = inner;
  }
}

const operator = <T>(delegate: Observer<T>) =>
  pipe(
    SwitchObserver,
    newInstanceWith(delegate),
    addTo(delegate),
    onComplete(onDispose),
  );

const switchAllInstance = /*@__PURE__*/ lift(operator);
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
