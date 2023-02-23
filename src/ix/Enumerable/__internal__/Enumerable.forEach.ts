import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ForEach } from "../../../containers.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { SideEffect1, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

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
        include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin),
        function ForEachEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          effect: SideEffect1<T>,
        ): EnumeratorLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance[ForEachEnumerator_effect] = effect;

          return instance;
        },
        props<TProperties>({ [ForEachEnumerator_effect]: none }),
        {
          [SourceLike_move](
            this: TProperties &
              DelegatingLike<EnumeratorLike<T>> &
              EnumeratorLike<T>,
          ) {
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
    StatefulContainer_forEach<EnumerableLike, T>(Enumerable_liftT),
  );
})();

export default Enumerable_forEach;
