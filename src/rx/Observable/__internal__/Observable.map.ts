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
import { MapObserver_mapper } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { QueueableLike_capacity } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

type ObservableMap = <C extends ObservableLike, TA, TB>(
  mapper: Function1<TA, TB>,
) => ContainerOperator<C, TA, TB>;
const Observable_map: ObservableMap = /*@__PURE__*/ (<TA, TB>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    type TProperties = {
      readonly [MapObserver_mapper]: Function1<TA, TB>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<TA>()),
        function MapObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<TB>,
          mapper: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<TA>(),
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_capacity],
          );
          instance[MapObserver_mapper] = mapper;

          return instance;
        },
        props<TProperties>({
          [MapObserver_mapper]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<TB>> &
              ObserverLike<TA>,
            next: TA,
          ) {
            Observer_assertState(this);

            const mapped = this[MapObserver_mapper](next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
          },
        },
      ),
    );
  })();

  return ((mapper: Function1<TA, TB>) =>
    pipe(
      createMapObserver,
      partial(mapper),
      Observable_liftEnumerableOperator,
    )) as ObservableMap;
})();

export default Observable_map;
