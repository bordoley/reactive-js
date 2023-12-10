import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import KeepSinkMixin from "../../../events/__mixins__/KeepSinkMixin.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";

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

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  pipe(Observer_createKeepObserver<T>, partial(predicate), Observable_liftPure);

export default Observable_keep;
