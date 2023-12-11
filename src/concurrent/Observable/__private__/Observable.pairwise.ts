import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import PairwiseSinkMixin from "../../../events/__mixins__/PairwiseSinkMixin.js";
import { Tuple2 } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createPairwiseObserver: <T>(
  delegate: ObserverLike<Tuple2<T, T>>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin<T>(), PairwiseSinkMixin()),
        function PairwiseObserver(
          instance: unknown,
          delegate: ObserverLike<Tuple2<T, T>>,
        ): ObserverLike<T> {
          init(PairwiseSinkMixin<T>(), instance, delegate);
          init(ObserverMixin(), instance, delegate, delegate);

          return instance;
        },
      ),
    ),
  ))();

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPure<T, Tuple2<T, T>>(Observer_createPairwiseObserver<T>);

export default Observable_pairwise;
