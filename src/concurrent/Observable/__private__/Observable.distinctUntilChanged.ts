import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import DistinctUntilChangedSinkMixin from "../../../events/__mixins__/DistinctUntilChangedSinkMixin.js";
import { Equality, partial, pipe, strictEquality } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(
        ObserverMixin(),
        decorateNotifyWithObserverStateAssert(DistinctUntilChangedSinkMixin()),
      ),
      function DistinctUntilChangedObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ): ObserverLike<T> {
        init(DistinctUntilChangedSinkMixin(), instance, delegate, equality);
        init(ObserverMixin(), instance, delegate, delegate);

        return instance;
      },
    ),
  ))();

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      Observer_createDistinctUntilChangedObserver,
      partial(options?.equality ?? strictEquality),
      Observable_liftPure,
    );

export default Observable_distinctUntilChanged;
