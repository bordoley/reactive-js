import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import SkipFirstSinkMixin from "../../../events/__mixins__/SkipFirstSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(
        ObserverMixin(),
        decorateNotifyWithObserverStateAssert(SkipFirstSinkMixin()),
      ),
      function SkipFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        skipCount: number,
      ): ObserverLike<T> {
        init(SkipFirstSinkMixin<T>(), instance, delegate, skipCount);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
    ),
  ))();

const Observable_skipFirst: Observable.Signature["skipFirst"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createSkipFirstObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );
export default Observable_skipFirst;
