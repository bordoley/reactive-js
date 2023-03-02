import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator, Map } from "../../../containers.js";
import {
  Function1,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_map: Map<AsyncEnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const MapAsyncEnumerator_op = Symbol("MapAsyncEnumerator_op");

  type TProperties = {
    readonly [MapAsyncEnumerator_op]: ContainerOperator<ObservableLike, TA, TB>;
  };

  const createMapStream = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), Stream_delegatingMixin()),
      function KeepStream(
        instance: Pick<
          StreamLike<void, TB>,
          | typeof ObservableLike_observe
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: StreamLike<void, TA>,
        mapper: Function1<TA, TB>,
      ): StreamLike<void, TB> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);

        instance[MapAsyncEnumerator_op] = Observable_map(mapper);
        return instance;
      },
      props<TProperties>({
        [MapAsyncEnumerator_op]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<StreamLike<void, TA>>>(this);
          return MulticastObservable_getObserverCount(
            this[DelegatingLike_delegate],
          );
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<DelegatingLike<StreamLike<void, TA>>>(this);
          return MulticastObservable_getReplay(this[DelegatingLike_delegate]);
        },
        [ObservableLike_observe](
          this: TProperties & DelegatingLike<StreamLike<void, TA>>,
          observer: ObserverLike<TB>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            this[MapAsyncEnumerator_op],
            Observable_observeWith(observer),
          );
        },
      },
    ),
  );

  return ((mapper: Function1<TA, TB>) =>
    pipe(
      createMapStream,
      partial(mapper),
      AsyncEnumerable_lift,
    )) as Map<AsyncEnumerableLike>["map"];
})();

export default AsyncEnumerable_map;
