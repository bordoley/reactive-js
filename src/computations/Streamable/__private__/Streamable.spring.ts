import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  DeferredObservableLike,
  DeferredObservableWithSideEffectsLike,
  EventListenerLike_notify,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import {
  Function1,
  Tuple2,
  compose,
  isNumber,
  isReadonlyArray,
  pipe,
  returns,
  scale,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as Subject from "../../Subject.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const SpringStream_create: (
  initialValue: number,
  scheduler: SchedulerLike,
  animationScheduler: SchedulerLike,
  springOptions?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  },
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => Streamable.AnimationStreamLike<
  Function1<
    number,
    | number
    | { from: number; to: number | ReadonlyArray<number> }
    | ReadonlyArray<number>
  >,
  number
> = /*@__PURE__*/ (() => {
  const ObservableModule = {
    concat: Observable.concat,
    concatAll: Observable.concatAll,
    forEach: Observable.forEach,
    fromReadonlyArray: Observable.fromReadonlyArray,
    keep: Observable.keep,
    map: Observable.map,
    switchAll: Observable.switchAll,
  };

  return mixInstanceFactory(
    include(
      StreamMixin(),
      DelegatingPauseableMixin,
      DelegatingEventSourceMixin(),
    ),
    function AnimationStream(
      instance: unknown,
      initialValue: number,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      springOptions?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
      },
      options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      },
    ): Streamable.AnimationStreamLike<
      Function1<number, number | ReadonlyArray<number>>,
      number
    > {
      const pauseableScheduler = PauseableScheduler.create(animationScheduler);

      const publisher = Publisher.create<number>();

      const accFeedbackStream = Subject.create<number>({ replay: 1 });

      const operator: Function1<
        DeferredObservableLike<
          Function1<
            number,
            | number
            | { from: number; to: number | ReadonlyArray<number> }
            | ReadonlyArray<number>
          >
        >,
        DeferredObservableWithSideEffectsLike<boolean>
      > = compose(
        Observable.withLatestFrom<
          Function1<
            number,
            | number
            | { from: number; to: number | ReadonlyArray<number> }
            | ReadonlyArray<number>
          >,
          number,
          Tuple2<
            | number
            | ReadonlyArray<number>
            | { from: number; to: number | ReadonlyArray<number> },
            number
          >
        >(accFeedbackStream, (updater, acc) => tuple(updater(acc), acc)),
        Computation.flatMap(ObservableModule, "switchAll")<
          Tuple2<
            | number
            | ReadonlyArray<number>
            | { from: number; to: number | ReadonlyArray<number> },
            number
          >,
          boolean,
          DeferredComputationWithSideEffectsLike
        >(
          ([updated, acc]) => {
            const initialValue =
              isNumber(updated) || isReadonlyArray(updated)
                ? acc
                : updated.from;

            const destinations = isNumber(updated)
              ? [updated]
              : isReadonlyArray(updated)
                ? updated
                : isNumber(updated.to)
                  ? [updated.to]
                  : updated.to;

            const sources = pipe(
              destinations,
              Iterable.scan<number, Tuple2<number, number>>(
                ([, prev], v) => tuple(prev, v),
                returns(tuple(initialValue, initialValue)),
              ),
              Iterable.reduce(
                (
                  animations: Array<PureSynchronousObservableLike<number>>,
                  [prev, next],
                ) => {
                  if (prev !== next) {
                    animations.push(
                      pipe(
                        Observable.spring(springOptions),
                        Observable.map(scale(prev, next)),
                      ),
                    );
                  }
                  return animations;
                },
                (): Array<PureSynchronousObservableLike<number>> => [],
              ),
            );

            return sources.length > 0
              ? pipe(
                  sources,
                  Computation.concatMany(ObservableModule),
                  Computation.notify(ObservableModule)(publisher),
                  Computation.notify(ObservableModule)(accFeedbackStream),
                  Computation.ignoreElements(ObservableModule)(),
                  Observable.subscribeOn(pauseableScheduler),
                  Computation.startWith(ObservableModule)(true),
                  Computation.endWith(ObservableModule)(false),
                )
              : Observable.empty();
          },

          {
            innerType: DeferredComputationWithSideEffects,
          },
        ),
      );

      init(
        StreamMixin<
          Function1<number, number | ReadonlyArray<number>>,
          boolean
        >(),
        instance,
        operator,
        scheduler,
        options,
      );

      init(DelegatingPauseableMixin, instance, pauseableScheduler);

      init(DelegatingEventSourceMixin(), instance, publisher);

      pipe(
        instance,
        Disposable.add(publisher),
        Disposable.add(accFeedbackStream),
        Disposable.add(pauseableScheduler),
      );

      instance[PauseableLike_resume]();

      accFeedbackStream[EventListenerLike_notify](initialValue);

      return instance;
    },
  );
})();

const Streamable_spring: Streamable.Signature["spring"] = (
  initialValue: number,
  creationOptions?: {
    readonly animationScheduler?: SchedulerLike;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  },
): StreamableLike<
  Function1<
    number,
    | number
    | { from: number; to: number | ReadonlyArray<number> }
    | ReadonlyArray<number>
  >,
  boolean,
  Streamable.AnimationStreamLike<
    Function1<number, number | ReadonlyArray<number>>,
    number
  >
> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    SpringStream_create(
      initialValue,
      scheduler,
      creationOptions?.animationScheduler ?? scheduler,
      creationOptions,
      options,
    ),
});

export default Streamable_spring;
