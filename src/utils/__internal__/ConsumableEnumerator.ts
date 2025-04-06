import {
  Function1,
  Optional,
  Tuple1,
  isSome,
  none,
  pipe,
  returns,
  tuple,
} from "../../functions.js";
import {
  ConsumableEnumeratorLike,
  ConsumableEnumeratorLike_addOnDataAvailableListener,
  ConsumableEnumeratorLike_isDataAvailable,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";

interface Signature {
  toAsyncIterator<T>(): Function1<
    ConsumableEnumeratorLike<T>,
    AsyncIterator<T>
  >;
}

const createPromiseCallback =
  <T>(enumerator: ConsumableEnumeratorLike<T>, disposable: DisposableLike) =>
  (
    resolve: (value: Optional<Tuple1<T>>) => void,
    reject: (reason?: any) => void,
  ) => {
    if (enumerator[EnumeratorLike_moveNext]()) {
      const next = enumerator[EnumeratorLike_current];
      resolve(tuple(next));
      return;
    }

    pipe(
      disposable,
      Disposable.add(
        enumerator[ConsumableEnumeratorLike_addOnDataAvailableListener](() => {
          disposable[DisposableLike_dispose]();
        }),
      ),
      DisposableContainer.onError(reject),
      DisposableContainer.onComplete(() => {
        if (enumerator[EnumeratorLike_moveNext]()) {
          const next = enumerator[EnumeratorLike_current];
          resolve(tuple(next));
        } else {
          resolve(none);
        }
      }),
      Disposable.addTo(enumerator),
    );
  };

export const toAsyncIterator: Signature["toAsyncIterator"] =
  /*@__PURE__*/ returns((enumerator: ConsumableEnumeratorLike) =>
    (async function* () {
      let isDisposed = enumerator[DisposableLike_isDisposed];
      let isDateAvailable =
        enumerator[ConsumableEnumeratorLike_isDataAvailable];
      while (!isDisposed || isDateAvailable) {
        const disposable = Disposable.create();
        const callback = createPromiseCallback(enumerator, disposable);
        const result = await new Promise(callback);

        disposable[DisposableLike_dispose]();
        if (isSome(result)) {
          yield result[0];
        } else {
          // The observer was disposed and didn't produce a value
          break;
        }

        isDisposed = enumerator[DisposableLike_isDisposed];
        isDateAvailable = enumerator[ConsumableEnumeratorLike_isDataAvailable];
      }
      Disposable.raiseIfDisposedWithError(enumerator);
    })(),
  ) as Signature["toAsyncIterator"];
