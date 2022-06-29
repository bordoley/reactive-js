import { Buffer } from "../container";
import { add, dispose } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import {
  AbstractDelegatingEnumerator,
  Enumerator,
  hasCurrent,
  reset,
} from "../enumerator";
import { pipe } from "../functions";
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

    while (buffer.length < maxBufferSize && delegate.move()) {
      buffer.push(delegate.current);
    }

    const bufferLength = buffer.length;
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
  const maxBufferSize = Math.max(
    options.maxBufferSize ?? Number.MAX_SAFE_INTEGER,
    1,
  );

  const operator = (delegate: Enumerator<T>) =>
    pipe(new BufferEnumerator(delegate, maxBufferSize), add(delegate));

  return lift(operator);
};

export const bufferT: Buffer<EnumerableLike<unknown>> = {
  buffer,
};
