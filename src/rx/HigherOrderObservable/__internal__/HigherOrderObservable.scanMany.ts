import { ContainerOf, ContainerOperator } from "../../../containers.js";
import {
  Factory,
  Function2,
  SideEffect1,
  bindMethod,
  compose,
  pipe,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  PublisherLike_publish,
  ScanMany,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatAll from "../../Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_forkMerge from "../../Observable/__internal__/Observable.forkMerge.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

const HigherOrderObservable_scanMany =
  <C extends ObservableLike, CInner extends ObservableLike>(
    createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
  ): ScanMany<C, CInner>["scanMany"] =>
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
        Observable_forkMerge<ContainerOf<ObservableLike, TAcc>, TAcc>(
          compose(
            Observable_concatMap(Observable_takeLast<CInner, TAcc>()),
            Observable_forEach<ObservableLike, TAcc>(
              bindMethod(accFeedbackStream, PublisherLike_publish),
            ),
            Observable_ignoreElements<ObservableLike, TAcc>(),
          ),
          Observable_concatAll<TAcc>(),
        ),
        Observable_observeWith(observer),
      );

      accFeedbackStream[PublisherLike_publish](initialValue());
    });

export default HigherOrderObservable_scanMany;
