import {
  Array_every,
  Array_length,
  Array_push,
} from "../../../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../events.js";
import { none, pick, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";

type LatestMode = 1 | 2;
const zipMode = 2;

const EventSource_latest = /*@__PURE__*/ (() => {
  const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
  const LatestCtx_delegate = Symbol("LatestCtx_delegate");
  const LatestCtx_mode = Symbol("LatestCtx_mode");
  const LatestCtx_eventListeners = Symbol("LatestCtx_eventListeners");

  type LatestCtx = {
    [LatestCtx_delegate]: EventListenerLike<readonly unknown[]>;
    [LatestCtx_mode]: LatestMode;
    [LatestCtx_completedCount]: number;
    [LatestCtx_eventListeners]: TProperties[];
  };

  function onLatestEventListenerCompleted(this: TProperties) {
    const ctx = this[LatestEventListener_ctx];
    ctx[LatestCtx_completedCount]++;

    if (
      ctx[LatestCtx_completedCount] ===
      ctx[LatestCtx_eventListeners][Array_length]
    ) {
      ctx[LatestCtx_delegate][DisposableLike_dispose]();
    }
  }

  const LatestEventListener_ctx = Symbol("LatestEventListener_ctx");
  const LatestEventListener_latest = Symbol("LatestEventListener_latest");
  const LatestEventListener_ready = Symbol("LatestEventListener_ready");

  type TProperties = {
    [LatestEventListener_ready]: boolean;
    [LatestEventListener_latest]: unknown;
    readonly [LatestEventListener_ctx]: LatestCtx;
  };

  const createLatestEventListener = mixInstanceFactory(
    include(DisposableMixin),
    function LatestEventListener(
      instance: Pick<EventListenerLike, typeof EventListenerLike_notify> &
        Mutable<TProperties>,
      ctx: LatestCtx,
    ): EventListenerLike & TProperties {
      init(DisposableMixin, instance);

      instance[LatestEventListener_ctx] = ctx;

      pipe(
        instance,
        DisposableContainer.onComplete(onLatestEventListenerCompleted),
      );

      return instance;
    },
    props<TProperties>({
      [LatestEventListener_ready]: false,
      [LatestEventListener_latest]: none,
      [LatestEventListener_ctx]: none,
    }),
    {
      [EventListenerLike_notify](
        this: TProperties & EventListenerLike,
        next: unknown,
      ) {
        const ctx = this[LatestEventListener_ctx];
        const mode = ctx[LatestCtx_mode];
        const EventListeners = ctx[LatestCtx_eventListeners];

        this[LatestEventListener_latest] = next;
        this[LatestEventListener_ready] = true;

        const isReady = EventListeners[Array_every](
          pick(LatestEventListener_ready),
        );

        if (isReady) {
          const result = pipe(
            EventListeners,
            ReadonlyArray.map(pick(LatestEventListener_latest)),
          );
          ctx[LatestCtx_delegate][EventListenerLike_notify](result);

          if (mode === zipMode) {
            for (const sub of EventListeners) {
              sub[LatestEventListener_ready] = false;
              sub[LatestEventListener_latest] = none as any;
            }
          }
        }
      },
    },
  );

  return (
    eventSources: readonly EventSourceLike<any>[],
    mode: LatestMode,
  ): EventSourceLike<readonly unknown[]> => {
    const onSubscribe = (delegate: EventListenerLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        [LatestCtx_completedCount]: 0,
        [LatestCtx_eventListeners]: [],
        [LatestCtx_delegate]: delegate,
        [LatestCtx_mode]: mode,
      };

      for (const observable of eventSources) {
        const innerEventListener = pipe(
          createLatestEventListener(ctx),
          Disposable.addTo(delegate),
        );

        ctx[LatestCtx_eventListeners][Array_push](innerEventListener);
        observable[EventSourceLike_addEventListener](innerEventListener);
      }
    };

    return EventSource_create(onSubscribe);
  };
})();

export default EventSource_latest;
