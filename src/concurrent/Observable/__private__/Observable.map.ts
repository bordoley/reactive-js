import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../concurrent.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const MapObserver_selector = Symbol("MapObserver_selector");

interface TProperties<TA, TB> {
  [MapObserver_selector]: Function1<TA, TB>;
}

const createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DelegatingDisposableMixin<ObserverLike<TB>>(), ObserverMixin()),
        function MapObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            TProperties<TA, TB>,
          delegate: ObserverLike<TB>,
          selector: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(
            DelegatingDisposableMixin<ObserverLike<TB>>(),
            instance,
            delegate,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          instance[MapObserver_selector] = selector;

          return instance;
        },
        props<TProperties<TA, TB>>({
          [MapObserver_selector]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties<TA, TB> &
              DelegatingDisposableLike<ObserverLike<TB>> &
              ObserverLike<TA>,
            next: TA,
          ) {
            const mapped = this[MapObserver_selector](next);
            this[DelegatingDisposableLike_delegate][ObserverLike_notify](
              mapped,
            );
          },
        },
      ),
    ),
  ))();

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(createMapObserver<TA, TB>, partial(selector), Observable_liftPure);

export default Observable_map;
