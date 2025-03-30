import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  DeferredComputationWithSideEffects,
  PureSynchronousObservableLike,
  StoreLike_value,
  StreamableLike,
  StreamableLike_stream,
  WritableStoreLike,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  compose,
  isFunction,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  ObserverLike,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as WritableStore from "../../WritableStore.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");

const Streamable_animation: Streamable.Signature["animation"] = /*@__PURE__*/ (<
  TEvent,
  T,
>() => {
  type TProperties = {
    [AnimationLike_isRunning]: WritableStoreLike<boolean>;
  };
  const AnimationStream_create = mixInstanceFactory(
    include(StreamMixin(), DelegatingPauseableMixin),
    function AnimationStream(
      this: TProperties,
      animation:
        | Function1<TEvent, PureSynchronousObservableLike<T>>
        | PureSynchronousObservableLike<T>,
      scheduler: SchedulerLike,
      options: Optional<{
        readonly autoDispose?: boolean;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
      }>,
    ): Streamable.AnimationLike<TEvent, T> & DisposableLike {
      const pauseableScheduler = PauseableScheduler.create(scheduler);
      const animationIsRunning = WritableStore.create(false);
      this[AnimationLike_isRunning] = animationIsRunning;

      const operator = compose(
        Observable.map((event: TEvent) =>
          pipe(
            isFunction(animation) ? animation(event) : animation,
            // FIXME: Shouldn't use DeferredSource implement onSubscribe on Observable/Producer
            DeferredSource.onSubscribe<T, ObserverLike<T>>(() => {
              animationIsRunning[StoreLike_value] = true;
              return () => {
                animationIsRunning[StoreLike_value] = false;
              };
            }),
          ),
        ),
        Observable.switchAll(DeferredComputationWithSideEffects),
        Observable.subscribeOn(pauseableScheduler),
      );

      init(StreamMixin<TEvent, T>(), this, operator, scheduler, options);
      init(DelegatingPauseableMixin, this, pauseableScheduler);

      pipe(animationIsRunning, Disposable.addTo(this));

      this[PauseableLike_resume]();

      return this;
    },
  );

  return (
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
  ): StreamableLike<TEvent, T, Streamable.AnimationLike<TEvent, T>> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      AnimationStream_create(animation, scheduler, options),
  });
})();

export default Streamable_animation;
