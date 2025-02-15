import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";

import {
  AnimationStreamLike,
  AnimationStreamLike_animation,
  PureRunnableLike,
  SchedulerLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventSourceLike } from "../../../events.js";
import { Function1, isFunction, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import { SingleUseObservableLike_observer } from "../../__internal__/SingleUseObservable.js";
import * as SingleUseObservable from "../../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const AnimationStream_create: <TEvent, T>(
  animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
  scheduler: SchedulerLike,
  animationScheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => AnimationStreamLike<TEvent, T> = /*@__PURE__*/ (<TEvent, T>() => {
  type TProperties = {
    [AnimationStreamLike_animation]: EventSourceLike<T>;
  };

  return mixInstanceFactory(
    include(
      DelegatingDispatcherMixin(),
      DelegatingMulticastObservableMixin<T>(),
    ),
    function AnimationStream(
      instance: TProperties,
      animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
      scheduler: SchedulerLike,
      animationScheduler: SchedulerLike,
      options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly replay?: number;
        readonly capacity?: number;
      },
    ): AnimationStreamLike<TEvent, T> {
      const singleUseObservable = SingleUseObservable.create<TEvent>();

      const publisher = (instance[AnimationStreamLike_animation] =
        Publisher.create<T>());

      const delegate = pipe(
        singleUseObservable,
        Observable.switchMap<TEvent, boolean>(
          (event: TEvent) =>
            pipe(
              isFunction(animation) ? animation(event) : animation,
              Observable.notify(publisher),
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

      pipe(instance, Disposable.add(publisher), Disposable.add(delegate));

      return instance;
    },
    props<TProperties>({
      [AnimationStreamLike_animation]: none,
    }),
  );
})();

const Streamable_animation: Streamable.Signature["animation"] = (<
  T,
  TEvent = unknown,
>(
  animationGroup: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
  creationOptions?: {
    readonly animationScheduler?: SchedulerLike;
  },
): StreamableLike<TEvent, boolean, AnimationStreamLike<TEvent, T>> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    AnimationStream_create(
      animationGroup,
      scheduler,
      creationOptions?.animationScheduler ?? scheduler,
      options,
    ),
})) as Streamable.Signature["animation"];

export default Streamable_animation;
