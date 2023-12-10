import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import TakeFirstSinkMixin from "../../../events/__mixins__/TakeFirstSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin(), TakeFirstSinkMixin()),
      function TakeFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        takeCount: number,
      ): ObserverLike<T> {
        init(TakeFirstSinkMixin<T>(), instance, delegate, takeCount);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(TakeFirstSinkMixin<T>()),
    ),
  ))();

const Observable_takeFirst: Observable.Signature["takeFirst"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createTakeFirstObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );

export default Observable_takeFirst;
