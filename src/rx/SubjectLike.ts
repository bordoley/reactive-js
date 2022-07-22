import {
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import { createObjectFactory } from "../__internal__/util/Object";
import { dispatch } from "../scheduling/DispatcherLike";
import {
  addIgnoringChildErrors,
  isDisposed,
  onDisposed,
} from "../util/DisposableLike";
import {
  Function1,
  SideEffect1,
  getLength,
  max,
  newInstance,
  pipe,
} from "../util/functions";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  getReplay,
} from "./MulticastObservableLike";
import {
  DefaultObservable,
  ObservableLike_observableType,
} from "./ObservableLike";
import { ObserverLike, getDispatcher } from "./ObserverLike";
import { ReactiveContainerLike_sinkInto } from "./ReactiveContainerLike";

export const SubjectLike_publish = Symbol("SubjectLike_publish");
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
  [SubjectLike_publish](next: T): void;
}

export const publish =
  <T>(v: T): Function1<SubjectLike<T>, SubjectLike<T>> =>
  subject => {
    subject[SubjectLike_publish](v);
    return subject;
  };

export const publishTo =
  <T>(subject: SubjectLike<T>): SideEffect1<T> =>
  v => {
    subject[SubjectLike_publish](v);
    return v;
  };

const properties: typeof disposableProperties & {
  [MulticastObservableLike_replay]: number;
  observers: Set<ObserverLike<unknown>>;
  replayed: unknown[];
} = {
  ...disposableProperties,
  [MulticastObservableLike_replay]: 0,
  observers: newInstance<Set<ObserverLike<unknown>>>(Set),
  replayed: [],
};

const prototype = {
  ...disposablePrototype,

  [ObservableLike_observableType]: 0 as typeof DefaultObservable,

  get [MulticastObservableLike_observerCount]() {
    const self = this as unknown as typeof properties;
    return self.observers.size;
  },

  [SubjectLike_publish]<T>(this: typeof properties, next: T) {
    if (!isDisposed(this)) {
      const { replayed } = this;

      const replay = getReplay(this);

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

    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    for (const next of this.replayed) {
      pipe(observer, getDispatcher, dispatch(next));
    }

    pipe(this, addIgnoringChildErrors(getDispatcher(observer)));
  },
};

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);

export const create = <T>(options?: { replay?: number }): SubjectLike<T> => {
  const { replay: replayOption = 0 } = options ?? {};
  const replay = max(replayOption, 0);

  const instance = createInstance();
  disposableInit(instance);
  instance[MulticastObservableLike_replay] = replay;
  return instance;
};
