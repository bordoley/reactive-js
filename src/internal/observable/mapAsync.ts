import { Function1 } from "../../functions";
import { fromPromise } from "./fromPromise";
import { ObservableOperator } from "../../observable";
import { switchMap } from "./switchAll";

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> => switchMap(a => fromPromise(() => f(a)));
