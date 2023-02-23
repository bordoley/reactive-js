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
import { Map } from "../../../containers.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { Function1, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<TB>();

  const MapEnumerator_mapper = Symbol("MapEnumerator_mapper");

  type TProperties = {
    readonly [MapEnumerator_mapper]: Function1<TA, TB>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), typedMutableEnumeratorMixin),
        function MapEnumerator(
          instance: Pick<EnumeratorLike<TB>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<TA>,
          mapper: Function1<TA, TB>,
        ): EnumeratorLike<TB> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance[MapEnumerator_mapper] = mapper;

          return instance;
        },
        props<TProperties>({
          [MapEnumerator_mapper]: none,
        }),
        {
          [SourceLike_move](
            this: TProperties &
              MutableEnumeratorLike<TB> &
              DelegatingLike<EnumeratorLike<TA>>,
          ) {
            const { [DelegatingLike_delegate]: delegate } = this;

            delegate[SourceLike_move]();

            if (!delegate[EnumeratorLike_hasCurrent]) {
              return;
            }

            try {
              this[EnumeratorLike_current] = this[MapEnumerator_mapper](
                delegate[EnumeratorLike_current],
              );
            } catch (e) {
              pipe(this, Disposable_dispose(error(e)));
            }
          },
        },
      ),
    ),
    StatefulContainer_map<EnumerableLike, TA, TB>(Enumerable_lift),
  );
})();

export default Enumerable_map;
