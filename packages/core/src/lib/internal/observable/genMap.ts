import { compose, returns, Function } from "../../functions";
import { fromIterator } from "./fromIterable";
import { ObservableFunction } from "./interfaces";
import { map } from "./map";
import { concatMap } from "./mergeAll";

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: Function<TA, Generator<TB, TReturn, TNext>>,
): ObservableFunction<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(compose(returns, fromIterator())),
  );
