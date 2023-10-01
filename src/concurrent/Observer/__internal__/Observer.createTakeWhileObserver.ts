import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { Predicate } from "../../../functions.js";
import TakeWhileSinkMixin from "../../../rx/__mixins__/TakeWhileSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(TakeWhileSinkMixin(), ObserverMixin()),
      function TakeWhileObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): ObserverLike<T> {
        init(TakeWhileSinkMixin<T>(), instance, delegate, predicate, inclusive);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(TakeWhileSinkMixin<T>()),
    ),
  ))();

export default Observer_createTakeWhileObserver;
