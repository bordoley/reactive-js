import { Function1 } from "../functions";
import { ObservableOperator } from "../observable";
import { fromPromise } from "./fromPromise";
import { switchMap } from "./switchAll";

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> => switchMap(a => fromPromise(() => f(a)));
