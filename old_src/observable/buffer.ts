import { getDelegate } from "../__internal__.delegating";
import { DisposableRef } from "../__internal__.disposable";
import { MAX_SAFE_INTEGER } from "../__internal__.env";
import { Buffer, fromValue } from "../container";
import {
  addTo,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "../disposable";
import {
  Function1,
  getLength,
  isEmpty,
  max,
  newInstance,
  newInstanceWith,
  pipe,
} from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { ObserverLike, getScheduler } from "../observer";
import { none } from "../option";
import { sinkInto } from "../reactiveContainer";
import { notify } from "../reactiveSink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { never } from "./never";
import { AbstractDelegatingObserver } from "./observer";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

class BufferObserver<T> extends AbstractDelegatingObserver<T, readonly T[]> {
  buffer: T[] = [];
  private readonly durationSubscription = newInstance(
    DisposableRef,
    this,
    disposed,
  );

  constructor(
    delegate: ObserverLike<readonly T[]>,
    private readonly durationFunction: Function1<T, ObservableLike<unknown>>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);
  }

  notify(next: T) {
    const { buffer, maxBufferSize } = this;

    buffer.push(next);

    const doOnNotify = () => {
      this.durationSubscription.current = disposed;

      const buffer = this.buffer;
      this.buffer = [];

      pipe(this, getDelegate, notify(buffer));
    };

    if (getLength(buffer) === maxBufferSize) {
      doOnNotify();
    } else if (isDisposed(this.durationSubscription.current)) {
      this.durationSubscription.current = pipe(
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

  const operator = (delegate: ObserverLike<readonly T[]>) => {
    return pipe(
      BufferObserver,
      newInstanceWith<
        BufferObserver<T>,
        ObserverLike<readonly T[]>,
        Function1<T, ObservableLike<unknown>>,
        number
      >(delegate, durationFunction, maxBufferSize),
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

  return lift(operator, delay === MAX_SAFE_INTEGER ? 2 : 0);
}

export const bufferT: Buffer<ObservableLike<unknown>> = {
  buffer,
};
