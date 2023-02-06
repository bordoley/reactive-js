import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer_keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, error, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import {
  DelegatingEnumeratorLike,
  DelegatingEnumeratorLike_delegate,
} from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

  const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");

  type TProperties = {
    readonly [KeepEnumerator_predicate]: Predicate<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin),
        function KeepEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          predicate: Predicate<T>,
        ): EnumeratorLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance[KeepEnumerator_predicate] = predicate;

          return instance;
        },
        props<TProperties>({ [KeepEnumerator_predicate]: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            const { [KeepEnumerator_predicate]: predicate } = this;

            try {
              while (
                (this[DelegatingEnumeratorLike_delegate][SourceLike_move](),
                this[DelegatingEnumeratorLike_delegate][
                  EnumeratorLike_hasCurrent
                ]) &&
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
