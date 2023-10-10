import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { Equality } from "../../../functions.js";
import DistinctUntilChangedSinkMixin from "../../../utils/__mixins__/DistinctUntilChangedSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin(), DistinctUntilChangedSinkMixin()),
      function DistinctUntilChangedObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ): ObserverLike<T> {
        init(DistinctUntilChangedSinkMixin(), instance, delegate, equality);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(
        DistinctUntilChangedSinkMixin<T>(),
      ),
    ),
  ))();

export default Observer_createDistinctUntilChangedObserver;
