import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ObservableLike,
  PureObservableLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../computations.js";
import {
  Function1,
  Optional,
  compose,
  identity,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as PauseableScheduler from "../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  PauseableLike_resume,
  SchedulerLike,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import { type AnimationLike } from "../Streamable.js";
import * as WritableStore from "../WritableStore.js";
import StreamMixin from "./StreamMixin.js";

export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");

const AnimationStreamMixin: <TEvent, T>() => Mixin3<
  AnimationLike<TEvent, T>,
  Function1<TEvent, ObservableLike<T>>,
  SchedulerLike,
  Optional<{
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>
> = /*@__PURE__*/ (<TEvent, T>() => {
  type TProperties = {
    [AnimationLike_isRunning]: WritableStoreLike<boolean>;
    [StoreLike_value]: number;
  };

  return returns(
    mix(
      include(StreamMixin(), DelegatingPauseableMixin),
      function AnimationStreamMixin(
        this: TProperties,
        f: Function1<TEvent, ObservableLike<T>>,
        scheduler: SchedulerLike,
        options: Optional<{
          readonly autoDispose?: boolean;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        }>,
      ): AnimationLike<TEvent, T> {
        const pauseableScheduler = PauseableScheduler.create(scheduler);

        const operator = compose(
          identity<PureObservableLike<TEvent>>,
          Observable.map((event: TEvent) =>
            pipe(
              f(event),
              Observable.subscribeOn(pauseableScheduler),
              Observable.withEffect<T>(() => {
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
        init(DelegatingPauseableMixin, this, pauseableScheduler);

        const animationIsRunning = pipe(
          WritableStore.create(false),
          Disposable.addTo(this),
        );

        this[AnimationLike_isRunning] = animationIsRunning;
        this[PauseableLike_resume]();

        return this;
      },
      props<TProperties>({
        [AnimationLike_isRunning]: none,
        [StoreLike_value]: 0,
      }),
    ),
  );
})();

export default AnimationStreamMixin;
