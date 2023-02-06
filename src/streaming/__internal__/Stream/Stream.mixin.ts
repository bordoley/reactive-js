import {
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { none, pipe, returns, unsafeCast } from "../../../functions";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  SubjectLike,
} from "../../../rx";
import MulticastObservable_getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable_getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable_multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Subject_create from "../../../rx/__internal__/Subject/Subject.create";
import Subject_publish from "../../../rx/__internal__/Subject/Subject.publish";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../../scheduling";
import { StreamLike } from "../../../streaming";
import add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";

const Stream_mixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T>,
  ContainerOperator<ObservableLike, TReq, T>,
  SchedulerLike,
  number
> = /*@__PURE__*/ (<TReq, T>() => {
  const StreamMixin_subject = Symbol("StreamMixin_subject");
  const StreamMixin_observable = Symbol("StreamMixin_observable");

  type TProperties = {
    readonly [StreamMixin_subject]: SubjectLike<TReq>;
    readonly [StreamMixin_observable]: MulticastObservableLike<T>;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin()),
      function StreamMixin(
        instance: Pick<
          StreamLike<TReq, T>,
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
          | typeof DispatcherLike_dispatch
          | typeof ReactiveContainerLike_sinkInto
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, TReq, T>,
        scheduler: SchedulerLike,
        replay: number,
      ): StreamLike<TReq, T> {
        const subject = Subject_create({ replay });

        init(Disposable_delegatingMixin(), instance, subject);

        instance[DispatcherLike_scheduler] = scheduler;
        instance[StreamMixin_subject] = subject;

        instance[StreamMixin_observable] = pipe(
          subject,
          op,
          Observable_multicast<T>(scheduler, { replay }),
          add(instance),
        );

        return instance;
      },
      props<TProperties>({
        [StreamMixin_subject]: none,
        [StreamMixin_observable]: none,
        [DispatcherLike_scheduler]: none,
      }),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getObserverCount(
            this[StreamMixin_observable],
          );
        },

        get [MulticastObservableLike_replay](): number {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getReplay(this[StreamMixin_observable]);
        },

        [ObservableLike_isEnumerable]: false,

        [ObservableLike_isRunnable]: false,

        [DispatcherLike_dispatch](this: TProperties, req: TReq) {
          pipe(this[StreamMixin_subject], Subject_publish(req));
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<T>,
        ) {
          pipe(
            this[StreamMixin_observable],
            ReactiveContainer_sinkInto(observer),
          );
        },
      },
    ),
  );
})();

export default Stream_mixin;
