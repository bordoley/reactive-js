import { compose, returns, Operator } from "../../functions";
import { fromIterator } from "./fromIterable";
import { ObservableOperator } from "./interfaces";
import { map } from "./map";
import { concatMap } from "./mergeAll";

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: Operator<TA, Generator<TB, TReturn, TNext>>,
): ObservableOperator<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(compose(returns, fromIterator())),
  );
