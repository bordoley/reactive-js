import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  AnimationStreamLike,
  AnimationStreamLike_animation,
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  EventSourceLike,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import { Function1, isFunction, none, pipe } from "../../../functions.js";
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
import StreamMixin from "../../__mixins__/StreamMixin.js";

const AnimationStream_create: <TEvent, T>(
  animation:
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>,
  scheduler: SchedulerLike,
  animationScheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => AnimationStreamLike<TEvent, T> = /*@__PURE__*/ (<TEvent, T>() => {
  type TProperties = {
    [AnimationStreamLike_animation]: EventSourceLike<T>;
  };

  const ObservableModule = {
    concat: Observable.concat,
    forEach: Observable.forEach,
    fromReadonlyArray: Observable.fromReadonlyArray,
    keep: Observable.keep,
    map: Observable.map,
    switchAll: Observable.switchAll,
  };

  return mixInstanceFactory(
    include(StreamMixin(), DelegatingPauseableMixin),
    function AnimationStream(
      instance: TProperties,
      animation:
        | Function1<TEvent, PureSynchronousObservableLike<T>>
        | PureSynchronousObservableLike<T>,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      },
    ): AnimationStreamLike<TEvent, T> {
      const pauseableScheduler = PauseableScheduler.create(animationScheduler);
      const publisher = (instance[AnimationStreamLike_animation] =
        Publisher.create());

      const operator = Computation.flatMap(ObservableModule, "switchAll")<
        TEvent,
        boolean,
        DeferredComputationWithSideEffectsLike
      >(
        (event: TEvent) =>
          pipe(
            isFunction(animation) ? animation(event) : animation,
            Computation.notify(ObservableModule)(publisher),
            Computation.ignoreElements(ObservableModule)(),
            Observable.subscribeOn(pauseableScheduler),
            Computation.startWith(ObservableModule)(true),
            Computation.endWith(ObservableModule)(false),
          ),
        {
          innerType: DeferredComputationWithSideEffects,
        },
      );

      init(
        StreamMixin<TEvent, boolean>(),
        instance,
        operator,
        scheduler,
        options,
      );

      init(DelegatingPauseableMixin, instance, pauseableScheduler);

      pipe(
        instance,
        Disposable.add(publisher),
        Disposable.add(pauseableScheduler),
      );

      instance[PauseableLike_resume]();

      return instance;
    },
    props<TProperties>({
      [AnimationStreamLike_animation]: none,
    }),
  );
})();

const Streamable_animation: Streamable.Signature["animation"] = (<
  T,
  TEvent = unknown,
>(
  animationGroup:
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>,
  creationOptions?: {
    readonly animationScheduler?: SchedulerLike;
  },
): StreamableLike<TEvent, boolean, AnimationStreamLike<TEvent, T>> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    AnimationStream_create(
      animationGroup,
      scheduler,
      creationOptions?.animationScheduler ?? scheduler,
      options,
    ),
})) as Streamable.Signature["animation"];

export default Streamable_animation;
