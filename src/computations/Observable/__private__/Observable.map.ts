import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import MapMixin from "../../../utils/__mixins__/EventListeners/MapMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPure from "./Observable.liftPure.js";

const createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin(), MapMixin()),
    function MapObserver(
      this: unknown,
      delegate: ObserverLike<TB>,
      selector: Function1<TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<TA, TB>(), this, delegate, none);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  ))();

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(createMapObserver<TA, TB>, partial(selector), Observable_liftPure);

export default Observable_map;
