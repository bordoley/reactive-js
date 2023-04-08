import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin, {
  TDelegatingMulticastObservableReturn,
} from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike, StreamLike_scheduler } from "../../../streaming.js";
import { BufferLike_capacity } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const AsyncEnumerator_create: <TA, TB>() => (
  stream: StreamLike<void, TA>,
  op: ContainerOperator<ObservableLike, TA, TB>,
) => StreamLike<void, TB> = /*@__PURE__*/ (<TA, TB>() =>
  pipe(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<TB>(),
        Disposable_delegatingMixin(),
      ),
      function AsyncEnumeratorDelegatingMixin(
        instance: Pick<StreamLike<void, TA>, typeof StreamLike_scheduler>,
        delegate: StreamLike<void, TA>,
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

        init(Disposable_delegatingMixin(), instance, observable);
        init(MulticastObservable_delegatingMixin<TB>(), instance, observable);
        init(Dispatcher_delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        get [StreamLike_scheduler]() {
          unsafeCast<
            TDelegatingMulticastObservableReturn<TA, StreamLike<void, TA>>
          >(this);
          return this[DelegatingMulticastObservableMixin_delegate][
            StreamLike_scheduler
          ];
        },
      },
    ),
    createInstanceFactory,
    returns,
  ) as <TA, TB>() => (
    stream: StreamLike<void, TA>,
    op: ContainerOperator<ObservableLike, TA, TB>,
  ) => StreamLike<void, TB>)();

export default AsyncEnumerator_create;
