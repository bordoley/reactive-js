import { Array_push } from "../../__internal__/constants.js";
import { Mixin3, mix, props, proto } from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SourceLike,
  SourceLike_subscribe,
} from "../../computations.js";
import { Function2, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { EventListenerLike } from "../../utils.js";
import {
  LatestEventListenerContextLike,
  LatestEventListenerContextLike_completedCount,
  LatestEventListenerContextLike_mode,
  LatestEventListenerContextLike_values,
  LatestEventListenerLike,
  LatestEventListenerMode,
} from "./LatestEventListenerMixin.js";

const LatestSourceMixin: <
  T,
  TEventListener extends EventListenerLike<ReadonlyArray<T>>,
  TSource extends SourceLike<T, TSourceEventListener>,
  TSourceEventListener extends EventListenerLike<T> &
    LatestEventListenerLike<T>,
>() => Mixin3<
  SourceLike<ReadonlyArray<T>, TEventListener>,
  ReadonlyArray<TSource>,
  LatestEventListenerMode,
  Function2<
    TEventListener,
    LatestEventListenerContextLike,
    TSourceEventListener
  >
> = /*@__PURE__*/ (<
  T,
  TEventListener extends EventListenerLike<ReadonlyArray<T>>,
  TSource extends SourceLike<T, TSourceEventListener>,
  TSourceEventListener extends EventListenerLike<T> &
    LatestEventListenerLike<T>,
>() => {
  const LatestSource_sources = Symbol("LatestSource_sources");
  const LatestSource_mode = Symbol("LatestSource_mode");
  const LatestSource_createLatestEventListener = Symbol(
    "LatestSource_createLatestEventListener",
  );
  type TProperties = {
    [LatestSource_sources]: readonly TSource[];
    [LatestSource_mode]: LatestEventListenerMode;
    [LatestSource_createLatestEventListener]: Function2<
      TEventListener,
      LatestEventListenerContextLike,
      TSourceEventListener
    >;
  };
  return returns(
    mix(
      function LastestSource(
        this: SourceLike<ReadonlyArray<T>, TEventListener> & TProperties,
        sources: readonly TSource[],
        mode: LatestEventListenerMode,
        createLatestEventListener: Function2<
          TEventListener,
          LatestEventListenerContextLike,
          TSourceEventListener
        >,
      ): SourceLike<ReadonlyArray<T>, TEventListener> {
        this[LatestSource_sources] = sources;
        this[LatestSource_mode] = mode;
        this[LatestSource_createLatestEventListener] =
          createLatestEventListener;

        return this;
      },
      props<TProperties>({
        [LatestSource_sources]: none,
        [LatestSource_mode]: "combine-latest",
        [LatestSource_createLatestEventListener]: none,
      }),
      proto({
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isPure]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [SourceLike_subscribe](
          this: TProperties,
          eventListener: TEventListener,
        ) {
          const mode = this[LatestSource_mode];
          const sources = this[LatestSource_sources];

          const ctx: LatestEventListenerContextLike = {
            [LatestEventListenerContextLike_completedCount]: 0,
            [LatestEventListenerContextLike_values]: [],
            [LatestEventListenerContextLike_mode]: mode,
          };

          for (const source of sources) {
            const innerSink = pipe(
              this[LatestSource_createLatestEventListener](eventListener, ctx),
              Disposable.addTo(eventListener),
            );

            ctx[LatestEventListenerContextLike_values][Array_push](innerSink);
            source[SourceLike_subscribe](innerSink);
          }
        },
      }),
    ),
  );
})();

export default LatestSourceMixin;
