import { ContainerOf, ContainerOperator } from "../../../containers";
import { Factory, SideEffect1, pipe } from "../../../functions";
import {
  AsyncReducer,
  ObservableLike,
  ObserverLike,
  ScanAsync,
} from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Observable$forEach from "../Observable/Observable.forEach";
import Observable$onSubscribe from "../Observable/Observable.onSubscribe";
import Observable$switchAll from "../Observable/Observable.switchAll";
import Observable$takeFirst from "../Observable/Observable.takeFirst";
import Observable$zipWithLatestFrom from "../Observable/Observable.zipWithLatestFrom";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import Subject$create from "../Subject/Subject.create";
import Subject$publish from "../Subject/Subject.publish";
import Subject$publishTo from "../Subject/Subject.publishTo";

const HigherOrderObservable$scanAsync = <
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
          Subject$create(),
          Disposable$addTo(observer),
        );

        pipe(
          observable,
          Observable$zipWithLatestFrom(accFeedbackStream, (next, acc: TAcc) =>
            pipe(scanner(acc, next), Observable$takeFirst()),
          ),
          Observable$switchAll(),
          Observable$forEach(Subject$publishTo(accFeedbackStream)),
          Observable$onSubscribe(() =>
            pipe(accFeedbackStream, Subject$publish(initialValue())),
          ),
          ReactiveContainer$sinkInto(observer),
        );
      };

      return createObservable(onSink);
    };
};

export default HigherOrderObservable$scanAsync;
