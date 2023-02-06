import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainer_forEach from "../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { SideEffect1, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_forEach: ForEach<EnumerableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

  const ForEachEnumerator_effect = Symbol("ForEachEnumerator_effect");

  type TProperties = {
    readonly [ForEachEnumerator_effect]: SideEffect1<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin),
        function ForEachEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          effect: SideEffect1<T>,
        ): EnumeratorLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance[ForEachEnumerator_effect] = effect;

          return instance;
        },
        props<TProperties>({ [ForEachEnumerator_effect]: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            if (DelegatingEnumerator_move(this)) {
              try {
                this[ForEachEnumerator_effect](Enumerator_getCurrent(this));
              } catch (e) {
                pipe(this, Disposable_dispose(error(e)));
              }
            }
          },
        },
      ),
    ),
    StatefulContainer_forEach<EnumerableLike, T, TInteractive>(
      Enumerable_liftT,
    ),
  );
})();

export default Enumerable_forEach;
