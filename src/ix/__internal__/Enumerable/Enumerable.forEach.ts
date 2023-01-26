import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainer$forEach from "../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { SideEffect1, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$forEach: ForEach<EnumerableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

  type TProperties = {
    readonly effect: SideEffect1<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin),
        function forEachEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          effect: SideEffect1<T>,
        ): EnumeratorLike<T> {
          init(Disposable$delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance.effect = effect;

          return instance;
        },
        props<TProperties>({ effect: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            if (DelegatingEnumerator$move(this)) {
              try {
                this.effect(Enumerator$getCurrent(this));
              } catch (e) {
                pipe(this, Disposable$dispose(error(e)));
              }
            }
          },
        },
      ),
    ),
    StatefulContainer$forEach<EnumerableLike, T, TInteractive>(
      Enumerable$liftT,
    ),
  );
})();

export default Enumerable$forEach;
