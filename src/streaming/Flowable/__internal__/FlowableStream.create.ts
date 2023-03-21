import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { FlowableStreamLike_isPaused } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";

import {
  Updater,
  compose,
  isFunction,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Subject_create from "../../../rx/Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../../rx/Subject/__internal__/Subject.publishTo.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  FlowableState,
  FlowableState_paused,
  FlowableStreamLike,
} from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";

const FlowableStream_create = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [FlowableStreamLike_isPaused]: ObservableLike<boolean>;
  };

  const createStreamInternal: (
    op: ContainerOperator<ObservableLike, FlowableState, T>,
    scheduler: SchedulerLike,
    replay: number,
    maxBufferSize: number,
  ) => FlowableStreamLike<T> = createInstanceFactory(
    mix(
      include(Stream_mixin<FlowableState, T>()),
      function FlowableStream(
        instance: TProperties,
        op: ContainerOperator<ObservableLike, FlowableState, T>,
        scheduler: SchedulerLike,
        replay: number,
        maxBufferSize: number,
      ): FlowableStreamLike<T> {
        const subject = Subject_create({ replay: 1 });

        const liftedOp = compose(
          Observable_scan<
            ObservableLike,
            FlowableState | Updater<FlowableState>,
            FlowableState
          >(
            (acc, next) => (isFunction(next) ? next(acc) : next),
            returns(FlowableState_paused),
          ),
          Observable_distinctUntilChanged<FlowableState>(),
          Observable_forEach<ObservableLike, FlowableState>(
            Subject_publishTo(subject),
          ),
          op,
        );

        init(
          Stream_mixin<FlowableState, T>(),
          instance,
          liftedOp,
          scheduler,
          replay,
          maxBufferSize,
        );

        pipe(instance, Disposable_add(subject));

        instance[FlowableStreamLike_isPaused] = pipe(
          subject,
          Observable_map<ObservableLike, FlowableState, boolean>(
            state => state === FlowableState_paused,
          ),
          Observable_distinctUntilChanged<boolean>(),
        );

        return instance;
      },
      props<TProperties>({
        [FlowableStreamLike_isPaused]: none,
      }),
      {},
    ),
  );

  return (
    op: ContainerOperator<ObservableLike, FlowableState, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number; readonly maxBufferSize?: number },
  ): FlowableStreamLike<T> => {
    const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options ?? {};
    return createStreamInternal(op, scheduler, replay, maxBufferSize);
  };
})();

export default FlowableStream_create;
