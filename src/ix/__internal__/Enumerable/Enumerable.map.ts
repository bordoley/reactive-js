import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainer_map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Function1, error, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import MutableEnumerator_mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<TB>();

  type TProperties = {
    readonly mapper: Function1<TA, TB>;
    readonly delegate: EnumeratorLike<TA>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, typedMutableEnumeratorMixin),
        function MapEnumerator(
          instance: Pick<EnumeratorLike<TB>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<TA>,
          mapper: Function1<TA, TB>,
        ): EnumeratorLike<TB> {
          init(Disposable_delegatingMixin, instance, delegate);
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

            delegate[SourceLike_move]();

            if (!delegate[EnumeratorLike_hasCurrent]) {
              return;
            }

            try {
              this[EnumeratorLike_current] = this.mapper(
                delegate[EnumeratorLike_current],
              );
            } catch (e) {
              pipe(this, Disposable_dispose(error(e)));
            }
          },
        },
      ),
    ),
    StatefulContainer_map<EnumerableLike, TA, TB, TInteractive>(
      Enumerable_liftT,
    ),
  );
})();

export default Enumerable_map;
