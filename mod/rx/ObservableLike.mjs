/// <reference types="./ObservableLike.d.ts" />
import { reactive, createMapOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { observerMixin } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { mapSinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { pipeUnsafe, newInstance, pipe } from '../functions.mjs';
import { ObservableLike_observableType, ReactiveContainerLike_sinkInto } from '../rx.mjs';
import { ObserverLike_scheduler } from '../scheduling.mjs';
import { sourceFrom } from './ReactiveContainerLike.mjs';

const getObservableType = (obs) => obs[ObservableLike_observableType];
const lift = /*@__PURE__*/ (() => {
    class LiftedObservable {
        constructor(source, operators, observableType) {
            this.source = source;
            this.operators = operators;
            this[ObservableLike_observableType] = observableType;
        }
        [ReactiveContainerLike_sinkInto](observer) {
            pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
        }
    }
    return (operator) => source => {
        const sourceSource = source instanceof LiftedObservable ? source.source : source;
        const allFunctions = source instanceof LiftedObservable
            ? [operator, ...source.operators]
            : [operator];
        return newInstance(LiftedObservable, sourceSource, allFunctions, 0);
    };
})();
const liftT = {
    lift,
    variance: reactive,
};
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe({
        [Object_properties]: {},
        [Object_init](delegate, mapper) {
            init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
            init(typedMapSinkMixin, this, delegate, mapper);
        },
    }, mixWith(typedObserverMixin, typedMapSinkMixin), createObjectFactory(), createMapOperator(liftT));
})();
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
/*
export const toPromise: ToPromise<ObservableLike, { scheduler: SchedulerLike}> =
  <T>(options?: Option<{ scheduler: SchedulerLike}>): Function1<ObservableLike<T>, Promise<T>> =>
  observable =>
    newInstance<
      Promise<T>,
      (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise, (resolve, reject) => {
      let result: Option<T> = none;
      let hasResult = false;

      pipe(
        observable,
        onNotify(next => {
          hasResult = true;
          result = next;
        }),
        subscribe(scheduler),
        onDisposed(err => {
          if (isSome(err)) {
            const { cause } = err;
            reject(cause);
          } else if (!hasResult) {
            reject(
              newInstance(
                Error,
                "Observable completed without producing a value",
              ),
            );
          } else {
            resolve(result as T);
          }
        }),
      );
    });*/

export { getObservableType, map };
