import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import { Function1, returns } from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../utils.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin from "./__mixins__/DelegatingEventListenerMixin.js";

export interface EventListenerModule {
  toSink<T>(): Function1<EventListenerLike<T>, SinkLike<T>>;
}

export type Signature = EventListenerModule;

export const toSink: Signature["toSink"] = /*@__PURE__*/ (<T>() => {
  const createEventListenerSink = mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingEventListenerMixin()),
    function EventListenerSink(
      this: Pick<
        SinkLike<T>,
        typeof SinkLike_isCompleted | typeof SinkLike_complete
      >,
      listener: EventListenerLike<T>,
    ): SinkLike<T> {
      init(DelegatingDisposableMixin, this, listener);
      init(DelegatingEventListenerMixin(), this, listener);

      return this;
    },
    props(),
    proto({
      get [SinkLike_isCompleted](): boolean {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );

  return returns((sink: SinkLike<T>) => createEventListenerSink(sink));
})() as Signature["toSink"];
