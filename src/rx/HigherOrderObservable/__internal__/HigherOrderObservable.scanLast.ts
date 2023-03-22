import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Factory, Function2, SideEffect1, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ScanLast,
  SubjectLike_publish,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo.js";

const HigherOrderObservable_scanLast =
  <C extends ObservableLike, CInner extends ObservableLike>(
    createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
  ): ScanLast<C, CInner>["scanLast"] =>
  <T, TAcc>(
    scanner: Function2<TAcc, T, ContainerOf<CInner, TAcc>>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
  observable => {
    const onSubscribe = (observer: ObserverLike<TAcc>) => {
      const accFeedbackStream = pipe(
        Subject_create(),
        Disposable_addTo(observer),
      );

      pipe(
        observable,
        Observable_zipWithLatestFrom(accFeedbackStream, (next, acc: TAcc) =>
          pipe(scanner(acc, next), Observable_takeLast()),
        ),
        Observable_switchAll(),
        Observable_forEach<ObservableLike, TAcc>(
          Subject_publishTo(accFeedbackStream),
        ),
        Observable_observeWith(observer),
      );

      accFeedbackStream[SubjectLike_publish](initialValue());
    };

    return createObservable(onSubscribe);
  };

export default HigherOrderObservable_scanLast;
