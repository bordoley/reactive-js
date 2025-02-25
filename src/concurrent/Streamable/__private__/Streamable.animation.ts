import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  AnimationStreamLike,
  AnimationStreamLike_animation,
  PureRunnableLike,
  SchedulerLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventSourceLike, PublisherLike } from "../../../events.js";
import { Function1, isFunction, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const AnimationStream_create: <TEvent, T>(
  animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
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
    include(StreamMixin()),
    function AnimationStream(
      instance: TProperties,
      animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      },
    ): AnimationStreamLike<TEvent, T> {
      const operator = Observable.switchMap<TEvent, boolean>(
        (event: TEvent) =>
          pipe(
            isFunction(animation) ? animation(event) : animation,
            Observable.notify(publisher),
            Observable.ignoreElements(),
            Observable.subscribeOn(animationScheduler),
            Observable.startWith<boolean>(true),
            Observable.endWith<boolean>(false),
          ),
        {
          innerType: Observable.DeferredObservableWithSideEffectsType,
        },
      );

      init(
        StreamMixin<TEvent, boolean>(),
        instance,
        operator,
        scheduler,
        options,
      );

      const publisher: PublisherLike<T> = pipe(
        Publisher.create<T>(),
        Disposable.addTo(instance),
      );

      instance[AnimationStreamLike_animation] = publisher;

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
  animationGroup: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
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
