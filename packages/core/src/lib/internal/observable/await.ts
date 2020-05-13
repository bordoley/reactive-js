import { compose, Function } from "../../functions";
import { ObservableLike } from "./interfaces";
import { switchMap } from "./switchAll";
import { takeFirst } from "./takeFirst";

export const await_ = <TA, TB>(mapper: Function<TA, ObservableLike<TB>>) =>
  compose(takeFirst<TA>(), switchMap(mapper), takeFirst());
