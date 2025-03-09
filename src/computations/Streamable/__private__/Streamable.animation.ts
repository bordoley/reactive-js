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
import { Function1, isFunction, pipe } from "../../../functions.js";
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
import type * as Streamable from "../../Streamable.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
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
) => Streamable.AnimationStreamLike<TEvent, T> & DisposableLike =
  /*@__PURE__*/ (<TEvent, T>() => {
    const ObservableModule = {
      concat: Observable.concat,
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
      ): Streamable.AnimationStreamLike<TEvent, T> & DisposableLike {
        const pauseableScheduler =
          PauseableScheduler.create(animationScheduler);
        const publisher = Publisher.create();

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

        init(DelegatingEventSourceMixin(), instance, publisher);

        pipe(
          instance,
          Disposable.add(publisher),
          Disposable.add(pauseableScheduler),
        );

        instance[PauseableLike_resume]();

        return instance;
      },
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
): StreamableLike<
  TEvent,
  boolean,
  Streamable.AnimationStreamLike<TEvent, T>
> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    AnimationStream_create(
      animationGroup,
      scheduler,
      creationOptions?.animationScheduler ?? scheduler,
      options,
    ),
})) as Streamable.Signature["animation"];

export default Streamable_animation;
