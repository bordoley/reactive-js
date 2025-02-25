import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  AnimationStreamLike,
  AnimationStreamLike_animation,
  DeferredObservableLike,
  DeferredObservableWithSideEffectsLike,
  PauseableLike_resume,
  SchedulerLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventListenerLike_notify, EventSourceLike } from "../../../events.js";
import {
  Function1,
  Tuple2,
  Updater,
  compose,
  none,
  pipe,
  scale,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import type * as Streamable from "../../Streamable.js";
import * as Subject from "../../Subject.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
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
) => AnimationStreamLike<Updater<number>, number> = /*@__PURE__*/ (() => {
  type TProperties = {
    [AnimationStreamLike_animation]: EventSourceLike<number>;
  };

  return mixInstanceFactory(
    include(StreamMixin(), DelegatingPauseableMixin),
    function AnimationStream(
      instance: TProperties,
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
    ): AnimationStreamLike<Updater<number>, number> {
      const pauseableScheduler = PauseableScheduler.create(animationScheduler);

      const publisher = (instance[AnimationStreamLike_animation] =
        Publisher.create<number>());

      const accFeedbackStream = Subject.create<number>({ replay: 1 });

      const operator: Function1<
        DeferredObservableLike<Updater<number>>,
        DeferredObservableWithSideEffectsLike<boolean>
      > = compose(
        Observable.withLatestFrom<
          Updater<number>,
          number,
          Tuple2<number, number>
        >(accFeedbackStream, (updater, acc) => tuple(updater(acc), acc)),
        Observable.switchMap<Tuple2<number, number>, boolean>(
          ([updated, acc]) =>
            updated !== acc
              ? pipe(
                  Observable.spring(springOptions),
                  Observable.map(scale(acc, updated)),
                  Observable.notify(publisher),
                  Observable.notify(accFeedbackStream),
                  Observable.ignoreElements(),
                  Observable.subscribeOn(pauseableScheduler),
                  Observable.startWith<boolean>(true),
                  Observable.endWith<boolean>(false),
                )
              : Observable.empty(),

          {
            innerType: Observable.DeferredObservableWithSideEffectsType,
          },
        ),
      );

      init(
        StreamMixin<Updater<number>, boolean>(),
        instance,
        operator,
        scheduler,
        options,
      );

      init(DelegatingPauseableMixin, instance, pauseableScheduler);

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
    props<TProperties>({
      [AnimationStreamLike_animation]: none,
    }),
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
  Updater<number>,
  boolean,
  AnimationStreamLike<Updater<number>, number>
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
