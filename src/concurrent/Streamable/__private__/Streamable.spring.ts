import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  AnimationStreamLike,
  AnimationStreamLike_animation,
  ObservableLike,
  SchedulerLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventListenerLike_notify, EventSourceLike } from "../../../events.js";
import {
  Tuple2,
  Updater,
  compose,
  none,
  pipe,
  scale,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as Subject from "../../Subject.js";
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
    include(StreamMixin()),
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
      const publisher = (instance[AnimationStreamLike_animation] =
        Publisher.create<number>());

      const accFeedbackStream = Subject.create();

      const operator = compose(
        (src: ObservableLike<Updater<number>>) =>
          Observable.zipLatest<number, Updater<number>>(accFeedbackStream, src),
        Observable.switchMap<Tuple2<number, Updater<number>>, boolean>(
          ([acc, update]) =>
            pipe(
              Observable.spring(springOptions),
              Observable.map(scale(acc, update(acc))),
              Observable.notify(publisher),
              Observable.notify(accFeedbackStream),
              Observable.ignoreElements(),
              Observable.subscribeOn(animationScheduler),
              Observable.startWith<boolean>(true),
              Observable.endWith<boolean>(false),
            ),
          {
            innerType: Observable.DeferredObservableWithSideEffectsType,
          },
        ),
      );

      init(StreamMixin(), instance, operator, scheduler, options);

      pipe(
        instance,
        Disposable.add(publisher),
        Disposable.add(accFeedbackStream),
      );

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
