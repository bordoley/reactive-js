import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "../__internal__/util/Object";
import {
  Function1,
  SideEffect1,
  getLength,
  max,
  newInstance,
  pipe,
} from "../functions";
import {
  DefaultObservable,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike_observableType,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  SubjectLike,
  SubjectLike_publish,
} from "../rx";
import { dispatch } from "../scheduling/DispatcherLike";
import {
  addIgnoringChildErrors,
  isDisposed,
  onDisposed,
} from "../util/DisposableLike";
import { none } from "../util/Option";
import { getReplay } from "./MulticastObservableLike";
import { getDispatcher } from "./ObserverLike";

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

export const create = /*@__PURE__*/ (() => {
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

  const prototype = {
    ...disposablePrototype,

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
