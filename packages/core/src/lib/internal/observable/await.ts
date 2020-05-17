import { compose, Function1 } from "../../functions";
import { ObservableLike, ObservableOperator } from "./interfaces";
import { switchMap } from "./switchAll";
import { takeFirst } from "./takeFirst";

export const await_ = <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>): ObservableOperator<TA, TB> =>
  compose(takeFirst<TA>(), switchMap(mapper), takeFirst());
