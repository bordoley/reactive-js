import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { DeferredComputationWithSideEffectsType } from "../../../computations.js";
import {
  AnimationStreamLike,
  AnimationStreamLike_animation,
  PauseableLike_resume,
  PureSynchronousObservableLike,
  SchedulerLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventSourceLike } from "../../../events.js";
import { Function1, isFunction, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
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

      const operator = Observable.switchMap<TEvent, boolean>(
        (event: TEvent) =>
          pipe(
            isFunction(animation) ? animation(event) : animation,
            Observable.notify(publisher),
            Observable.ignoreElements(),
            Observable.subscribeOn(pauseableScheduler),
            Observable.startWith<boolean>(true),
            Observable.endWith<boolean>(false),
          ),
        {
          innerType: DeferredComputationWithSideEffectsType,
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
