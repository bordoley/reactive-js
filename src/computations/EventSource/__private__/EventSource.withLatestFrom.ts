import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { EventSourceLike } from "../../../computations.js";
import {
  Function2,
  Optional,
  bind,
  none,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_lift from "./EventSource.lift.js";

const createWithLatestFromEventListener: <TA, TB, T>(
  delegate: EventListenerLike<T>,
  other: EventSourceLike<TB>,
  selector: Function2<TA, TB, T>,
) => EventListenerLike<TA> = /*@__PURE__*/ (<TA, TB, T>() => {
  const WithLatestFromEventListener_hasLatest = Symbol(
    "WithLatestFromEventListener_hasLatest",
  );
  const WithLatestFromEventListener_otherLatest = Symbol(
    "WithLatestFromEventListener_otherLatest",
  );
  const WithLatestFromEventListener_selector = Symbol(
    "WithLatestFromEventListener_selector",
  );
  const WithLatestFromEventListener_delegate = Symbol(
    "WithLatestFromEventListener_delegate",
  );

  type TProperties = {
    [WithLatestFromEventListener_hasLatest]: boolean;
    [WithLatestFromEventListener_otherLatest]: Optional<TB>;
    [WithLatestFromEventListener_selector]: Function2<TA, TB, T>;
    [WithLatestFromEventListener_delegate]: EventListenerLike<T>;
  };

  function onWithLatestFromEventListenerOtherSubscriptionComplete(
    this: TProperties & DisposableLike,
  ) {
    if (!this[WithLatestFromEventListener_hasLatest]) {
      this[DisposableLike_dispose]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromEventListener_hasLatest] = true;
    this[WithLatestFromEventListener_otherLatest] = next;
  }

  return mixInstanceFactory(
    include(DelegatingDisposableMixin),
    function WithLatestFromEventListener(
      instance: Pick<EventListenerLike<TA>, typeof EventListenerLike_notify> &
        TProperties,
      delegate: EventListenerLike<T>,
      other: EventSourceLike<TB>,
      selector: Function2<TA, TB, T>,
    ): EventListenerLike<TA> {
      init(DelegatingDisposableMixin, instance, delegate);

      instance[WithLatestFromEventListener_selector] = selector;
      instance[WithLatestFromEventListener_delegate] = delegate;

      pipe(
        other,
        EventSource_addEventHandler(bind(onOtherNotify, instance)),
        Disposable.addTo(instance),
        DisposableContainer.onComplete(
          bind(
            onWithLatestFromEventListenerOtherSubscriptionComplete,
            instance,
          ),
        ),
      );

      return instance;
    },
    props<TProperties>({
      [WithLatestFromEventListener_hasLatest]: false,
      [WithLatestFromEventListener_otherLatest]: none,
      [WithLatestFromEventListener_selector]: none,
      [WithLatestFromEventListener_delegate]: none,
    }),
    {
      [EventListenerLike_notify](
        this: TProperties & EventListenerLike<TA>,
        next: TA,
      ) {
        if (
          !this[DisposableLike_isDisposed] &&
          this[WithLatestFromEventListener_hasLatest]
        ) {
          const result = this[WithLatestFromEventListener_selector](
            next,
            this[WithLatestFromEventListener_otherLatest] as TB,
          );
          this[WithLatestFromEventListener_delegate][EventListenerLike_notify](
            result,
          );
        }
      },
    },
  );
})();

const EventSource_withLatestFrom: EventSource.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: EventSourceLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    createWithLatestFromEventListener,
    partial(other, selector),
    EventSource_lift,
  )) as EventSource.Signature["withLatestFrom"];

export default EventSource_withLatestFrom;
