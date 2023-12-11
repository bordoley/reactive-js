import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import TakeWhileSinkMixin from "../../../events/__mixins__/TakeWhileSinkMixin.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin(), TakeWhileSinkMixin()),
        function TakeWhileObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): ObserverLike<T> {
          init(
            TakeWhileSinkMixin<T>(),
            instance,
            delegate,
            predicate,
            inclusive,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          return instance;
        },
      ),
    ),
  ))();

const Observable_takeWhile: Observable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    Observer_createTakeWhileObserver,
    partial(predicate, options?.inclusive ?? false),
    Observable_liftPure,
  );

export default Observable_takeWhile;
