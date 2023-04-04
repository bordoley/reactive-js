import { ContainerOf, ContainerOperator } from "../../../containers.js";
import {
  Factory,
  Function2,
  SideEffect1,
  bindMethod,
  invoke,
  pipe,
} from "../../../functions.js";
import {
  EventListenerLike_notify,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ScanLast,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatAll from "../../Observable/__internal__/Observable.concatAll.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

const HigherOrderObservable_scanLast =
  <C extends ObservableLike, CInner extends ObservableLike>(
    createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
  ): ScanLast<C, CInner>["scanLast"] =>
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
          pipe(scanner(acc, next), Observable_takeLast()),
        ),
        Observable_concatAll(),
        Observable_forEach<ObservableLike, TAcc>(
          bindMethod(accFeedbackStream, EventListenerLike_notify),
        ),
        invoke(ObservableLike_observe, observer),
      );

      accFeedbackStream[EventListenerLike_notify](initialValue());
    });

export default HigherOrderObservable_scanLast;
