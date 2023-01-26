import { ContainerOf, ContainerOperator } from "../../../containers";
import { Factory, SideEffect1, pipe } from "../../../functions";
import {
  AsyncReducer,
  ObservableLike,
  ObserverLike,
  ScanAsync,
} from "../../../rx";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Observable_forEach from "../Observable/Observable.forEach";
import Observable_onSubscribe from "../Observable/Observable.onSubscribe";
import Observable_switchAll from "../Observable/Observable.switchAll";
import Observable_takeFirst from "../Observable/Observable.takeFirst";
import Observable_zipWithLatestFrom from "../Observable/Observable.zipWithLatestFrom";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import Subject_create from "../Subject/Subject.create";
import Subject_publish from "../Subject/Subject.publish";
import Subject_publishTo from "../Subject/Subject.publishTo";

const HigherOrderObservable_scanAsync = <
  C extends ObservableLike,
  CInner extends ObservableLike,
>(
  createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
): ScanAsync<C, CInner>["scanAsync"] => {
  return <T, TAcc>(
      scanner: AsyncReducer<CInner, T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ContainerOperator<C, T, TAcc> =>
    observable => {
      const onSink = (observer: ObserverLike<TAcc>) => {
        const accFeedbackStream = pipe(
          Subject_create(),
          Disposable_addTo(observer),
        );

        pipe(
          observable,
          Observable_zipWithLatestFrom(accFeedbackStream, (next, acc: TAcc) =>
            pipe(scanner(acc, next), Observable_takeFirst()),
          ),
          Observable_switchAll(),
          Observable_forEach(Subject_publishTo(accFeedbackStream)),
          Observable_onSubscribe(() =>
            pipe(accFeedbackStream, Subject_publish(initialValue())),
          ),
          ReactiveContainer_sinkInto(observer),
        );
      };

      return createObservable(onSink);
    };
};

export default HigherOrderObservable_scanAsync;
