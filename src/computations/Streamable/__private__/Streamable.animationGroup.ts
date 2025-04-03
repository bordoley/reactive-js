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
  ComputationLike_isPure,
  PublisherLike,
  PureSynchronousObservableLike,
  StoreLike_value,
  StreamableLike,
  StreamableLike_stream,
  WritableStoreLike,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  Tuple2,
  bindMethod,
  compose,
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
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
import { AnimationLike_isRunning } from "./Streamable.animation.js";

const Streamable_animationGroup: Streamable.Signature["animationGroup"] =
  /*@__PURE__*/ (<T, TEvent = unknown, TKey extends string = string>() => {
    const AnimationGroup_animations = Symbol("AnimationGroup_animations");

    type TProperties = {
      [AnimationLike_isRunning]: WritableStoreLike<boolean>;
      [AnimationGroup_animations]: ReadonlyObjectMapLike<
        TKey,
        BroadcasterLike<T>
      >;
    };

    type TPrototype = DictionaryLike<TKey, BroadcasterLike<T>>;

    const createAnimationGroupStream = mixInstanceFactory(
      include(StreamMixin()),
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
        const animationIsRunning = WritableStore.create(false);
        this[AnimationLike_isRunning] = animationIsRunning;

        const operator = compose(
          Observable.map((event: TEvent) => {
            const observables = pipe(
              animationGroup,
              ReadonlyObjectMap.entries(),
              Iterable.of(),
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
                  );
                },
              ),
              ReadonlyArray.fromIterable(),
            );

            return pipe(
              Observable.merge(...observables),
              Observable.withCurrentTime(t => t),
              Observable.withEffect(() => {
                animationIsRunning[StoreLike_value] = true;
                return () => {
                  animationIsRunning[StoreLike_value] = false;
                };
              }),
            );
          }),
          Observable.switchAll({
            [ComputationLike_isPure]: false,
          }),
        );

        init(StreamMixin<TEvent, number>(), this, operator, scheduler, options);

        const publishers = (this[AnimationGroup_animations] = pipe(
          animationGroup,
          ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
            pipe(Publisher.create<T>(), Disposable.addTo(this)),
          ),
        ));

        pipe(animationIsRunning, Disposable.addTo(this));

        return this;
      },
      props<TProperties>({
        [AnimationLike_isRunning]: none,
        [AnimationGroup_animations]: none,
      }),
      proto<TPrototype>({
        get [DictionaryLike_keys](): Iterable<TKey> {
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
      number,
      Streamable.AnimationGroupLike<TEvent, TKey, T>
    > => ({
      [StreamableLike_stream]: (scheduler, options) =>
        createAnimationGroupStream(animationGroup, scheduler, options),
    });
  })();

export default Streamable_animationGroup;
