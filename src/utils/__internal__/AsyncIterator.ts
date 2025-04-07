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
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  AsyncEnumeratorLike,
  AsyncEnumeratorLike_moveNext,
  DisposableLike_dispose,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
} from "../../utils.js";

interface Signature {
  fromAsyncEnumerator<T>(): Function1<AsyncEnumeratorLike<T>, AsyncIterator<T>>;
  toAsyncEnumerator<T>(): Function1<AsyncIterator<T>, AsyncEnumeratorLike<T>>;
}

export const fromAsyncEnumerator: Signature["fromAsyncEnumerator"] =
  /*@__PURE__*/ returns((enumerator: AsyncEnumeratorLike) =>
    (async function* () {
      while (await enumerator[AsyncEnumeratorLike_moveNext]()) {
        yield enumerator[EnumeratorLike_current];
      }
      Disposable.raiseIfDisposedWithError(enumerator);
    })(),
  ) as Signature["fromAsyncEnumerator"];

export const toAsyncEnumerator: Signature["toAsyncEnumerator"] =
  /*@__PURE__*/ (<T>() => {
    const AsyncIteratorAsyncEnumerator_asyncIterator = Symbol(
      "IteratorAsyncEnumerator_iterator",
    );

    type TProperties = {
      [AsyncIteratorAsyncEnumerator_asyncIterator]: AsyncIterator<T>;
      [EnumeratorLike_current]: T;
      [EnumeratorLike_hasCurrent]: boolean;
    };

    type TPrototype = Pick<
      AsyncEnumeratorLike<T>,
      typeof AsyncEnumeratorLike_moveNext
    >;

    async function onAsyncIteratorEnumeratorDisposed(
      this: TProperties,
      e: Optional<Error>,
    ) {
      const iterator = this[AsyncIteratorAsyncEnumerator_asyncIterator];
      this[EnumeratorLike_hasCurrent] = false;
      this[EnumeratorLike_current] = none as T;

      if (isSome(e)) {
        try {
          await (iterator.throw?.(e) ?? Promise.resolve());
        } catch (_e) {
          // Eat the exception there is nothing else we can do
        }
      }

      try {
        await iterator.return?.();
      } catch (_e) {
        // Eat the exception there is nothing else we can do
      }
    }

    return returns(
      mixInstanceFactory(
        include(DisposableMixin),
        function IteratorAsyncEnumerator(
          this: TProperties & TPrototype,
          iter: AsyncIterator<T>,
        ): AsyncEnumeratorLike<T> {
          init(DisposableMixin, this);

          pipe(
            this,
            DisposableContainer.onDisposed(onAsyncIteratorEnumeratorDisposed),
          );

          this[AsyncIteratorAsyncEnumerator_asyncIterator] = iter;

          return this;
        },
        props<TProperties>({
          [AsyncIteratorAsyncEnumerator_asyncIterator]: none,
          [EnumeratorLike_current]: none,
          [EnumeratorLike_hasCurrent]: false,
        }),
        proto({
          async [AsyncEnumeratorLike_moveNext](
            this: TProperties & EnumeratorLike<T>,
          ): Promise<boolean> {
            this[EnumeratorLike_current] = none as T;
            this[EnumeratorLike_hasCurrent] = false;

            const iterator = this[AsyncIteratorAsyncEnumerator_asyncIterator];
            let hasCurrent = false;
            try {
              const result = await iterator.next();

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
