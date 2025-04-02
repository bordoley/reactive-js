import { Array_push } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
  WritableStoreLike,
} from "../../../computations.js";
import {
  Optional,
  Tuple2,
  bindMethod,
  compose,
  identity,
  isFunction,
  isNumber,
  isReadonlyArray,
  none,
  pipe,
  returns,
  tuple,
} from "../../../functions.js";
import { scale } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  EventListenerLike_notify,
  SchedulerLike,
} from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as Publisher from "../../Publisher.js";
import * as Runnable from "../../Runnable.js";
import type * as Streamable from "../../Streamable.js";
import * as SynchronousObservable from "../../SynchronousObservable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
import { AnimationLike_isRunning } from "./Streamable.animation.js";

const Streamable_spring: Streamable.Signature["spring"] = /*@__PURE__*/ (() => {
  type TProperties = {
    [AnimationLike_isRunning]: WritableStoreLike<boolean>;
  };

  const SpringStream_create = mixInstanceFactory(
    include(StreamMixin(), DelegatingPauseableMixin),
    function AnimationStream(
      this: TProperties,
      scheduler: SchedulerLike,
      springOptions: Optional<{
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
      }>,
      options: Optional<{
        readonly autoDispose?: boolean;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
      }>,
    ): Streamable.SpringStreamLike {
      const animationIsRunning = WritableStore.create(false);
      this[AnimationLike_isRunning] = animationIsRunning;

      const accFeedbackStream = Publisher.create<number>();
      const otherObs = pipe(accFeedbackStream, Observable.fromBroadcaster());

      const operator = compose(
        identity<ObservableLike<Streamable.SpringEvent>>,
        Observable.withLatestFrom(
          otherObs,
          (updater: Streamable.SpringEvent, acc: number) => {
            const command = isFunction(updater) ? updater(acc) : updater;
            const springCommandOptions =
              isNumber(command) || isReadonlyArray(command)
                ? springOptions
                : {
                    stiffness: command.stiffness ?? springOptions?.stiffness,
                    damping: command.damping ?? springOptions?.damping,
                    precision: command.precision ?? springOptions?.precision,
                  };

            const startValue =
              isNumber(command) || isReadonlyArray(command)
                ? acc
                : command.from;

            const destinations: readonly number[] = isNumber(command)
              ? [command]
              : isReadonlyArray(command)
                ? command
                : isNumber(command.to)
                  ? [command.to]
                  : command.to;

            const sources = pipe(
              destinations,
              Runnable.fromReadonlyArray(),
              Runnable.scan<number, Tuple2<number, number>>(
                ([, prev], v) => tuple(prev, v),
                returns(tuple(startValue, startValue)),
              ),
              Runnable.reduce(
                (
                  animations: Array<PureSynchronousObservableLike<number>>,
                  [prev, next],
                ) => {
                  if (prev !== next) {
                    animations[Array_push](
                      pipe(
                        SynchronousObservable.spring(springCommandOptions),
                        SynchronousObservable.map(scale(prev, next)),
                      ),
                    );
                  }
                  return animations;
                },
                () => [],
              ),
            );

            return pipe(
              Observable.concat(...sources),
              Observable.forEach(
                bindMethod(accFeedbackStream, EventListenerLike_notify),
              ),
            );
          },
        ),
        Observable.switchAll<number>(),
      );

      init(
        StreamMixin<Streamable.SpringEvent, number>(),
        this,
        operator,
        scheduler,
        options,
      );

      pipe(animationIsRunning, Disposable.addTo(this));

      return this;
    },

    props<TProperties>({
      [AnimationLike_isRunning]: none,
    }),
  );

  return (springOptions?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): StreamableLike<
    Streamable.SpringEvent,
    number,
    Streamable.SpringStreamLike
  > => ({
    [StreamableLike_stream]: (scheduler, options) =>
      SpringStream_create(scheduler, springOptions, options),
  });
})();

export default Streamable_spring;
