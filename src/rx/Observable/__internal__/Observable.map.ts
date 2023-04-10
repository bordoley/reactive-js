import { MappingLike } from "../../../__internal__/containers.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __MappingLike_mapper } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { ContainerOperator } from "../../../containers.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableMap = <C extends ObservableLike, TA, TB>(
  mapper: Function1<TA, TB>,
) => ContainerOperator<C, TA, TB>;
const Observable_map: ObservableMap = /*@__PURE__*/ (<TA, TB>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() =>
    createInstanceFactory(
      mix(
        include(Observer_delegatingMixin<TA>(), Delegating_mixin()),
        function MapObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            MappingLike<TA, TB>,
          delegate: ObserverLike<TB>,
          mapper: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);
          instance[__MappingLike_mapper] = mapper;

          return instance;
        },
        props<MappingLike<TA, TB>>({
          [__MappingLike_mapper]: none,
        }),
        {
          [ObserverLike_notify](
            this: MappingLike<TA, TB> &
              DelegatingLike<ObserverLike<TB>> &
              ObserverLike<TA>,
            next: TA,
          ) {
            Observer_assertState(this);

            const mapped = this[__MappingLike_mapper](next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
          },
        },
      ),
    ))();

  return ((mapper: Function1<TA, TB>) =>
    pipe(createMapObserver, partial(mapper), Enumerable_lift)) as ObservableMap;
})();

export default Observable_map;
