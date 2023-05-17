import type * as DeferredObservable from "../../DeferredObservable.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import MulticastObservable_concatAll from "../../MulticastObservable/__internal__/MulticastObservable.concatAll.js";
import MulticastObservable_concatMap from "../../MulticastObservable/__internal__/MulticastObservable.concatMap.js";
import type * as Observable from "../../Observable.js";
import Publisher_create from "../../Observable/__internal__/Observable.createPublisher.js";
import {
  Factory,
  Function2,
  SideEffect1,
  bindMethod,
  compose,
  invoke,
  pipe,
} from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import {
  ContainerOf,
  ContainerOperator,
  ObservableLike_observe,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_forkMerge from "./Observable.forkMerge.js";
import Observable_ignoreElements from "./Observable.ignoreElements.js";
import Observable_takeLast from "./Observable.takeLast.js";
import Observable_zipWithLatestFrom from "./Observable.zipWithLatestFrom.js";

const HigherOrderObservable_scanMany =
  <C extends Observable.Type, CInner extends DeferredObservable.Type>(
    createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
  ): HigherOrderObservableBaseTypeClass<C, CInner>["scanMany"] =>
  <T, TAcc>(
    scanner: Function2<TAcc, T, ContainerOf<CInner, TAcc>>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
  observable =>
    createObservable((observer: ObserverLike<TAcc>) => {
      const accFeedbackStream = pipe(
        Publisher_create(),
        Disposable_addTo(observer),
      );

      pipe(
        observable,
        Observable_zipWithLatestFrom(accFeedbackStream, (next, acc: TAcc) =>
          scanner(acc, next),
        ),
        Observable_forkMerge(
          compose(
            MulticastObservable_concatMap(Observable_takeLast()),
            Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)),
            Observable_ignoreElements(),
          ),
          MulticastObservable_concatAll<TAcc>(),
        ),
        invoke(ObservableLike_observe, observer),
      );

      accFeedbackStream[SinkLike_notify](initialValue());
    });

export default HigherOrderObservable_scanMany;
