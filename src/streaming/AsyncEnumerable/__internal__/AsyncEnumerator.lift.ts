import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";

import { ContainerOperator } from "../../../containers.js";
import { none, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamLike_scheduler } from "../../../streaming.js";
import { BufferLike_capacity, DisposableLike } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Dispatcher_delegatingMixin from "../../../util/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const AsyncEnumerator_lift: <TA, TB>(
  op: ContainerOperator<ObservableLike, TA, TB>,
) => (
  stream: StreamLike<void, TA> & DisposableLike,
) => StreamLike<void, TB> & DisposableLike = /*@__PURE__*/ (<TA, TB>() => {
  const createLiftedAsyncEnumerator = createInstanceFactory(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<TB>(),
        Disposable_delegatingMixin,
      ),
      function AsyncEnumerator(
        instance: {
          [StreamLike_scheduler]: SchedulerLike;
        },
        delegate: StreamLike<void, TA> & DisposableLike,
        operator: ContainerOperator<ObservableLike, TA, TB>,
      ): StreamLike<void, TB> {
        const observable = pipe(
          delegate,
          operator,
          Observable_multicast(delegate[StreamLike_scheduler], {
            capacity: delegate[BufferLike_capacity],
          }),
          Disposable_addIgnoringChildErrors(delegate),
        );

        init(Disposable_delegatingMixin, instance, observable);
        init(MulticastObservable_delegatingMixin<TB>(), instance, observable);
        init(Dispatcher_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        instance[StreamLike_scheduler] = delegate[StreamLike_scheduler];

        return instance;
      },
      props<{
        [StreamLike_scheduler]: SchedulerLike;
      }>({
        [StreamLike_scheduler]: none,
      }),
      {},
    ),
  );

  return (op: ContainerOperator<ObservableLike, TA, TB>) =>
    (stream: StreamLike<void, TA> & DisposableLike): StreamLike<void, TB> =>
      createLiftedAsyncEnumerator(stream, op);
})() as <TA, TB>(
  op: ContainerOperator<ObservableLike, TA, TB>,
) => (
  stream: StreamLike<void, TA> & DisposableLike,
) => StreamLike<void, TB> & DisposableLike;

export default AsyncEnumerator_lift;
