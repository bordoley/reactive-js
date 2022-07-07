import { reset } from "../__internal__.enumerator";
import { MAX_SAFE_INTEGER } from "../__internal__.env";
import { Buffer } from "../container";
import { add, dispose } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { EnumeratorLike, getCurrent, hasCurrent } from "../enumerator";
import { getLength, max, newInstanceWith, pipe } from "../functions";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class BufferEnumerator<T> extends AbstractDelegatingEnumerator<
  T,
  readonly T[]
> {
  constructor(
    delegate: EnumeratorLike<T>,
    private readonly maxBufferSize: number,
  ) {
    super(delegate);
  }

  move(): boolean {
    reset(this);

    const buffer: T[] = [];

    const { delegate, maxBufferSize } = this;

    while (getLength(buffer) < maxBufferSize && delegate.move()) {
      buffer.push(getCurrent(delegate));
    }

    const bufferLength = getLength(buffer);
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

  const operator = (delegate: EnumeratorLike<T>) =>
    pipe(
      BufferEnumerator,
      newInstanceWith<BufferEnumerator<T>, EnumeratorLike<T>, number>(
        delegate,
        maxBufferSize,
      ),
      add(delegate),
    );

  return lift(operator);
};

export const bufferT: Buffer<EnumerableLike<unknown>> = {
  buffer,
};
