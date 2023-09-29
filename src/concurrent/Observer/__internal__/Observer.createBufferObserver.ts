import {
  createInstanceFactory,
  mix,
  include,
  init,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObservableLike_observe } from "../../../concurrent.js";
import { pipe, invoke } from "../../../functions.js";
import BufferSinkMixin from "../../../rx/__mixins__/BufferSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createBufferObserver: <T>(
  delegate: ObserverLike<readonly T[]>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin(), BufferSinkMixin()),
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

        init(ObserverMixin(), instance, delegate, delegate);
        init(BufferSinkMixin<T>(), instance, delegate, count, onComplete);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(BufferSinkMixin<T>()),
    ),
  ))();

export default Observer_createBufferObserver;
