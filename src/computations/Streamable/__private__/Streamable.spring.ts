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
  StoreLike_value,
  StreamableLike,
  StreamableLike_stream,
  WritableStoreLike,
} from "../../../computations.js";
import {
  Optional,
  Tuple2,
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
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import type * as Streamable from "../../Streamable.js";
import * as SynchronousObservable from "../../SynchronousObservable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
import { AnimationLike_isRunning } from "./Streamable.animation.js";

const Streamable_spring: Streamable.Signature["spring"] = /*@__PURE__*/ (() => {
  type TProperties = {
    [AnimationLike_isRunning]: WritableStoreLike<boolean>;
    [StoreLike_value]: number;
  };

  const createSpringStream = mixInstanceFactory(
    include(StreamMixin(), DelegatingPauseableMixin),
    function SpringStream(
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
      const operator = compose(
        identity<ObservableLike<Streamable.SpringEvent>>,
        Observable.map((updater: Streamable.SpringEvent) => {
          const acc = this[StoreLike_value];
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
            isNumber(command) || isReadonlyArray(command) ? acc : command.from;

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
            Observable.withEffect(() => {
              animationIsRunning[StoreLike_value] = true;
              return () => {
                animationIsRunning[StoreLike_value] = false;
              };
            }),
          );
        }),
        Observable.switchAll<number>(),
        Observable.forEach(v => {
          this[StoreLike_value] = v;
        }),
      );

      init(
        StreamMixin<Streamable.SpringEvent, number>(),
        this,
        operator,
        scheduler,
        options,
      );

      const animationIsRunning = pipe(
        WritableStore.create(false),
        Disposable.addTo(this),
      );
      this[AnimationLike_isRunning] = animationIsRunning;

      return this;
    },

    props<TProperties>({
      [AnimationLike_isRunning]: none,
      [StoreLike_value]: 0,
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
      createSpringStream(scheduler, springOptions, options),
  });
})();

export default Streamable_spring;
