import { compose } from "../../pipe.ts";
import { ObservableOperator } from "./interfaces.ts";

import { map } from "./map.ts";
import { fromIterator } from "./fromIterable.ts";
import { concatMap } from "./mergeAll.ts";

const concatMapper = <T, TReturn, TNext>(iter: Generator<T, TReturn, TNext>) =>
  fromIterator(() => iter);

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: (v: TA) => Generator<TB, TReturn, TNext>,
): ObservableOperator<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(concatMapper),
  );
