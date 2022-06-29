import { Buffer, fromValue } from "../container";
import {
  SerialDisposableLike,
  add,
  addTo,
  createSerialDisposable,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "../disposable";
import { Function1, pipe } from "../functions";
import { delegate, delegate as observerDelegate } from "../liftable";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer, scheduler } from "../observer";
import { none } from "../option";
import { sinkInto } from "../source";
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
    readonly durationSubscription: SerialDisposableLike,
  ) {
    super(delegate);
  }

  notify(next: T) {
    this.assertState();

    const { buffer, maxBufferSize } = this;

    buffer.push(next);

    const doOnNotify = () => {
      this.durationSubscription.inner = disposed;

      const buffer = this.buffer;
      this.buffer = [];

      delegate(this).notify(buffer);
    };

    if (buffer.length === maxBufferSize) {
      doOnNotify();
    } else if (isDisposed(this.durationSubscription.inner)) {
      this.durationSubscription.inner = pipe(
        next,
        this.durationFunction,
        onNotify(doOnNotify),
        subscribe(scheduler(this)),
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
  const delay = options.duration ?? Number.MAX_SAFE_INTEGER;
  const durationFunction =
    delay === Number.MAX_SAFE_INTEGER
      ? never
      : typeof delay === "number"
      ? (_: T) => fromValue(fromArrayT, { delay })(none)
      : delay;

  const maxBufferSize = Math.max(
    options.maxBufferSize ?? Number.MAX_SAFE_INTEGER,
    1,
  );

  const operator = (delegate: Observer<readonly T[]>) => {
    const durationSubscription = createSerialDisposable();
    return pipe(
      new BufferObserver(
        delegate,
        durationFunction,
        maxBufferSize,
        durationSubscription,
      ),
      add(durationSubscription),
      addTo(delegate),
      onComplete(function onDispose(this: BufferObserver<void>) {
        const { buffer } = this;
        this.buffer = [];

        if (buffer.length === 0) {
          pipe(this, observerDelegate, dispose());
        } else {
          pipe(buffer, fromValue(fromArrayT), sinkInto(observerDelegate(this)));
        }
      }),
    );
  };

  return lift(operator, delay === Number.MAX_SAFE_INTEGER);
}

export const bufferT: Buffer<ObservableLike<unknown>> = {
  buffer,
};
