import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
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
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Subject_create from "../../../rx/Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../../rx/Subject/__internal__/Subject.publishTo.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  FlowableStreamLike,
  FlowableStreamLike_isPaused,
} from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";

const FlowableStream_create = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [FlowableStreamLike_isPaused]: ObservableLike<boolean>;
  };

  const createStreamInternal: (
    op: ContainerOperator<ObservableLike, boolean, T>,
    scheduler: SchedulerLike,
    replay: number,
    maxBufferSize: number,
  ) => FlowableStreamLike<T> = createInstanceFactory(
    mix(
      include(Stream_mixin<boolean, T>()),
      function FlowableStream(
        instance: TProperties,
        op: ContainerOperator<ObservableLike, boolean, T>,
        scheduler: SchedulerLike,
        replay: number,
        maxBufferSize: number,
      ): FlowableStreamLike<T> {
        const subject = Subject_create({ replay: 1 });

        const liftedOp = compose(
          Observable_scan<ObservableLike, boolean | Updater<boolean>, boolean>(
            (acc, next) => (isFunction(next) ? next(acc) : next),
            returns(true),
          ),
          Observable_distinctUntilChanged<boolean>(),
          Observable_forEach<ObservableLike, boolean>(
            Subject_publishTo(subject),
          ),
          op,
        );

        init(
          Stream_mixin<boolean, T>(),
          instance,
          liftedOp,
          scheduler,
          replay,
          maxBufferSize,
        );

        pipe(instance, Disposable_add(subject));

        instance[FlowableStreamLike_isPaused] = subject;

        return instance;
      },
      props<TProperties>({
        [FlowableStreamLike_isPaused]: none,
      }),
      {},
    ),
  );

  return (
    op: ContainerOperator<ObservableLike, boolean, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number; readonly maxBufferSize?: number },
  ): FlowableStreamLike<T> => {
    const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options ?? {};
    return createStreamInternal(op, scheduler, replay, maxBufferSize);
  };
})();

export default FlowableStream_create;
