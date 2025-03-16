import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
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
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function MapObserver(
      this: Pick<
        LiftedObserverLike<TA>,
        typeof LiftedEventListenerLike_notify
      > &
        TProperties<TA, TB>,
      delegate: ObserverLike<TB>,
      selector: Function1<TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<TA, TB>(), this, delegate, none);

      this[MapObserver_selector] = selector;

      return this;
    },
    props<TProperties<TA, TB>>({
      [MapObserver_selector]: none,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties<TA, TB> & LiftedObserverLike<TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapObserver_selector](next);
        this[LiftedEventListenerLike_notifyDelegate](mapped);
      },
    }),
  ))();

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(createMapObserver<TA, TB>, partial(selector), Observable_liftPure);

export default Observable_map;
