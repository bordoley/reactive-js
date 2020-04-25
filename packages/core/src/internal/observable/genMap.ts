import { compose } from "../../pipe";
import { ObservableOperator } from "./interfaces";

import { map } from "./map";
import { fromIterator } from "./fromIterable";
import { concatMap } from "./mergeAll";

const concatMapper = <T, TReturn, TNext>(iter: Generator<T, TReturn, TNext>) =>
  fromIterator(() => iter);

export const genMap = <TA, TB, TReturn = any, TNext = unknown>(
  mapper: (v: TA) => Generator<TB, TReturn, TNext>,
): ObservableOperator<TA, TB> =>
  compose(
    map<TA, Generator<TB, TReturn, TNext>>(mapper),
    concatMap(concatMapper),
  );
