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
import { Function1, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    const MapObserverMixin_mapper = Symbol("MapObserverMixin_mapper");

    type TProperties = {
      readonly [MapObserverMixin_mapper]: Function1<TA, TB>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<TA>()),
        function MapObserverMixin(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<TB>,
          mapper: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<TA>(),
            instance,
            delegate[ObserverLike_scheduler],
          );
          instance[MapObserverMixin_mapper] = mapper;

          return instance;
        },
        props<TProperties>({
          [MapObserverMixin_mapper]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<TB>> &
              ObserverLike<TA>,
            next: TA,
          ) {
            Observer_assertState(this);

            const mapped = this[MapObserverMixin_mapper](next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
          },
        },
      ),
    );
  })();

  return pipe(
    createMapObserver,
    StatefulContainer_map<ObservableLike, TA, TB>(
      Observable_liftEnumerableOperator,
    ),
  );
})();

export default Observable_map;
