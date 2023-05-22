import { createInstanceFactory } from "../../__internal__/mixins.js";
import { Function1 } from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../types.js";
import Observable_liftMixin from "./Observable.liftMixin.js";

const Observable_createLifted: <TA, TB>(
  obs: ObservableLike<TA>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  config: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  },
) => ObservableLike<TB> = /*@__PURE__*/ (() =>
  createInstanceFactory(Observable_liftMixin<unknown, unknown>()))();

export default Observable_createLifted;
