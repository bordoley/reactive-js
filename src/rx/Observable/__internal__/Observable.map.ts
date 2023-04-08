import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __MapObserver_mapper } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
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
  ) => ObserverLike<TA> = (<TA, TB>() => {
    type TProperties = {
      readonly [__MapObserver_mapper]: Function1<TA, TB>;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin<TA>(), delegatingMixin()),
        function MapObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<TB>,
          mapper: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(delegatingMixin(), instance, delegate);
          instance[__MapObserver_mapper] = mapper;

          return instance;
        },
        props<TProperties>({
          [__MapObserver_mapper]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<TB>> &
              ObserverLike<TA>,
            next: TA,
          ) {
            Observer_assertState(this);

            const mapped = this[__MapObserver_mapper](next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
          },
        },
      ),
    );
  })();

  return ((mapper: Function1<TA, TB>) =>
    pipe(createMapObserver, partial(mapper), Enumerable_lift)) as ObservableMap;
})();

export default Observable_map;
