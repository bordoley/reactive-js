import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { Predicate, error, none, partial, pipe } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_keep: Enumerable.Signature["keep"] = /*@__PURE__*/ (<T>() => {
  const KeepEnumerator_delegate = Symbol("KeepEnumerator_delegate");
  const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");

  interface TProperties<T> {
    [KeepEnumerator_delegate]: EnumeratorLike<T>;
    [KeepEnumerator_predicate]: Predicate<T>;
  }

  const createKeepEnumerator = createInstanceFactory(
    mix(
      include(DisposableMixin),
      function KeepEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
          TProperties<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
      ): EnumeratorLike<T> {
        init(DisposableMixin, instance);

        pipe(instance, Disposable.add(delegate));

        instance[KeepEnumerator_delegate] = delegate;
        instance[KeepEnumerator_predicate] = predicate;

        return instance;
      },
      props<
        TProperties<T> &
          Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
      >({
        [KeepEnumerator_delegate]: none,
        [KeepEnumerator_predicate]: none,
        [EnumeratorLike_isCompleted]: false,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<TProperties<T>>(this);
          return this[KeepEnumerator_delegate][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties<T>>(this);
          return this[KeepEnumerator_delegate][EnumeratorLike_hasCurrent];
        },

        [EnumeratorLike_move](
          this: TProperties<T> & Mutable<EnumeratorLike<T>>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          const delegate = this[KeepEnumerator_delegate];
          const predicate = this[KeepEnumerator_predicate];

          try {
            while (
              delegate[EnumeratorLike_move]() &&
              !predicate(this[EnumeratorLike_current])
            ) {}
          } catch (e) {
            // Catch errors thrown by the predicate
            this[DisposableLike_dispose](error(e));
          }

          if (delegate[DisposableLike_isDisposed]) {
            this[DisposableLike_dispose]();
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (predicate: Predicate<T>) =>
    pipe(createKeepEnumerator, partial(predicate), Enumerable_lift);
})();

export default Enumerable_keep;
