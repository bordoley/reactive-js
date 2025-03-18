import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
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
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as Producer from "../../Producer.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const Streamable_animation: Streamable.Signature["animation"] = /*@__PURE__*/ (<
  TEvent,
  T,
>() => {
  const ObservableModule = {
    concat: Observable.concat,
    forEach: Observable.forEach,
    fromReadonlyArray: Observable.fromReadonlyArray,
    keep: Observable.keep,
    map: Observable.map,
    switchAll: Observable.switchAll,
  };

  const AnimationStream_create = mixInstanceFactory(
    include(
      StreamMixin(),
      DelegatingPauseableMixin,
      DelegatingEventSourceMixin(),
    ),
    function AnimationStream(
      this: unknown,
      animation:
        | Function1<TEvent, PureSynchronousObservableLike<T>>
        | PureSynchronousObservableLike<T>,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      options: Optional<{
        readonly autoDispose?: boolean;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      }>,
    ): Streamable.AnimationStreamLike<TEvent, T> & DisposableLike {
      const pauseableScheduler = PauseableScheduler.create(animationScheduler);
      const publisher = Publisher.create();

      const operator = compose(
        Producer.toObservable<TEvent>(),
        Computation.flatMap(ObservableModule)<
          TEvent,
          boolean,
          DeferredComputationWithSideEffectsLike
        >(
          "switchAll",
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
        ),
        Observable.toProducer<boolean>(scheduler),
      );

      init(StreamMixin<TEvent, boolean>(), this, operator, options);

      init(DelegatingPauseableMixin, this, pauseableScheduler);

      init(DelegatingEventSourceMixin(), this, publisher);

      pipe(this, Disposable.add(publisher), Disposable.add(pauseableScheduler));

      this[PauseableLike_resume]();

      return this;
    },
  );

  return (
    animationGroup:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
    scheduler: SchedulerLike,
    creationOptions?: {
      readonly animationScheduler?: SchedulerLike;
    },
  ): StreamableLike<
    TEvent,
    boolean,
    Streamable.AnimationStreamLike<TEvent, T>
  > => ({
    [StreamableLike_stream]: options =>
      AnimationStream_create(
        animationGroup,
        scheduler,
        creationOptions?.animationScheduler ?? scheduler,
        options,
      ),
  });
})();

export default Streamable_animation;
