import {
  Mixin1,
  include,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  FlowControllerQueueLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";

export const SinkMixinLike_doNotify = Symbol("SinkMixinLike_doNotify");
export const SinkMixinLike_doComplete = Symbol("SinkMixinLike_doComplete");
export const SinkMixinLike_delegate = Symbol("SinkMixinLike_delegate");
export const SinkMixinLike_isCompleted = Symbol("SinkMixinLike_isCompleted");

export interface SinkMixinLike<TSink extends SinkLike, T> {
  readonly [SinkMixinLike_delegate]: TSink;
  [SinkMixinLike_isCompleted]: boolean;

  [SinkMixinLike_doNotify](next: T): void;
  [SinkMixinLike_doComplete](): void;
}

type TReturn<TSink extends SinkLike, T> = SinkMixinLike<TSink, T> &
  Omit<SinkLike<T>, keyof DisposableLike>;

type TPrototype<TSink extends SinkLike, T> = Omit<
  SinkLike<T> & SinkMixinLike<TSink, T>,
  | keyof DisposableLike
  | typeof SinkMixinLike_delegate
  | typeof SinkMixinLike_isCompleted
>;

const SinkMixin: <TSink extends SinkLike<T>, T>() => Mixin1<
  TReturn<TSink, T>,
  TSink,
  TPrototype<TSink, T>,
  DisposableLike
> = /*@__PURE__*/ (<TSink extends SinkLike<T>, T>() => {
  function onSinkDisposed(this: TProperties) {
    this[SinkMixinLike_isCompleted] = true;
  }

  type TProperties = {
    [SinkMixinLike_isCompleted]: boolean;
    [SinkMixinLike_delegate]: TSink;
  };

  type TThis = TProperties &
    SinkLike<T> &
    FlowControllerQueueLike<T> &
    SinkMixinLike<TSink, T>;

  return returns(
    mix<
      TReturn<TSink, T>,
      ReturnType<typeof FlowControllerQueueMixin>,
      TProperties,
      TPrototype<TSink, T>,
      DisposableLike,
      TSink
    >(
      include(FlowControllerQueueMixin()),
      function SinkMixin(
        this: TProperties & TPrototype<TSink, T> & DisposableLike,
        sink: TSink,
      ): TReturn<TSink, T> {
        this[SinkMixinLike_delegate] = sink;

        pipe(this, DisposableContainer.onDisposed(onSinkDisposed));

        return this;
      },
      props<TProperties>({
        [SinkMixinLike_isCompleted]: false,
        [SinkMixinLike_delegate]: none,
      }),
      proto<TPrototype<TSink, T>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return (
            this[SinkMixinLike_isCompleted] ||
            this[SinkMixinLike_delegate][SinkLike_isCompleted]
          );
        },

        [EventListenerLike_notify](this: TThis, next: T) {
          this[SinkMixinLike_doNotify](next);
        },

        [SinkLike_complete](this: TThis) {
          const isCompleted = this[SinkMixinLike_isCompleted];
          this[SinkMixinLike_isCompleted] = true;

          if (isCompleted) {
            this[SinkMixinLike_doComplete]();
          }
        },

        [SinkMixinLike_doNotify](this: TThis, next: T) {
          this[SinkMixinLike_delegate][EventListenerLike_notify](next);
        },

        [SinkMixinLike_doComplete](this: TThis) {
          this[SinkMixinLike_delegate][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default SinkMixin;
