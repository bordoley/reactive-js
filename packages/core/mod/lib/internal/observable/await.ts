import { compose, Function } from "../../functions.ts";
import { ObservableLike } from "./interfaces.ts";
import { switchMap } from "./switchAll.ts";
import { takeFirst } from "./takeFirst.ts";

export const await_ = <TA, TB>(mapper: Function<TA, ObservableLike<TB>>) =>
  compose(takeFirst<TA>(), switchMap(mapper), takeFirst());
