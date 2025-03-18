import {
  BroadcasterLike,
  BroadcasterLike_connect,
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  DeferredObservableWithSideEffectsLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  StoreLike,
} from "../computations.js";
import {
  Function1,
  SideEffect1,
  isSome,
  newInstance,
  pipe,
  returns,
} from "../functions.js";
import AbstractDelegatingDisposableContainer, {
  AbstractDelegatingDisposableContainer_delegate,
} from "../utils/DisposableContainer/__internal__/AbstractDelegatingDisposableContainer.js";
import * as EventListener from "../utils/EventListener.js";
import {
  DisposableLike,
  EventListenerLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SinkLike,
} from "../utils.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "./Broadcaster/__private__/Broadcaster.createPauseable.js";
import Observable_create from "./Observable/__private__/Observable.create.js";

export interface BroadcasterModule {
  create<T>(
    setup: SideEffect1<SinkLike<T>>,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
    },
  ): BroadcasterLike<T> & DisposableLike;

  createPauseable<T>(
    op: Function1<
      EventSourceLike<boolean> & DisposableLike,
      BroadcasterLike<T>
    >,
  ): PauseableLike & BroadcasterLike<T> & DisposableLike;

  toEventSource<T>(): <TBroadcaster extends BroadcasterLike<T>>(
    broadcaster: TBroadcaster,
  ) => TBroadcaster extends PauseableLike
    ? PauseableLike & EventSourceLike<T>
    : EventSourceLike<T>;

  toObservable<T>(): Function1<
    BroadcasterLike<T>,
    DeferredObservableWithSideEffectsLike<T>
  >;
}

export type Signature = BroadcasterModule;

export const create: Signature["create"] = Broadcaster_create;
export const createPauseable: Signature["createPauseable"] =
  Broadcaster_createPauseable;

class BroadcasterToEventSource<T, TBroadcaster extends BroadcasterLike<T>>
  extends AbstractDelegatingDisposableContainer<TBroadcaster>
  implements EventSourceLike<T>
{
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isSynchronous]: false = false as const;

  [EventSourceLike_addEventListener](
    listener: EventListenerLike<unknown>,
  ): void {
    const sink = pipe(listener, EventListener.toSink());
    this[AbstractDelegatingDisposableContainer_delegate][
      BroadcasterLike_connect
    ](sink);
  }
}

class BroadcasterToPauseableEventSource<T>
  extends BroadcasterToEventSource<T, PauseableLike & BroadcasterLike<T>>
  implements PauseableLike
{
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isSynchronous]: false = false as const;

  get [PauseableLike_isPaused](): StoreLike<boolean> {
    return this[AbstractDelegatingDisposableContainer_delegate][
      PauseableLike_isPaused
    ];
  }

  [PauseableLike_pause](): void {
    return this[AbstractDelegatingDisposableContainer_delegate][
      PauseableLike_pause
    ]();
  }
  [PauseableLike_resume](): void {
    return this[AbstractDelegatingDisposableContainer_delegate][
      PauseableLike_resume
    ]();
  }
}

export const toEventSource: Signature["toEventSource"] = /*@__PURE__*/ returns(
  broadcaster =>
    isSome((broadcaster as any)[PauseableLike_isPaused])
      ? newInstance(
          BroadcasterToPauseableEventSource,
          broadcaster as unknown as PauseableLike & BroadcasterLike,
        )
      : newInstance(BroadcasterToEventSource, broadcaster),
) as Signature["toEventSource"];

export const toObservable: Signature["toObservable"] = /*@__PURE__*/ (<T>() =>
  returns((broadcaster: BroadcasterLike<T>) =>
    Observable_create<T>(observer => {
      broadcaster[BroadcasterLike_connect](observer);
    }),
  ))();
