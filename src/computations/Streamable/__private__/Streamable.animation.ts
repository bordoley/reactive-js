import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
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
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");

const Streamable_animation: Streamable.Signature["animation"] = /*@__PURE__*/ (<
  TEvent,
  T,
>() => {
  type TProperties = {
    [AnimationLike_isRunning]: WritableStoreLike<boolean>;
  };
  const createAnimationStream = mixInstanceFactory(
    include(StreamMixin()),
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
    ): Streamable.AnimationLike<TEvent, T> {
      const animationIsRunning = WritableStore.create(false);
      this[AnimationLike_isRunning] = animationIsRunning;

      const operator = compose(
        Observable.map((event: TEvent) =>
          pipe(
            isFunction(animation) ? animation(event) : animation,
            Observable.withEffect(() => {
              animationIsRunning[StoreLike_value] = true;
              return () => {
                animationIsRunning[StoreLike_value] = false;
              };
            }),
          ),
        ),
        Observable.switchAll({
          [ComputationLike_isPure]: false,
        }),
      );

      init(StreamMixin<TEvent, T>(), this, operator, scheduler, options);

      pipe(animationIsRunning, Disposable.addTo(this));

      return this;
    },
    props<TProperties>({
      [AnimationLike_isRunning]: none,
    }),
  );

  return (
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
  ): StreamableLike<TEvent, T, Streamable.AnimationLike<TEvent, T>> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      createAnimationStream(animation, scheduler, options),
  });
})();

export default Streamable_animation;
