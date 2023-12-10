import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import DistinctUntilChangedSinkMixin from "../../../events/__mixins__/DistinctUntilChangedSinkMixin.js";
import { Equality, partial, pipe, strictEquality } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";

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

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      Observer_createDistinctUntilChangedObserver,
      partial(options?.equality ?? strictEquality),
      Observable_liftPure,
    );

export default Observable_distinctUntilChanged;
