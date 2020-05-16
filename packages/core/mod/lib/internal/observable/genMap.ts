import { compose, returns, Function1 } from "../../functions.ts";
import { fromIterator } from "./fromIterable.ts";
import { ObservableFunction } from "./interfaces.ts";
import { map } from "./map.ts";
import { concatMap } from "./mergeAll.ts";

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: Function1<TA, Generator<TB, TReturn, TNext>>,
): ObservableFunction<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(compose(returns, fromIterator())),
  );
