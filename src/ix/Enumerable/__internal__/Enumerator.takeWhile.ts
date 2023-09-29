import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Optional,
  Predicate,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Enumerable from "../../Enumerable.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_takeWhile: Enumerable.Signature["takeWhile"] = /*@__PURE__*/ (<
  T,
>() => {
  const TakeWhileEnumerator_delegate = Symbol("TakeWhileEnumerator_delegate");
  const TakeWhileEnumerator_inclusive = Symbol("TakeWhileEnumerator_inclusive");
  const TakeWhileEnumerator_predicate = Symbol("TakeWhileEnumerator_predicate");

  interface TProperties<T> {
    [TakeWhileEnumerator_delegate]: EnumeratorLike<T>;
    [TakeWhileEnumerator_inclusive]: boolean;
    [TakeWhileEnumerator_predicate]: Predicate<T>;
  }

  const createTakeWhileEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumeratorMixin(), DisposableMixin),
      function TakeWhileEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          TProperties<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
        inclusive: Optional<boolean>,
      ): EnumeratorLike<T> {
        init(MutableEnumeratorMixin<T>(), instance);
        init(DisposableMixin, instance, delegate);

        pipe(instance, Disposable.add(delegate));

        instance[TakeWhileEnumerator_delegate] = delegate;
        instance[TakeWhileEnumerator_inclusive] = inclusive ?? false;
        instance[TakeWhileEnumerator_predicate] = predicate;

        return instance;
      },
      props<TProperties<T>>({
        [TakeWhileEnumerator_delegate]: none,
        [TakeWhileEnumerator_inclusive]: false,
        [TakeWhileEnumerator_predicate]: none,
      }),
      {
        [EnumeratorLike_move](
          this: TProperties<T> & MutableEnumeratorLike<T>,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          const delegate = this[TakeWhileEnumerator_delegate];

          try {
            if (delegate[EnumeratorLike_move]()) {
              const next = delegate[EnumeratorLike_current];

              const satisfiesPredicate =
                this[TakeWhileEnumerator_predicate](next);

              if (satisfiesPredicate || this[TakeWhileEnumerator_inclusive]) {
                this[EnumeratorLike_current] = next;
              }

              if (!satisfiesPredicate) {
                this[DisposableLike_dispose]();
              }
            }
          } catch (e) {
            // catch errors thrown by the predicate
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

  return (
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ) =>
    pipe(
      createTakeWhileEnumerator,
      partial(predicate, options.inclusive),
      Enumerable_lift,
    );
})();

export default Enumerable_takeWhile;
