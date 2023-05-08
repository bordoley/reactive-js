import {
  Containers,
  EventListenerLike_notify,
  ObservableContainer,
  ObservableLike_observe,
  ObserverLike,
  ReactiveContainers,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import {
  Factory,
  Function2,
  SideEffect1,
  bindMethod,
  compose,
  invoke,
  pipe,
} from "../../../functions.js";
import Observable_concatAll from "../../Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_forkMerge from "../../Observable/__internal__/Observable.forkMerge.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

const HigherOrderObservable_scanMany =
  <C extends ObservableContainer>(
    createObservable: <T>(
      f: SideEffect1<ObserverLike<T>>,
    ) => Containers.Of<C, T>,
  ): ReactiveContainers.TypeClass<C>["scanMany"] =>
  <T, TAcc>(
    scanner: Function2<TAcc, T, Containers.Of<C, TAcc>>,
    initialValue: Factory<TAcc>,
  ): Containers.Operator<C, T, TAcc> =>
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
        Observable_forkMerge<Containers.Of<ObservableContainer, TAcc>, TAcc>(
          compose(
            Observable_concatMap(Observable_takeLast<C, TAcc>()),
            Observable_forEach<ObservableContainer, TAcc>(
              bindMethod(accFeedbackStream, EventListenerLike_notify),
            ),
            Observable_ignoreElements<ObservableContainer, TAcc>(),
          ),
          Observable_concatAll<TAcc>(),
        ),
        invoke(ObservableLike_observe, observer),
      );

      accFeedbackStream[EventListenerLike_notify](initialValue());
    });

export default HigherOrderObservable_scanMany;
