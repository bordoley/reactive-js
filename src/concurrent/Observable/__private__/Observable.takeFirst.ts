import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import TakeFirstSinkMixin from "../../../events/__mixins__/TakeFirstSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(
        ObserverMixin(),
        decorateNotifyWithObserverStateAssert(TakeFirstSinkMixin()),
      ),
      function TakeFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        takeCount: number,
      ): ObserverLike<T> {
        init(TakeFirstSinkMixin<T>(), instance, delegate, takeCount);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
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
