import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "./__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
  mix,
} from "./__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "./containers";
import {
  Function1,
  getLength,
  max,
  newInstance,
  none,
  pipe,
} from "./functions";
import { ObserverLike } from "./scheduling";
import { dispatch } from "./scheduling/DispatcherLike";
import { getDispatcher } from "./scheduling/ObserverLike";
import { DisposableLike, SinkLike } from "./util";
import {
  addIgnoringChildErrors,
  isDisposed,
  onDisposed,
} from "./util/DisposableLike";

/** @ignore */
export const ReactiveContainerLike_sinkInto = Symbol(
  "ReactiveContainerLike_sinkInto",
);
export interface ReactiveContainerLike extends StatefulContainerLike {
  readonly TContainerOf?: this;
  readonly TStatefulContainerState?: SinkLike;

  [ReactiveContainerLike_sinkInto](
    sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>,
  ): void;
}

export interface RunnableLike<T = unknown> extends ReactiveContainerLike {
  readonly TStatefulContainerState?: SinkLike<this["T"]>;

  [ReactiveContainerLike_sinkInto](sink: SinkLike<T>): void;
}

export const DefaultObservable = 0;
export const RunnableObservable = 1;
export const EnumerableObservable = 2;

/** @ignore */
export const ObservableLike_observableType = Symbol(
  "ObservableLike_observableType",
);
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown> extends ReactiveContainerLike {
  readonly TStatefulContainerState?: ObserverLike<T>;

  readonly [ObservableLike_observableType]:
    | typeof EnumerableObservable
    | typeof RunnableObservable
    | typeof DefaultObservable;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_observableType]:
    | typeof RunnableObservable
    | typeof EnumerableObservable;
}

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  readonly [ObservableLike_observableType]: typeof EnumerableObservable;
}

/** @ignore */
export const MulticastObservableLike_observerCount = Symbol(
  "MulticastObservableLike_observerCount",
);

/** @ignore */
export const MulticastObservableLike_replay = Symbol(
  "MulticastObservableLike_replay",
);

export interface MulticastObservableLike<T = unknown>
  extends ObservableLike<T>,
    DisposableLike {
  /**
   * The number of observers currently observing.
   */
  readonly [MulticastObservableLike_observerCount]: number;
  readonly [MulticastObservableLike_replay]: number;
}

/** @ignore */
export const SubjectLike_publish = Symbol("SubjectLike_publish");
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
  [SubjectLike_publish](next: T): void;
}

export type CreateReactiveContainer<C extends ReactiveContainerLike> =
  Container<C> & {
    create<T>(
      onSink: (sink: StatefulContainerStateOf<C, T>) => void,
    ): ContainerOf<C, T>;
  };

export type Never<C extends ReactiveContainerLike> = Container<C> & {
  never<T>(): ContainerOf<C, T>;
};

export type ToRunnable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toRunnable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};

export const createSubject = /*@__PURE__*/ (() => {
  const properties: typeof disposableProperties & {
    [MulticastObservableLike_replay]: number;
    observers: Set<ObserverLike<unknown>>;
    replayed: unknown[];
  } = {
    ...disposableProperties,
    [MulticastObservableLike_replay]: 0,
    observers: none as unknown as Set<ObserverLike<unknown>>,
    replayed: none as unknown as Array<unknown>,
  };

  const prototype = mix(disposablePrototype, {
    [Object_init](this: typeof properties, replay: number) {
      init(disposablePrototype, this);
      this[MulticastObservableLike_replay] = replay;
      this.observers = newInstance<Set<ObserverLike<unknown>>>(Set);
      this.replayed = [];
    },

    [ObservableLike_observableType]: 0 as typeof DefaultObservable,

    get [MulticastObservableLike_observerCount]() {
      const self = this as unknown as typeof properties;
      return self.observers.size;
    },

    [SubjectLike_publish]<T>(this: typeof properties, next: T) {
      if (!isDisposed(this)) {
        const { replayed } = this;

        const replay = this[MulticastObservableLike_replay];

        if (replay > 0) {
          replayed.push(next);
          if (getLength(replayed) > replay) {
            replayed.shift();
          }
        }

        for (const observer of this.observers) {
          pipe(observer, getDispatcher, dispatch(next));
        }
      }
    },

    [ReactiveContainerLike_sinkInto]<T>(
      this: typeof properties & SubjectLike<T>,
      observer: ObserverLike<T>,
    ) {
      if (!isDisposed(this)) {
        const { observers } = this;
        observers.add(observer);

        pipe(
          observer,
          onDisposed(_ => {
            observers.delete(observer);
          }),
        );
      }

      const dispatcher = getDispatcher(observer);

      // The idea here is that an onSubscribe function may
      // call next from unscheduled sources such as event handlers.
      // So we marshall those events back to the scheduler.
      for (const next of this.replayed) {
        pipe(dispatcher, dispatch(next));
      }

      pipe(this, addIgnoringChildErrors(dispatcher));
    },
  });

  const createInstance = /*@__PURE__*/ createObjectFactory<
    typeof prototype,
    typeof properties,
    number
  >(prototype, properties);

  return <T>(options?: { replay?: number }): SubjectLike<T> => {
    const { replay: replayOption = 0 } = options ?? {};
    const replay = max(replayOption, 0);

    return createInstance(replay);
  };
})();
