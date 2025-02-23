import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import { bind, bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";

const Observable_concatMany: Observable.Signature["concatMany"] =
  /*@__PURE__*/ (<T>() => {
    const ConcatObserverCtx_delegate = Symbol("ConcatObserverCtx_delegate");
    const ConcatObserverCtx_observables = Symbol(
      "ConcatObserverCtx_observables",
    );
    const ConcatObserverCtx_nextIndex = Symbol("ConcatObserverCtx_nextIndex");

    type ConcatObserverCtx = {
      readonly [ConcatObserverCtx_delegate]: ObserverLike<T>;
      readonly [ConcatObserverCtx_observables]: readonly ObservableLike<T>[];
      [ConcatObserverCtx_nextIndex]: number;
    };

    function onConcatObserverComplete(this: ConcatObserverCtx) {
      const delegate = this[ConcatObserverCtx_delegate];
      const observables = this[ConcatObserverCtx_observables];
      const next = this[ConcatObserverCtx_nextIndex];
      if (next < observables[Array_length]) {
        this[ConcatObserverCtx_nextIndex]++;
        observables[next][ObservableLike_observe](createConcatObserver(this));
      } else {
        delegate[DisposableLike_dispose]();
      }
    }

    const createConcatObserver = (ctx: ConcatObserverCtx) => {
      const delegate = ctx[ConcatObserverCtx_delegate];
      return pipe(
        Observer_createWithDelegate(delegate),
        Disposable.addTo(delegate),
        DisposableContainer.onComplete(bind(onConcatObserverComplete, ctx)),
      );
    };

    const ConcatObservable_observables = Symbol("ConcatObservable_observables");

    type TProperties<T> = {
      [ObservableLike_isPure]: boolean;
      [ObservableLike_isRunnable]: boolean;
      [ConcatObservable_observables]: readonly ObservableLike<T>[];
    };

    const isConcatObservable = <T>(
      observable: ObservableLike<T>,
    ): observable is ObservableLike<T> & TProperties<T> =>
      isSome((observable as any)[ConcatObservable_observables]);

    const flattenObservables = <T>(
      observables: readonly ObservableLike<T>[],
    ): readonly ObservableLike<T>[] =>
      observables.some(isConcatObservable)
        ? observables.flatMap(observable =>
            isConcatObservable(observable)
              ? flattenObservables(observable[ConcatObservable_observables])
              : observable,
          )
        : observables;

    return mixInstanceFactory(
      function ConcatObservable(
        instance: TProperties<T> & ObservableLike<T>,
        observables: readonly ObservableLike<T>[],
      ): ObservableLike<T> {
        instance[ObservableLike_isPure] = Observable_allArePure(observables);
        instance[ObservableLike_isRunnable] =
          Observable_allAreRunnable(observables);
        instance[ConcatObservable_observables] =
          flattenObservables(observables);

        return instance;
      },
      props<TProperties<T>>({
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
        [ConcatObservable_observables]: none,
      }),
      {
        [ObservableLike_isDeferred]: true as const,

        [ObservableLike_observe](
          this: TProperties<T>,
          observer: ObserverLike<T>,
        ): void {
          const { [ConcatObservable_observables]: observables } = this;

          pipe(
            createConcatObserver({
              [ConcatObserverCtx_delegate]: observer,
              [ConcatObserverCtx_observables]: observables,
              [ConcatObserverCtx_nextIndex]: 1,
            }),
            bindMethod(observables[0], ObservableLike_observe),
          );
        },
      },
    );
  })() as Observable.Signature["concatMany"];

export default Observable_concatMany;
