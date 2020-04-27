import { compose } from "../../functions";
import { ObservableLike } from "./interfaces";
import { switchMap } from "./switchAll";
import { takeFirst } from "./takeFirst";

export const await_ = <TA, TB>(mapper: (a: TA) => ObservableLike<TB>) =>
  compose(takeFirst<TA>(), switchMap(mapper));
