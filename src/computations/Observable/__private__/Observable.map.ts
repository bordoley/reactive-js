import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../computations.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_liftPure from "./Observable.liftPure.js";

const MapObserver_selector = Symbol("MapObserver_selector");

interface TProperties<TA, TB> {
  [MapObserver_selector]: Function1<TA, TB>;
}

const createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()),
    function MapObserver(
      instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
        TProperties<TA, TB>,
      delegate: ObserverLike<TB>,
      selector: Function1<TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      init(LiftedObserverMixin(), instance, delegate);

      instance[MapObserver_selector] = selector;

      return instance;
    },
    props<TProperties<TA, TB>>({
      [MapObserver_selector]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties<TA, TB> & LiftedObserverLike<TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapObserver_selector](next);
        this[LiftedObserverLike_delegate][ObserverLike_notify](mapped);
      }),
    },
  ))();

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(createMapObserver<TA, TB>, partial(selector), Observable_liftPure);

export default Observable_map;
