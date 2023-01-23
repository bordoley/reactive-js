import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainerLike__map from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Function1, error, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__move from "../EnumeratorLike/EnumeratorLike.move";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<TB>();

  type TProperties = {
    readonly mapper: Function1<TA, TB>;
    readonly delegate: EnumeratorLike<TA>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin),
        function MapEnumerator(
          instance: Pick<EnumeratorLike<TB>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<TA>,
          mapper: Function1<TA, TB>,
        ): EnumeratorLike<TB> {
          init(DisposableLike__delegatingMixin, instance, delegate);
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

            if (EnumeratorLike__move(delegate)) {
              try {
                this[EnumeratorLike_current] = this.mapper(
                  EnumeratorLike__getCurrent(delegate),
                );
              } catch (e) {
                pipe(this, DisposableLike__dispose(error(e)));
              }
            }
          },
        },
      ),
    ),
    StatefulContainerLike__map<EnumerableLike, TA, TB, TInteractive>(
      EnumerableLike__liftT,
    ),
  );
})();

export default EnumerableLike__map;
