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
import {
  AnimationGroupStreamLike,
  PureRunnableLike,
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
import type * as Streamable from "../../Streamable.js";
import { SingleUseObservableLike_observer } from "../../__internal__/SingleUseObservable.js";
import * as SingleUseObservable from "../../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const AnimationGroupStream_create: <TEvent, TKey extends string, T>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
  scheduler: SchedulerLike,
  animationScheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => AnimationGroupStreamLike<T, TEvent, TKey> = /*@__PURE__*/ (<
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
    include(
      DelegatingDispatcherMixin(),
      DelegatingMulticastObservableMixin<T>(),
    ),
    function AnimationGroupStream(
      instance: TProperties &
        Pick<
          DictionaryLike<TKey, EventSourceLike<T>>,
          typeof DictionaryLike_keys | typeof DictionaryLike_get
        >,
      animationGroup: ReadonlyObjectMapLike<
        TKey,
        Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
      >,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      },
    ): AnimationGroupStreamLike<T, TEvent, TKey> {
      const singleUseObservable = SingleUseObservable.create<TEvent>();

      const delegate = pipe(
        singleUseObservable,
        Observable.switchMap<TEvent, boolean>(
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
                    );
                  }),
                  ReadonlyArray.fromIterable(),
                ),
              ),
              Observable.ignoreElements(),
              Observable.subscribeOn(animationScheduler),
              Observable.startWith<boolean>(true),
              Observable.endWith<boolean>(false),
            ),
          {
            innerType: Observable.DeferredObservableWithSideEffectsType,
          },
        ),
        Observable.multicast<boolean>(scheduler, options),
      );

      init(
        DelegatingDispatcherMixin<TEvent>(),
        instance,
        singleUseObservable[SingleUseObservableLike_observer],
      );
      init(DelegatingMulticastObservableMixin<boolean>(), instance, delegate);

      const publishers = (instance[AnimationGroupStream_eventSources] = pipe(
        animationGroup,
        ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
          pipe(Publisher.create<T>(), Disposable.addTo(instance)),
        ),
      ));

      pipe(delegate, Disposable.addTo(instance));

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
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
  creationOptions?: {
    readonly animationScheduler?: SchedulerLike;
  },
): StreamableLike<
  TEvent,
  boolean,
  AnimationGroupStreamLike<T, TEvent, TKey>
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
