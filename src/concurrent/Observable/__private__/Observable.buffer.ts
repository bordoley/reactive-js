import {
  Array_length,
  Array_push,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DispatcherLike_complete,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import { Optional, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const BufferObserver_delegate = Symbol("BufferObserver_delegate");
const BufferObserver_buffer = Symbol("BufferObserver_buffer");
const BufferObserver_count = Symbol("BufferingLike_count");

interface TProps<T> {
  [BufferObserver_delegate]: ObserverLike<readonly T[]>;
  [BufferObserver_buffer]: T[];
  [BufferObserver_count]: number;
}

const createBufferObserver: <T>(
  delegate: ObserverLike<readonly T[]>,
  count: Optional<number>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DisposableMixin, ObserverMixin()),
        function BufferObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            TProps<T>,
          delegate: ObserverLike<readonly T[]>,
          count?: number,
        ): ObserverLike<T> {
          init(DisposableMixin, instance);
          init(ObserverMixin(), instance, delegate, delegate);

          instance[BufferObserver_delegate] = delegate;
          instance[BufferObserver_count] = clampPositiveNonZeroInteger(
            count ?? MAX_SAFE_INTEGER,
          );
          instance[BufferObserver_buffer] = [];

          pipe(
            instance,
            Disposable.addTo(delegate),
            DisposableContainer.onComplete(() => {
              const buffer = instance[BufferObserver_buffer];
              instance[BufferObserver_buffer] = [];

              if (buffer[Array_length] > 0) {
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
          [ObserverLike_notify](this: TProps<T> & ObserverLike<T>, next: T) {
            const buffer = this[BufferObserver_buffer];
            const count = this[BufferObserver_count];

            buffer[Array_push](next);

            if (buffer[Array_length] === count) {
              this[BufferObserver_buffer] = [];
              this[BufferObserver_delegate][ObserverLike_notify](buffer);
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
    createBufferObserver<T>,
    partial(options?.count),
    Observable_liftPureDeferred,
  );

export default Observable_buffer;
