import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, ObserverLike } from "../../../concurrent.js";
import { SinkLike, SinkLike_notify } from "../../../events.js";
import { Optional, none, partial, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const BufferObserver_delegate = Symbol("BufferObserver_delegate");
const BufferObserver_buffer = Symbol("BufferObserver_buffer");
const BufferObserver_count = Symbol("BufferingLike_count");

interface TProps<T> {
  [BufferObserver_delegate]: SinkLike<readonly T[]>;
  [BufferObserver_buffer]: T[];
  [BufferObserver_count]: number;
}

const Observer_createBufferObserver: <T>(
  delegate: ObserverLike<readonly T[]>,
  count: Optional<number>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DisposableMixin, ObserverMixin()),
        function BufferObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> & TProps<T>,
          delegate: ObserverLike<readonly T[]>,
          count?: number,
        ): ObserverLike<T> {
          init(DisposableMixin, instance, delegate);
          init(ObserverMixin(), instance, delegate, delegate);

          instance[BufferObserver_delegate] = delegate;
          instance[BufferObserver_count] = clampPositiveNonZeroInteger(
            count ?? MAX_SAFE_INTEGER,
          );
          instance[BufferObserver_buffer] = [];

          pipe(
            instance,
            Disposable.addTo(delegate),
            Disposable.onComplete(() => {
              const { [BufferObserver_buffer]: buffer } = instance;
              instance[BufferObserver_buffer] = [];

              if (buffer.length > 0) {
                delegate[QueueableLike_enqueue](buffer);
                delegate[DispatcherLike_complete]();
              } else {
                delegate[DisposableLike_dispose]();
              }
            }),
          );

          return instance;
        },
        props<TProps<T>>({
          [BufferObserver_delegate]: none,
          [BufferObserver_buffer]: none,
          [BufferObserver_count]: 0,
        }),
        {
          [SinkLike_notify](this: TProps<T> & SinkLike<T>, next: T) {
            const {
              [BufferObserver_buffer]: buffer,
              [BufferObserver_count]: count,
            } = this;

            buffer.push(next);

            if (buffer.length === count) {
              const buffer = this[BufferObserver_buffer];
              this[BufferObserver_buffer] = [];

              this[BufferObserver_delegate][SinkLike_notify](buffer);
            }
          },
        },
      ),
    ),
  ))();

const Observable_buffer: Observable.Signature["buffer"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    Observer_createBufferObserver<T>,
    partial(options?.count),
    Observable_liftPure,
  );

export default Observable_buffer;
