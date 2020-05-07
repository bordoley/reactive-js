import { compose, returns } from "../../functions.ts";
import { fromIterator } from "./fromIterable.ts";
import { ObservableOperator } from "./interfaces.ts";
import { map } from "./map.ts";
import { concatMap } from "./mergeAll.ts";

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: (v: TA) => Generator<TB, TReturn, TNext>,
): ObservableOperator<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(compose(returns, fromIterator)),
  );
