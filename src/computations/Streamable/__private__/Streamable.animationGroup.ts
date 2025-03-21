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
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  EventSourceLike,
  PublisherLike,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  Tuple2,
  isFunction,
  none,
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
import type * as Streamable from "../../Streamable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const Streamable_animationGroup: Streamable.Signature["animationGroup"] =
  /*@__PURE__*/ (<T, TEvent = unknown, TKey extends string = string>() => {
    const AnimationGroupStream_eventSources = Symbol(
      "AnimationGroupStream_delegate",
    );

    const ObservableModule = {
      concat: Observable.concat,
      forEach: Observable.forEach,
      fromReadonlyArray: Observable.fromReadonlyArray,
      keep: Observable.keep,
      map: Observable.map,
      merge: Observable.merge,
      switchAll: Observable.switchAll,
    };

    type TProperties = {
      [AnimationGroupStream_eventSources]: ReadonlyObjectMapLike<
        TKey,
        EventSourceLike<T>
      >;
    };

    const AnimationGroupStream_create = mixInstanceFactory(
      include(StreamMixin(), DelegatingPauseableMixin),
      function AnimationGroupStream(
        this: TProperties &
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
        options: Optional<{
          readonly autoDispose?: boolean;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly replay?: number;
          readonly capacity?: number;
        }>,
      ): Streamable.AnimationGroupStreamLike<TEvent, TKey, T> & DisposableLike {
        const pauseableScheduler =
          PauseableScheduler.create(animationScheduler);
        const operator = Computation.flatMap(ObservableModule)<
          TEvent,
          boolean,
          DeferredComputationWithSideEffectsLike
        >(
          "switchAll",
          (event: TEvent) =>
            pipe(
              animationGroup,
              ReadonlyObjectMap.entries(),
              Iterable.map(
                ([key, factory]: Tuple2<
                  string,
                  | Function1<TEvent, PureSynchronousObservableLike<T>>
                  | PureSynchronousObservableLike<T>
                >) => {
                  const publisher = publishers[key] as PublisherLike<T>;
                  return pipe(
                    isFunction(factory) ? factory(event) : factory,
                    Computation.notify(ObservableModule)(publisher),
                    Observable.subscribeOn(pauseableScheduler),
                  );
                },
              ),
              ReadonlyArray.fromIterable(),
              Computation.mergeMany(ObservableModule),
              Computation.ignoreElements(ObservableModule)(),
              Computation.startWith(ObservableModule)(true),
              Computation.endWith(ObservableModule)(false),
            ),
          {
            innerType: DeferredComputationWithSideEffects,
          },
        );

        init(
          StreamMixin<TEvent, boolean>(),
          this,
          operator,
          scheduler,
          options,
        );

        init(DelegatingPauseableMixin, this, pauseableScheduler);

        pipe(this, Disposable.add(pauseableScheduler));

        const publishers = (this[AnimationGroupStream_eventSources] = pipe(
          animationGroup,
          ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
            pipe(Publisher.create<T>(), Disposable.addTo(this)),
          ),
        ));

        this[PauseableLike_resume]();

        return this;
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

    return (
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
      Streamable.AnimationGroupStreamLike<TEvent, TKey, T>
    > => ({
      [StreamableLike_stream]: (scheduler, options) =>
        AnimationGroupStream_create(
          animationGroup,
          scheduler,
          creationOptions?.animationScheduler ?? scheduler,
          options,
        ),
    });
  })();

export default Streamable_animationGroup;
