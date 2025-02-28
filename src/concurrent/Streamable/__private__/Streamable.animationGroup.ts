import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import * as Iterable from "../../../computations/Iterable.js";
import { DeferredComputationWithSideEffectsType } from "../../../computations.js";
import {
  AnimationGroupStreamLike,
  PauseableLike_resume,
  PureSynchronousObservableLike,
  SchedulerLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventSourceLike, PublisherLike } from "../../../events.js";
import {
  Function1,
  Optional,
  isFunction,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const AnimationGroupStream_create: <TEvent, T, TKey extends string>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>
  >,
  scheduler: SchedulerLike,
  animationScheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => AnimationGroupStreamLike<TEvent, TKey, T> = /*@__PURE__*/ (<
  TEvent,
  TKey extends string,
  T,
>() => {
  const AnimationGroupStream_eventSources = Symbol(
    "AnimationGroupStream_delegate",
  );

  type TProperties = {
    [AnimationGroupStream_eventSources]: ReadonlyObjectMapLike<
      TKey,
      EventSourceLike<T>
    >;
  };

  return mixInstanceFactory(
    include(StreamMixin(), DelegatingPauseableMixin),
    function AnimationGroupStream(
      instance: TProperties &
        Pick<
          DictionaryLike<TKey, EventSourceLike<T>>,
          typeof DictionaryLike_keys | typeof DictionaryLike_get
        >,
      animationGroup: ReadonlyObjectMapLike<
        TKey,
        | Function1<TEvent, PureSynchronousObservableLike<T>>
        | PureSynchronousObservableLike<T>
      >,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      },
    ): AnimationGroupStreamLike<TEvent, TKey, T> {
      const pauseableScheduler = PauseableScheduler.create(animationScheduler);
      const operator = Observable.switchMap<TEvent, boolean>(
        (event: TEvent) =>
          pipe(
            Observable.mergeMany(
              pipe(
                animationGroup,
                ReadonlyObjectMap.entries(),
                Iterable.map(([key, factory]) => {
                  const publisher = publishers[key] as PublisherLike<T>;
                  return pipe(
                    isFunction(factory) ? factory(event) : factory,
                    Observable.notify(publisher),
                    Observable.subscribeOn(pauseableScheduler),
                  );
                }),
                ReadonlyArray.fromIterable(),
              ),
            ),
            Observable.ignoreElements(),

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

      pipe(instance, Disposable.add(pauseableScheduler));

      const publishers = (instance[AnimationGroupStream_eventSources] = pipe(
        animationGroup,
        ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
          pipe(Publisher.create<T>(), Disposable.addTo(instance)),
        ),
      ));

      instance[PauseableLike_resume]();

      return instance;
    },
    props<TProperties>({
      [AnimationGroupStream_eventSources]: none,
    }),
    {
      get [DictionaryLike_keys](): Iterable<TKey> {
        unsafeCast<TProperties>(this);
        return pipe(
          this[AnimationGroupStream_eventSources],
          ReadonlyObjectMap.keys(),
        );
      },

      [DictionaryLike_get](
        this: TProperties,
        index: TKey,
      ): Optional<EventSourceLike<T>> {
        return this[AnimationGroupStream_eventSources][index];
      },
    },
  );
})();

const Streamable_animationGroup: Streamable.Signature["animationGroup"] = (<
  T,
  TEvent = unknown,
  TKey extends string = string,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>
  >,
  creationOptions?: {
    readonly animationScheduler?: SchedulerLike;
  },
): StreamableLike<
  TEvent,
  boolean,
  AnimationGroupStreamLike<TEvent, TKey, T>
> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    AnimationGroupStream_create(
      animationGroup,
      scheduler,
      creationOptions?.animationScheduler ?? scheduler,
      options,
    ),
})) as Streamable.Signature["animationGroup"];

export default Streamable_animationGroup;
