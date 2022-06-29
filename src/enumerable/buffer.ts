import { Buffer } from "../container";
import { add, dispose } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import {
  AbstractDelegatingEnumerator,
  Enumerator,
  current,
  hasCurrent,
  reset,
} from "../enumerator";
import { MAX_SAFE_INTEGER } from "../env";
import { length, max, pipe } from "../functions";
import { lift } from "./lift";

class BufferEnumerator<T> extends AbstractDelegatingEnumerator<
  T,
  readonly T[]
> {
  constructor(delegate: Enumerator<T>, private readonly maxBufferSize: number) {
    super(delegate);
  }

  move(): boolean {
    reset(this);

    const buffer: T[] = [];

    const { delegate, maxBufferSize } = this;

    while (length(buffer) < maxBufferSize && delegate.move()) {
      buffer.push(current(delegate));
    }

    const bufferLength = length(buffer);
    if (bufferLength > 0) {
      this.current = buffer;
    }

    if (bufferLength < maxBufferSize) {
      pipe(this, dispose());
    }

    return hasCurrent(this);
  }
}

export const buffer = <T>(
  options: {
    readonly maxBufferSize?: number;
  } = {},
): EnumerableOperator<T, readonly T[]> => {
  const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

  const operator = (delegate: Enumerator<T>) =>
    pipe(new BufferEnumerator(delegate, maxBufferSize), add(delegate));

  return lift(operator);
};

export const bufferT: Buffer<EnumerableLike<unknown>> = {
  buffer,
};
