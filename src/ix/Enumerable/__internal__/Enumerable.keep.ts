import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Keep } from "../../../containers.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { TInteractive } from "../../../containers/__internal__/containers.internal.js";
import { Predicate, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import DelegatingEnumerator_mixin from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

const Enumerable_keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

  const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");

  type TProperties = {
    readonly [KeepEnumerator_predicate]: Predicate<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin),
        function KeepEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          predicate: Predicate<T>,
        ): EnumeratorLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance[KeepEnumerator_predicate] = predicate;

          return instance;
        },
        props<TProperties>({ [KeepEnumerator_predicate]: none }),
        {
          [SourceLike_move](
            this: TProperties &
              DelegatingLike<EnumeratorLike<T>> &
              EnumeratorLike<T>,
          ) {
            const { [KeepEnumerator_predicate]: predicate } = this;

            try {
              while (
                (this[DelegatingLike_delegate][SourceLike_move](),
                this[DelegatingLike_delegate][EnumeratorLike_hasCurrent]) &&
                !predicate(this[EnumeratorLike_current])
              ) {}
            } catch (e) {
              pipe(this, Disposable_dispose(error(e)));
            }
          },
        },
      ),
    ),
    StatefulContainer_keep<EnumerableLike, T, TInteractive>(Enumerable_liftT),
  );
})();

export default Enumerable_keep;
