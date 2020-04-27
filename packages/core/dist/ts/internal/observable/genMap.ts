import { compose } from "../../pipe.ts";
import { ObservableOperator } from "./interfaces.ts";

import { map } from "./map.ts";
import { fromIterator } from "./fromIterable.ts";
import { concatMap } from "./mergeAll.ts";
import { returns } from "../../functions.ts";

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: (v: TA) => Generator<TB, TReturn, TNext>,
): ObservableOperator<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(compose(returns, fromIterator)),
  );
