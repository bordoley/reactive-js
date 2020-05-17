import { compose, Function1 } from "../../functions.ts";
import { ObservableLike, ObservableOperator } from "./interfaces.ts";
import { switchMap } from "./switchAll.ts";
import { takeFirst } from "./takeFirst.ts";

export const await_ = <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>): ObservableOperator<TA, TB> =>
  compose(takeFirst<TA>(), switchMap(mapper), takeFirst());
