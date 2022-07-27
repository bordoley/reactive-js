import {
  Option,
  SideEffect,
  getLength,
  isEmpty,
  isNone,
  none,
  pipe,
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
  DisposableLike_error,
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
import { prototype as disposablePrototype } from "../util/Disposable";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  anyProperty,
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
  } & PropertyTypeOf<[typeof disposablePrototype]>;

  return pipe(
    {
      [Object_properties]: {
        continuation: anyProperty,
        nextQueue: anyProperty,
        observer: anyProperty,
        onContinuationDispose: anyProperty,
      },
      [Object_init](
        this: TProperties & DisposableLike,
        observer: ObserverLike<T>,
      ) {
        init(disposablePrototype, this);
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
            pipe(this.observer, dispose(this[DisposableLike_error]));
          }
        };
      },
      get [DispatcherLike_scheduler]() {
        return getScheduler(this.observer);
      },
      [DispatcherLike_dispatch](this: TProperties, next: T) {
        if (!isDisposed(this)) {
          this.nextQueue.push(next);
          scheduleDrainQueue(this);
        }
      },
    },
    mixWith(disposablePrototype),
    createObjectFactory<
      DispatcherLike & TProperties,
      TProperties,
      ObserverLike<T>
    >(),
  );
})();

type TProperties = {
  [ObserverLike_scheduler]: SchedulerLike;
  dispatcher: Option<DispatcherLike>;
};

export const observerPrototype = {
  [Object_properties]: {
    [ObserverLike_scheduler]: anyProperty,
    dispatcher: none,
  },
  [Object_init](this: TProperties, scheduler: SchedulerLike) {
    this[ObserverLike_scheduler] = scheduler;
  },
  get [ObserverLike_dispatcher]() {
    const self = this as unknown as ObserverLike & TProperties;
    if (isNone(self.dispatcher)) {
      const dispatcher = pipe(
        createObserverDispatcher(self),
        addToIgnoringChildErrors(self),
        onDisposed(e => {
          if (isEmpty(dispatcher.nextQueue)) {
            pipe(self, dispose(e));
          }
        }),
      );

      self.dispatcher = dispatcher;
    }
    return self.dispatcher;
  },
};
