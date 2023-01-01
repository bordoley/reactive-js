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
import {
  getObserverCount,
  getReplay,
} from "../../../rx/MulticastObservableLike";
import { sinkInto } from "../../../rx/ReactiveContainerLike";
import { create as createSubject, publish } from "../../../rx/SubjectLike";
import ObservableLike__multicast from "../../../rx/__internal__/ObservableLike/ObservableLike.multicast";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../../scheduling";
import { StreamLike } from "../../../streaming";
import add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";

const StreamLike__mixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T>,
  ContainerOperator<ObservableLike, TReq, T>,
  SchedulerLike,
  number
> = /*@__PURE__*/ (<TReq, T>() => {
  type TProperties = {
    readonly subject: SubjectLike<TReq>;
    readonly observable: MulticastObservableLike<T>;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
  };

  return returns(
    mix(
      include(DisposableLike__delegatingMixin),
      function Stream(
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
        const subject = createSubject({ replay });

        init(DisposableLike__delegatingMixin, instance, subject);

        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;

        instance.observable = pipe(
          subject,
          op,
          ObservableLike__multicast<T>(scheduler, { replay }),
          add(instance),
        );

        return instance;
      },
      props<TProperties>({
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
      }),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<TProperties>(this);
          return getObserverCount(this.observable);
        },

        get [MulticastObservableLike_replay](): number {
          unsafeCast<TProperties>(this);
          return getReplay(this.observable);
        },

        [ObservableLike_isEnumerable]: false,

        [ObservableLike_isRunnable]: false,

        [DispatcherLike_dispatch](this: TProperties, req: TReq) {
          pipe(this.subject, publish(req));
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<T>,
        ) {
          pipe(this.observable, sinkInto(observer));
        },
      },
    ),
  );
})();

export default StreamLike__mixin;
