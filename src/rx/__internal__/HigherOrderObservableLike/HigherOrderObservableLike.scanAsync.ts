import { ContainerOf, ContainerOperator } from "../../../containers";
import { Factory, SideEffect1, pipe } from "../../../functions";
import {
  AsyncReducer,
  ObservableLike,
  ObserverLike,
  ScanAsync,
} from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import { publish, publishTo } from "../../SubjectLike";
import ObservableLike__forEach from "../ObservableLike/ObservableLike.forEach";
import ObservableLike__onSubscribe from "../ObservableLike/ObservableLike.onSubscribe";
import ObservableLike__switchAll from "../ObservableLike/ObservableLike.switchAll";
import ObservableLike__takeFirst from "../ObservableLike/ObservableLike.takeFirst";
import ObservableLike__zipWithLatestFrom from "../ObservableLike/ObservableLike.zipWithLatestFrom";
import ReactiveContainerLike__sinkInto from "../ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import SubjectLike__create from "../SubjectLike/SubjectLike.create";

const HigherOrderObservableLike__scanAsync = <
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
          SubjectLike__create(),
          DisposableLike__addTo(observer),
        );

        pipe(
          observable,
          ObservableLike__zipWithLatestFrom(
            accFeedbackStream,
            (next, acc: TAcc) =>
              pipe(scanner(acc, next), ObservableLike__takeFirst()),
          ),
          ObservableLike__switchAll(),
          ObservableLike__forEach(publishTo(accFeedbackStream)),
          ObservableLike__onSubscribe(() =>
            pipe(accFeedbackStream, publish(initialValue())),
          ),
          ReactiveContainerLike__sinkInto(observer),
        );
      };

      return createObservable(onSink);
    };
};

export default HigherOrderObservableLike__scanAsync;
