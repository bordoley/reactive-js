import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import KeepSinkMixin from "../../../events/__mixins__/KeepSinkMixin.js";
import { Predicate } from "../../../functions.js";
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
