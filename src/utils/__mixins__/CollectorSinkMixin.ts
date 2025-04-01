import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import {
  EventListenerLike_notify,
  ObserverLike,
  SinkLike,
} from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DisposableMixin from "./DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";

export const CollectorSinkMixin: <T>() => Mixin1<SinkLike<T>, Array<T>> =
  /*@__PURE__*/ (<T>() => {
    const CollectObserver_buffer = Symbol("CollectObserver_buffer");
    const CollectObserver_count = Symbol("CollectObserver_count");

    type TProperties = {
      [CollectObserver_buffer]: T[];
      [CollectObserver_count]: number;
    };

    type TPrototype = Pick<ObserverLike<T>, typeof EventListenerLike_notify>;

    function onCollectObserverCompleted(this: TProperties) {
      const buffer = this[CollectObserver_buffer];
      const count = this[CollectObserver_count];
      buffer.length = count;
    }

    return returns(
      mix(
        include(DisposableMixin, DisposeOnCompleteSinkMixin()),
        function CollectorSinkMixin(
          this: TProperties & TPrototype,
          buffer: T[],
        ): SinkLike<T> {
          init(DisposableMixin, this);
          init(DisposeOnCompleteSinkMixin(), this);

          this[CollectObserver_buffer] = buffer;

          buffer.length = 0;

          pipe(
            this,
            DisposableContainer.onComplete(onCollectObserverCompleted),
          );

          return this;
        },
        props<TProperties>({
          [CollectObserver_buffer]: none,
          [CollectObserver_count]: 0,
        }),
        proto<TPrototype>({
          [EventListenerLike_notify](this: TProperties, next: T) {
            const buffer = this[CollectObserver_buffer];
            const bufferLength = buffer.length;
            const index = this[CollectObserver_count];

            if (index === bufferLength) {
              buffer.length = index === 0 ? 32 : index << 1;
            }

            buffer[index] = next;
            this[CollectObserver_count]++;
          },
        }),
      ),
    );
  })();
