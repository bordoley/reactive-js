import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Observable_concatAll from "../../Observable/__internal__/Observable.concatAll.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
import {
  Container,
  ContainerTypeClass,
  ObservableContainer,
} from "../../containers.js";
import {
  Factory,
  Function2,
  SideEffect1,
  bindMethod,
  invoke,
  pipe,
} from "../../functions.js";
import {
  EventListenerLike_notify,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

const HigherOrderObservable_scanLast =
  <C extends ObservableContainer.Type>(
    createObservable: <T>(
      f: SideEffect1<ObserverLike<T>>,
    ) => Container.Of<C, T>,
  ): ContainerTypeClass<C>["scanLast"] =>
  <T, TAcc>(
    scanner: Function2<TAcc, T, Container.Of<C, TAcc>>,
    initialValue: Factory<TAcc>,
  ): Container.Operator<C, T, TAcc> =>
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
        Observable_forEach<ObservableContainer.Type, TAcc>(
          bindMethod(accFeedbackStream, EventListenerLike_notify),
        ),
        invoke(ObservableLike_observe, observer),
      );

      accFeedbackStream[EventListenerLike_notify](initialValue());
    });

export default HigherOrderObservable_scanLast;
