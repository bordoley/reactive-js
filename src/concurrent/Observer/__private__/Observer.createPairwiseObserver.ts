import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import PairwiseSinkMixin from "../../../events/__mixins__/PairwiseSinkMixin.js";
import { Tuple2 } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createPairwiseObserver: <T>(
  delegate: ObserverLike<Tuple2<T, T>>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
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
      props({}),
      Observer_decorateNotifyWithStateAssert(PairwiseSinkMixin<T>()),
    ),
  ))();

export default Observer_createPairwiseObserver;
