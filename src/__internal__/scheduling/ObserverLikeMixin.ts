import {
  Option,
  SideEffect,
  getLength,
  isEmpty,
  isNone,
  none,
  pipe,
  returns,
} from "../../functions";
import {
  DispatcherLike,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  SchedulerLike,
} from "../../scheduling";
import { getScheduler } from "../../scheduling/ObserverLike";
import { __yield, schedule } from "../../scheduling/SchedulerLike";
import {
  DisposableLike,
  DisposableLike_exception,
  SinkLike_notify,
} from "../../util";
import {
  addTo,
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../../util/DisposableLike";
import { disposableMixin } from "../util/DisposableLikeMixins";
import {
  Object_init,
  Object_properties,
  Object_prototype,
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../util/Object";

const createObserverDispatcher = (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        getScheduler(observer),
        schedule(dispatcher.continuation),
        addTo(observer),
        onComplete(dispatcher.onContinuationDispose),
      );
    }
  };

  type TProperties = {
    continuation: SideEffect;
    nextQueue: T[];
    observer: ObserverLike<T>;
    onContinuationDispose: SideEffect;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return pipe(
    clazz(
      function ObserverDispatcher(
        this: TProperties & DisposableLike,
        observer: ObserverLike<T>,
      ) {
        init(disposableMixin, this);
        this.observer = observer;

        this.continuation = () => {
          const { nextQueue } = this;

          const { observer } = this;
          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            __yield();
          }
        };

        this.onContinuationDispose = () => {
          if (isDisposed(this)) {
            pipe(this.observer, dispose(this[DisposableLike_exception]));
          }
        };

        pipe(
          this,
          onDisposed(e => {
            if (isEmpty(this.nextQueue)) {
              pipe(this, dispose(e));
            }
          }),
        );
      },
      {
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
      },
      {
        get [DispatcherLike_scheduler]() {
          const self = this as unknown as TProperties;
          return getScheduler(self.observer);
        },
        [DispatcherLike_dispatch](this: TProperties, next: T) {
          if (!isDisposed(this)) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
          }
        },
      },
    ),
    mixWith(disposableMixin),
    createObjectFactory<DispatcherLike<T>, ObserverLike<T>>(),
  );
})();

type TProperties = {
  [ObserverLike_scheduler]: SchedulerLike;
  dispatcher: Option<DispatcherLike>;
};

export const observerMixin: <T>() => {
  [Object_init](this: TProperties, scheduler: SchedulerLike): void;
  [Object_properties]: TProperties;
  [Object_prototype]: {
    get [ObserverLike_dispatcher](): DispatcherLike<T>;
  };
} = /*@__PURE__*/ (<T>() => {
  return pipe(
    clazz(
      function ObserverMixin(this: TProperties, scheduler: SchedulerLike) {
        this[ObserverLike_scheduler] = scheduler;
      },
      {
        [ObserverLike_scheduler]: none as any,
        dispatcher: none,
      },
      {
        get [ObserverLike_dispatcher](): DispatcherLike<T> {
          const self = this as unknown as ObserverLike<T> & TProperties;
          if (isNone(self.dispatcher)) {
            const dispatcher = pipe(
              createObserverDispatcher(self),
              addToIgnoringChildErrors(self),
            );

            self.dispatcher = dispatcher;
          }
          return self.dispatcher;
        },
      },
    ),
    returns,
  );
})();
