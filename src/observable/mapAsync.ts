import { Function1 } from "../functions";
import { ObservableOperator } from "../observable";
import { fromPromise } from "./fromPromise";
import { switchAllT } from "./switchAll";
import { mapT } from "./map";
import { concatMap } from "../container";

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) => fromPromise(() => f(a)));
