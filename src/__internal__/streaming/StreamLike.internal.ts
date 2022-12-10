import { ContainerOperator } from "../../containers";
import { none, pipe, returns, unsafeCast } from "../../functions";
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
} from "../../rx";
import { getObserverCount, getReplay } from "../../rx/MulticastObservableLike";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { create as createSubject, publish } from "../../rx/SubjectLike";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../scheduling";
import { StreamLike } from "../../streaming";
import add from "../../util/__internal__/DisposableLike/DisposableLike.add";
import {
  Mixin3,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../mixins";
import { multicast } from "../rx/ObservableLike.operators";
import { delegatingDisposableMixin } from "../util/DisposableLike.mixins";

export const streamMixin: <TReq, T>() => Mixin3<
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
    mixin(
      include(delegatingDisposableMixin),
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

        init(delegatingDisposableMixin, instance, subject);

        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;

        instance.observable = pipe(
          subject,
          op,
          multicast<T>(scheduler, { replay }),
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

export const createStream = /*@__PURE__*/ (() => {
  const createStreamInternal: <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    replay: number,
  ) => StreamLike<TReq, T> = createInstanceFactory(streamMixin());

  return <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, T> => {
    const { replay = 0 } = options ?? {};
    return createStreamInternal(
      op as ContainerOperator<ObservableLike, unknown, unknown>,
      scheduler,
      replay,
    );
  };
})();
