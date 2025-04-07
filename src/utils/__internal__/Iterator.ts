import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  Function1,
  Optional,
  error,
  isSome,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  AsyncEnumeratorLike,
  AsyncEnumeratorLike_moveNext,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SyncEnumeratorLike,
  SyncEnumeratorLike_moveNext,
} from "../../utils.js";

interface Signature {
  toAsyncEnumerator<T>(): Function1<Iterator<T>, AsyncEnumeratorLike<T>>;
  toSyncEnumerator<T>(): Function1<Iterator<T>, SyncEnumeratorLike<T>>;
}

export const toAsyncEnumerator: Signature["toAsyncEnumerator"] =
  /*@__PURE__*/ (<T>() => {
    const IteratorAsyncEnumerator_iterator = Symbol(
      "IteratorAsyncEnumerator_iterator",
    );

    type TProperties = {
      [IteratorAsyncEnumerator_iterator]: Iterator<T>;
      [EnumeratorLike_current]: T;
      [EnumeratorLike_hasCurrent]: boolean;
    };

    type TPrototype = Pick<
      AsyncEnumeratorLike<T>,
      typeof AsyncEnumeratorLike_moveNext
    >;

    function onAsyncIteratorEnumeratorDisposed(
      this: TProperties,
      e: Optional<Error>,
    ) {
      const iterator = this[IteratorAsyncEnumerator_iterator];
      this[EnumeratorLike_hasCurrent] = false;
      this[EnumeratorLike_current] = none as T;

      try {
        isSome(e) && iterator.throw?.(e);
      } catch (_e) {
        // Eat the exception there is nothing else we can do
      }

      try {
        iterator.return?.();
      } catch (_e) {
        // Eat the exception there is nothing else we can do
      }
    }

    return returns(
      mixInstanceFactory(
        include(DisposableMixin),
        function IteratorAsyncEnumerator(
          this: TProperties & TPrototype,
          iter: Iterator<T>,
        ): AsyncEnumeratorLike<T> {
          init(DisposableMixin, this);

          pipe(
            this,
            DisposableContainer.onDisposed(onAsyncIteratorEnumeratorDisposed),
          );

          this[IteratorAsyncEnumerator_iterator] = iter;

          return this;
        },
        props<TProperties>({
          [IteratorAsyncEnumerator_iterator]: none,
          [EnumeratorLike_current]: none,
          [EnumeratorLike_hasCurrent]: false,
        }),
        proto({
          async [AsyncEnumeratorLike_moveNext](
            this: TProperties & SyncEnumeratorLike<T>,
          ): Promise<boolean> {
            this[EnumeratorLike_current] = none as T;
            this[EnumeratorLike_hasCurrent] = false;

            const iterator = this[IteratorAsyncEnumerator_iterator];
            let hasCurrent = false;
            try {
              await Promise.resolve();
              const result = iterator.next();

              hasCurrent = !result.done;
              this[EnumeratorLike_current] = result.value;
              this[EnumeratorLike_hasCurrent] = hasCurrent;
            } catch (e) {
              this[DisposableLike_dispose](error(e));
            }

            !hasCurrent && this[DisposableLike_dispose]();

            return hasCurrent;
          },
        }),
      ),
    );
  })();

export const toSyncEnumerator: Signature["toSyncEnumerator"] = /*@__PURE__*/ (<
  T,
>() => {
  const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");

  type TProperties = {
    [IteratorEnumerator_iterator]: Iterator<T>;
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
  };

  type TPrototype = Pick<
    SyncEnumeratorLike<T>,
    typeof SyncEnumeratorLike_moveNext
  >;

  function onIteratorEnumeratorDisposed(this: TProperties, e: Optional<Error>) {
    const iterator = this[IteratorEnumerator_iterator];
    this[EnumeratorLike_hasCurrent] = false;
    this[EnumeratorLike_current] = none as T;

    try {
      isSome(e) && iterator.throw?.(e);
    } catch (_e) {
      // Eat the exception there is nothing else we can do
    }

    try {
      iterator.return?.();
    } catch (_e) {
      // Eat the exception there is nothing else we can do
    }
  }

  return returns(
    mixInstanceFactory(
      include(DisposableMixin),
      function IteratorEnumerator(
        this: TProperties & TPrototype,
        iter: Iterator<T>,
      ): SyncEnumeratorLike<T> {
        init(DisposableMixin, this);

        pipe(
          this,
          DisposableContainer.onDisposed(onIteratorEnumeratorDisposed),
        );

        this[IteratorEnumerator_iterator] = iter;

        return this;
      },
      props<TProperties>({
        [IteratorEnumerator_iterator]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
      }),
      proto({
        [SyncEnumeratorLike_moveNext](
          this: TProperties & SyncEnumeratorLike<T>,
        ): boolean {
          const iterator = this[IteratorEnumerator_iterator];
          let hasCurrent = false;
          let isDisposed = this[DisposableLike_isDisposed];

          this[EnumeratorLike_current] = none as T;
          this[EnumeratorLike_hasCurrent] = false;

          if (isDisposed) {
            return false;
          }

          try {
            const result = iterator.next();

            // It's possible that a non-pure iterator could
            // have access to the enumerator's subscription
            // and dispose it during the call to
            isDisposed = this[DisposableLike_isDisposed];
            hasCurrent = !result.done && !isDisposed;

            this[EnumeratorLike_current] = hasCurrent ? result.value : none;
            this[EnumeratorLike_hasCurrent] = hasCurrent;
          } catch (e) {
            this[DisposableLike_dispose](error(e));
          }

          !hasCurrent && this[DisposableLike_dispose]();

          return hasCurrent;
        },
      }),
    ),
  );
})();
