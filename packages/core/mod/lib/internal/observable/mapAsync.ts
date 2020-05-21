import { Function1 } from "../../functions.ts";
import { fromPromise } from "./fromPromise.ts";
import { ObservableOperator } from "./interfaces.ts";
import { switchMap } from "./switchAll.ts";

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> => switchMap(a => fromPromise(() => f(a)));
