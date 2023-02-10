import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  Function1,
  error,
  isSome,
  none,
  pipe,
  returns,
} from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto";

const Sink_catchErrorMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>() => Mixin2<SinkLike<T>, SinkLike<T>, Function1<unknown, C | void>> =
  /*@__PURE__*/ (<
    C extends ReactiveContainerLike<TSink>,
    TSink extends SinkLike<T>,
    T,
  >() => {
    return returns(
      mix(
        include(Disposable_mixin, delegatingMixin()),
        function CatchErrorSinkMixin(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify>,
          delegate: SinkLike<T>,
          errorHandler: Function1<unknown, C | void>,
        ): SinkLike<T> {
          init(Disposable_mixin, instance);
          init(delegatingMixin(), instance, delegate);

          pipe(
            instance,
            Disposable_addToIgnoringChildErrors(delegate),
            Disposable_onComplete(() => {
              pipe(delegate, Disposable_dispose());
            }),
            Disposable_onError((err: Error) => {
              try {
                const result = errorHandler(err) || none;
                if (isSome(result)) {
                  pipe(result, ReactiveContainer_sinkInto(delegate));
                } else {
                  pipe(delegate, Disposable_dispose());
                }
              } catch (e) {
                pipe(delegate, Disposable_dispose(error([e, err])));
              }
            }),
          );

          return instance;
        },
        props({}),
        {
          [SinkLike_notify](this: DelegatingLike<SinkLike<T>>, next: T) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          },
        },
      ),
    );
  })();

export default Sink_catchErrorMixin;
