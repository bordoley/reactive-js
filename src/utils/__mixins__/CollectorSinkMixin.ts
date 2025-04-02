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
    const CollectorSinkMixin_buffer = Symbol("CollectorSinkMixin_buffer");
    const CollectorSinkMixin_count = Symbol("CollectorSinkMixin_count");

    type TProperties = {
      [CollectorSinkMixin_buffer]: T[];
      [CollectorSinkMixin_count]: number;
    };

    type TPrototype = Pick<ObserverLike<T>, typeof EventListenerLike_notify>;

    function onCollectorSinkMixinCompleted(this: TProperties) {
      const buffer = this[CollectorSinkMixin_buffer];
      const count = this[CollectorSinkMixin_count];
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

          this[CollectorSinkMixin_buffer] = buffer;

          buffer.length = 0;

          pipe(
            this,
            DisposableContainer.onComplete(onCollectorSinkMixinCompleted),
          );

          return this;
        },
        props<TProperties>({
          [CollectorSinkMixin_buffer]: none,
          [CollectorSinkMixin_count]: 0,
        }),
        proto<TPrototype>({
          [EventListenerLike_notify](this: TProperties, next: T) {
            const buffer = this[CollectorSinkMixin_buffer];
            const bufferLength = buffer.length;
            const index = this[CollectorSinkMixin_count];

            if (index === bufferLength) {
              buffer.length = index === 0 ? 32 : index << 1;
            }

            buffer[index] = next;
            this[CollectorSinkMixin_count]++;
          },
        }),
      ),
    );
  })();
