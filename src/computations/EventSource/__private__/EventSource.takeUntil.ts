import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { EventSourceLike } from "../../../computations.js";
import { ignore, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike, EventListenerLike_notify } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_lift from "./EventSource.lift.js";

const createTakeUntilEventListener: <T>(
  delegate: EventListenerLike<T>,
  notifier: EventSourceLike<unknown>,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  const TakeUntilEventListener_delegate = Symbol(
    "TakeUntilEventListener_delegate",
  );

  type TProperties = {
    [TakeUntilEventListener_delegate]: EventListenerLike<T>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin),
    function WithLatestFromEventListener(
      this: Pick<EventListenerLike<T>, typeof EventListenerLike_notify> &
        TProperties,
      delegate: EventListenerLike<T>,
      notifier: EventSourceLike<unknown>,
    ): EventListenerLike<T> {
      init(DelegatingDisposableMixin, this, delegate);

      this[TakeUntilEventListener_delegate] = delegate;

      pipe(
        notifier,
        EventSource_addEventHandler(ignore),
        Disposable.bindTo(this),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilEventListener_delegate]: none,
    }),
    {
      [EventListenerLike_notify](
        this: TProperties & EventListenerLike<T>,
        next: T,
      ) {
        this[TakeUntilEventListener_delegate][EventListenerLike_notify](next);
      },
    },
  );
})();

const EventSource_takeUntil: EventSource.Signature["takeUntil"] = (<T>(
  notifier: EventSourceLike,
) =>
  pipe(
    createTakeUntilEventListener<T>,
    partial(notifier),
    EventSource_lift,
  )) as EventSource.Signature["takeUntil"];
export default EventSource_takeUntil;
