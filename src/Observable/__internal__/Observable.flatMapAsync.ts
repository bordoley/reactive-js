import { Function2 } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";

const Observable_flatMapAsync = <TA, TB>(
  f: Function2<TA, AbortSignal, Promise<TB>>,
): Containers.Operator<ObservableContainer, TA, TB> =>
  Observable_concatMap((a: TA) =>
    Observable_fromAsyncFactory(abortSignal => f(a, abortSignal)),
  );

export default Observable_flatMapAsync;
