import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, partial, pipe } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Enumerable from "../../Enumerable.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_takeFirst: Enumerable.Signature["takeFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const TakeFirstEnumerator_count = Symbol("TakeFirstEnumerator_count");

  interface TProperties {
    [TakeFirstEnumerator_count]: number;
  }

  const createTakeFirstEnumerator = createInstanceFactory(
    mix(
      include(
        MutableEnumeratorMixin(),
        DelegatingDisposableMixin<EnumeratorLike<T>>(),
      ),
      function TakeFirstEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          TProperties,
        delegate: EnumeratorLike<T>,
        takeCount: Optional<number>,
      ): EnumeratorLike<T> {
        init(MutableEnumeratorMixin<T>(), instance);
        init(
          DelegatingDisposableMixin<EnumeratorLike<T>>(),
          instance,
          delegate,
        );

        instance[TakeFirstEnumerator_count] = clampPositiveInteger(
          takeCount ?? 1,
        );

        if (takeCount === 0) {
          instance[DisposableLike_dispose]();
        }

        return instance;
      },
      props<TProperties>({
        [TakeFirstEnumerator_count]: 0,
      }),
      {
        [EnumeratorLike_move](
          this: TProperties &
            MutableEnumeratorLike<T> &
            DelegatingDisposableLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];

          this[TakeFirstEnumerator_count] = max(
            this[TakeFirstEnumerator_count] - 1,
            -1,
          );

          const delegate = this[DelegatingDisposableLike_delegate];

          if (
            this[TakeFirstEnumerator_count] >= 0 &&
            delegate[EnumeratorLike_move]()
          ) {
            this[EnumeratorLike_current] = delegate[EnumeratorLike_current];
          } else {
            this[DisposableLike_dispose]();
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );
  return (options: { readonly count?: number } = {}) =>
    pipe(createTakeFirstEnumerator, partial(options.count), Enumerable_lift);
})();

export default Enumerable_takeFirst;
