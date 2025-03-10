import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
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
      this: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
        TProperties<TA, TB>,
      delegate: ObserverLike<TB>,
      selector: Function1<TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[MapObserver_selector] = selector;

      return this;
    },
    props<TProperties<TA, TB>>({
      [MapObserver_selector]: none,
    }),
    proto({
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties<TA, TB> & LiftedObserverLike<TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapObserver_selector](next);
        this[LiftedObserverLike_delegate][ObserverLike_notify](mapped);
      }),
    }),
  ))();

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(createMapObserver<TA, TB>, partial(selector), Observable_liftPure);

export default Observable_map;
