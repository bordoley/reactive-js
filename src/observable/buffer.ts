import { Buffer, fromValue } from "../container";
import {
  SerialDisposable,
  add,
  addTo,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "../disposable";
import { MAX_SAFE_INTEGER } from "../env";
import {
  Function1,
  isEmpty,
  length,
  max,
  newInstance,
  newInstanceWith,
  pipe,
} from "../functions";
import { getDelegate } from "../liftable";
import { ObservableLike, ObservableOperator } from "../observable";
import {
  AbstractDelegatingObserver,
  Observer,
  getScheduler,
} from "../observer";
import { none } from "../option";
import { assertState, notify, sinkInto } from "../source";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { never } from "./never";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

class BufferObserver<T> extends AbstractDelegatingObserver<T, readonly T[]> {
  buffer: T[] = [];

  constructor(
    delegate: Observer<readonly T[]>,
    private readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    private readonly maxBufferSize: number,
    readonly durationSubscription: SerialDisposable,
  ) {
    super(delegate);
  }

  notify(next: T) {
    assertState(this);

    const { buffer, maxBufferSize } = this;

    buffer.push(next);

    const doOnNotify = () => {
      this.durationSubscription.inner = disposed;

      const buffer = this.buffer;
      this.buffer = [];

      pipe(this, getDelegate, notify(buffer));
    };

    if (length(buffer) === maxBufferSize) {
      doOnNotify();
    } else if (isDisposed(this.durationSubscription.inner)) {
      this.durationSubscription.inner = pipe(
        next,
        this.durationFunction,
        onNotify(doOnNotify),
        subscribe(getScheduler(this)),
      );
    }
  }
}

/**
 * Returns an `ObservableLike` which buffers items produced by the source until either the
 * number of items reaches the specified maximum buffer size or the duration time expires.
 *
 * @param options A configuration object that specifies an optional `duration` function or time in ms,
 * and an optional `maxBufferSize`.
 */
export function buffer<T>(
  options: {
    readonly duration?: Function1<T, ObservableLike<unknown>> | number;
    readonly maxBufferSize?: number;
  } = {},
): ObservableOperator<T, readonly T[]> {
  const delay = options.duration ?? MAX_SAFE_INTEGER;
  const durationFunction =
    delay === MAX_SAFE_INTEGER
      ? never
      : typeof delay === "number"
      ? (_: T) => fromValue(fromArrayT, { delay })(none)
      : delay;

  const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

  const operator = (delegate: Observer<readonly T[]>) => {
    const durationSubscription = newInstance(SerialDisposable);
    return pipe(
      BufferObserver,
      newInstanceWith<
        BufferObserver<T>,
        Observer<readonly T[]>,
        Function1<T, ObservableLike<unknown>>,
        number,
        SerialDisposable
      >(delegate, durationFunction, maxBufferSize, durationSubscription),
      add(durationSubscription),
      addTo(delegate),
      onComplete(function onDispose(this: BufferObserver<void>) {
        const { buffer } = this;
        this.buffer = [];

        if (isEmpty(buffer)) {
          pipe(this, getDelegate, dispose());
        } else {
          pipe(buffer, fromValue(fromArrayT), sinkInto(getDelegate(this)));
        }
      }),
    );
  };

  return lift(operator, delay === MAX_SAFE_INTEGER);
}

export const bufferT: Buffer<ObservableLike<unknown>> = {
  buffer,
};
