import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainer$map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Function1, error, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$move from "../Enumerator/Enumerator.move";
import MutableEnumerator$mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator$mixin<TB>();

  type TProperties = {
    readonly mapper: Function1<TA, TB>;
    readonly delegate: EnumeratorLike<TA>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable$delegatingMixin, typedMutableEnumeratorMixin),
        function MapEnumerator(
          instance: Pick<EnumeratorLike<TB>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<TA>,
          mapper: Function1<TA, TB>,
        ): EnumeratorLike<TB> {
          init(Disposable$delegatingMixin, instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.mapper = mapper;

          return instance;
        },
        props<TProperties>({
          mapper: none,
          delegate: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TB>) {
            const { delegate } = this;

            if (Enumerator$move(delegate)) {
              try {
                this[EnumeratorLike_current] = this.mapper(
                  Enumerator$getCurrent(delegate),
                );
              } catch (e) {
                pipe(this, Disposable$dispose(error(e)));
              }
            }
          },
        },
      ),
    ),
    StatefulContainer$map<EnumerableLike, TA, TB, TInteractive>(
      Enumerable$liftT,
    ),
  );
})();

export default Enumerable$map;
