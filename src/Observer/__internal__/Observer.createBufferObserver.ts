import Observable_fromOptional from "../../Observable/__internal__/Observable.fromOptional.js";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createBufferObserver: <T>(
  delegate: ObserverLike<readonly T[]>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_mixin(), Sink_bufferMixin()),
      function BufferObserver(
        instance: unknown,
        delegate: ObserverLike<readonly T[]>,
        count: number,
      ): ObserverLike<T> {
        const onComplete = (buffer: readonly T[]) => {
          pipe(
            buffer,
            Observable_fromOptional(),
            invoke(ObservableLike_observe, delegate),
          );
        };

        init(Observer_mixin(), instance, delegate, delegate);
        init(Sink_bufferMixin<T>(), instance, delegate, count, onComplete);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_bufferMixin<T>()),
    ),
  ))();

export default Observer_createBufferObserver;
