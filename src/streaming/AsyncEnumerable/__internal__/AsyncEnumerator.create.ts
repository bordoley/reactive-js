import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { pipe, returns } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike } from "../../../rx.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike } from "../../../streaming.js";
import { BufferLike_capacity } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";

const AsyncEnumerator_create: <TA, TB>() => (
  stream: StreamLike<void, TA>,
  op: ContainerOperator<ObservableLike, TA, TB>,
) => StreamLike<void, TB> = /*@__PURE__*/ (<TA, TB>() =>
  pipe(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<TB>(),
      ),
      function AsyncEnumeratorDelegatingMixin(
        instance: unknown,
        delegate: StreamLike<void, TA>,
        operator: ContainerOperator<ObservableLike, TA, TB>,
      ): StreamLike<void, TB> {
        const observable = pipe(
          delegate,
          operator,
          Observable_multicast(delegate[DispatcherLike_scheduler], {
            capacity: delegate[BufferLike_capacity],
          }),
          Disposable_add(delegate),
        );

        init(MulticastObservable_delegatingMixin<TB>(), instance, observable);
        init(Dispatcher_delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {},
    ),
    createInstanceFactory,
    returns,
  ) as <TA, TB>() => (
    stream: StreamLike<void, TA>,
    op: ContainerOperator<ObservableLike, TA, TB>,
  ) => StreamLike<void, TB>)();

export default AsyncEnumerator_create;
