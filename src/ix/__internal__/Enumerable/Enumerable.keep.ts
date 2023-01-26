import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer$keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

  type TProperties = {
    readonly predicate: Predicate<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin),
        function KeepEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          predicate: Predicate<T>,
        ): EnumeratorLike<T> {
          init(Disposable$delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance.predicate = predicate;

          return instance;
        },
        props<TProperties>({ predicate: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            const { predicate } = this;

            try {
              while (
                DelegatingEnumerator$move(this) &&
                !predicate(Enumerator$getCurrent(this))
              ) {}
            } catch (e) {
              pipe(this, Disposable$dispose(error(e)));
            }
          },
        },
      ),
    ),
    StatefulContainer$keep<EnumerableLike, T, TInteractive>(Enumerable$liftT),
  );
})();

export default Enumerable$keep;
