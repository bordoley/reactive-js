import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
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
import * as Publisher from "../../../computations/Publisher.js";
import {
  BroadcasterLike,
  PublisherLike,
  PureIterableLike,
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  Tuple2,
  bindMethod,
  isFunction,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  BackpressureStrategy,
  EventListenerLike_notify,
  SchedulerLike,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import AnimationStreamMixin from "../../__mixins__/AnimationStreamMixin.js";

const Streamable_animationGroup: Streamable.Signature["animationGroup"] =
  /*@__PURE__*/ (<T, TEvent = unknown, TKey extends string = string>() => {
    const m = Computation.makeModule<Observable.Signature, "keep">({
      keep: Observable.keep,
    });

    const AnimationGroup_animations = Symbol("AnimationGroup_animations");

    type TProperties = {
      [AnimationGroup_animations]: ReadonlyObjectMapLike<
        TKey,
        BroadcasterLike<T>
      >;
    };

    type TPrototype = DictionaryLike<TKey, BroadcasterLike<T>>;

    const createAnimationGroupStream = mixInstanceFactory(
      include(AnimationStreamMixin()),
      function AnimationGroupStream(
        this: TProperties & TPrototype,
        animationGroup: ReadonlyObjectMapLike<
          TKey,
          | Function1<TEvent, PureSynchronousObservableLike<T>>
          | PureSynchronousObservableLike<T>
        >,
        scheduler: SchedulerLike,
        options: Optional<{
          readonly autoDispose?: boolean;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        }>,
      ): Streamable.AnimationGroupLike<TEvent, TKey, T> {
        const f = (event: TEvent) => {
          const observables = pipe(
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
                  Observable.forEach(
                    bindMethod(publisher, EventListenerLike_notify),
                  ),
                  Computation.ignoreElements<Observable.Computation, void>(m),
                );
              },
            ),
            ReadonlyArray.fromIterable(),
          );

          return Observable.merge(...observables);
        };

        init(AnimationStreamMixin<TEvent, void>(), this, f, scheduler, options);

        const publishers = (this[AnimationGroup_animations] = pipe(
          animationGroup,
          ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
            pipe(Publisher.create<T>(), Disposable.addTo(this)),
          ),
        ));

        return this;
      },
      props<TProperties>({
        [AnimationGroup_animations]: none,
      }),
      proto<TPrototype>({
        get [DictionaryLike_keys](): PureIterableLike<TKey> {
          unsafeCast<TProperties>(this);
          return pipe(
            this[AnimationGroup_animations],
            ReadonlyObjectMap.keys(),
          );
        },

        [DictionaryLike_get](
          this: TProperties,
          index: TKey,
        ): Optional<BroadcasterLike<T>> {
          return this[AnimationGroup_animations][index];
        },
      }),
    );

    return (
      animationGroup: ReadonlyObjectMapLike<
        TKey,
        | Function1<TEvent, PureSynchronousObservableLike<T>>
        | PureSynchronousObservableLike<T>
      >,
    ): StreamableLike<
      TEvent,
      void,
      Streamable.AnimationGroupLike<TEvent, TKey, T>
    > => ({
      [StreamableLike_stream]: (scheduler, options) =>
        createAnimationGroupStream(animationGroup, scheduler, options),
    });
  })();

export default Streamable_animationGroup;
