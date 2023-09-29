import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  Equality,
  Optional,
  error,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
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

const Enumerable_distinctUntilChanged: Enumerable.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const DistinctUntilChangedEnumerator_delegate = Symbol(
      "DistinctUntilChangedEnumerator_delegate",
    );
    const DistinctUntilChangedEnumerator_equality = Symbol(
      "DistinctUntilChangedEnumerator_delegate",
    );
    const DistinctUntilChangedEnumerator_prev = Symbol(
      "DistinctUntilChangedEnumerator_prev",
    );
    const DistinctUntilChangedEnumerator_hasValue = Symbol(
      "DistinctUntilChangedEnumerator_hasValue",
    );

    interface TProperties<T> {
      [DistinctUntilChangedEnumerator_delegate]: EnumeratorLike<T>;
      [DistinctUntilChangedEnumerator_equality]: Equality<T>;
      [DistinctUntilChangedEnumerator_hasValue]: boolean;
      [DistinctUntilChangedEnumerator_prev]: T;
    }

    const createDistinctUntilChangedEnumerator = createInstanceFactory(
      mix(
        include(DisposableMixin),
        function DistinctUntilChangedEnumerator(
          instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
            TProperties<T>,
          delegate: EnumeratorLike<T>,
          equality: Optional<Equality<T>>,
        ): EnumeratorLike<T> {
          init(DisposableMixin, instance);

          pipe(instance, Disposable.add(delegate));

          instance[DistinctUntilChangedEnumerator_delegate] = delegate;
          instance[DistinctUntilChangedEnumerator_equality] =
            equality ?? strictEquality;

          return instance;
        },
        props<
          TProperties<T> &
            Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
        >({
          [DistinctUntilChangedEnumerator_delegate]: none,
          [DistinctUntilChangedEnumerator_equality]: none,
          [DistinctUntilChangedEnumerator_hasValue]: false,
          [DistinctUntilChangedEnumerator_prev]: none,
          [EnumeratorLike_isCompleted]: false,
        }),
        {
          get [EnumeratorLike_current]() {
            unsafeCast<TProperties<T>>(this);
            return this[DistinctUntilChangedEnumerator_delegate][
              EnumeratorLike_current
            ];
          },

          get [EnumeratorLike_hasCurrent]() {
            unsafeCast<TProperties<T>>(this);
            return this[DistinctUntilChangedEnumerator_delegate][
              EnumeratorLike_hasCurrent
            ];
          },

          [EnumeratorLike_move](
            this: TProperties<T> & Mutable<EnumeratorLike<T>>,
          ): boolean {
            if (this[EnumeratorLike_isCompleted]) {
              return false;
            }

            const delegate = this[DistinctUntilChangedEnumerator_delegate];
            const equality = this[DistinctUntilChangedEnumerator_equality];

            try {
              while (delegate[EnumeratorLike_move]()) {
                const next = delegate[EnumeratorLike_current];

                if (
                  !this[DistinctUntilChangedEnumerator_hasValue] ||
                  !equality(this[DistinctUntilChangedEnumerator_prev], next)
                ) {
                  this[DistinctUntilChangedEnumerator_prev] = next;
                  this[DistinctUntilChangedEnumerator_hasValue] = true;
                  break;
                }
              }
            } catch (e) {
              // Catch errors thrown by the equality function
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

    return (options?: { equality?: Equality<T> }) =>
      pipe(
        createDistinctUntilChangedEnumerator,
        partial(options?.equality),
        Enumerable_lift,
      );
  })();

export default Enumerable_distinctUntilChanged;
