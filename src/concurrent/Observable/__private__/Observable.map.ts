import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import MapSinkMixin from "../../../events/__mixins__/MapSinkMixin.js";
import { Function1, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin(), MapSinkMixin()),
        function MapObserver(
          instance: unknown,
          delegate: ObserverLike<TB>,
          selector: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(ObserverMixin(), instance, delegate, delegate);
          init(MapSinkMixin<TA, TB>(), instance, delegate, selector);

          return instance;
        },
      ),
    ),
  ))();

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    Observer_createMapObserver<TA, TB>,
    partial(selector),
    Observable_liftPure,
  );

export default Observable_map;
