export { buffer, bufferT } from "./enumerable/buffer";
export { generate, generateT } from "./enumerable/generate";
export { repeat, repeatT } from "./enumerable/repeat";
export { toRunnable, toRunnableT } from "./enumerable/toRunnable";

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => EnumerableOperator<T, T> = /*@__PURE__*/ createThrowIfEmptyOperator(
  liftT,
  class ThrowIfEmptyEnumerator<T> extends AbstractPassThroughEnumerator<T> {
    isEmpty = true;

    move(): boolean {
      if (pipe(this, getDelegate, move)) {
        this.isEmpty = false;
      }

      return hasCurrent(this);
    }
  },
);

export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike<unknown>> = {
  throwIfEmpty,
};
