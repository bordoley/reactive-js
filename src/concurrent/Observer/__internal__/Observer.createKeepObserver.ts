import {
  createInstanceFactory,
  mix,
  include,
  init,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { Predicate } from "../../../functions.js";
import KeepSinkMixin from "../../../rx/__mixins__/KeepSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin(), KeepSinkMixin()),
      function KeepObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(KeepSinkMixin<T>(), instance, delegate, predicate);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(KeepSinkMixin<T>()),
    ),
  ))();

export default Observer_createKeepObserver;
