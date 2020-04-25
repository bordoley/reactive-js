import { compose } from "../../pipe.ts";
import { ObservableLike } from "./interfaces.ts";
import { switchMap } from "./switchAll.ts";
import { takeFirst } from "./takeFirst.ts";

export const await_ = <TA, TB>(mapper: (a: TA) => ObservableLike<TB>) =>
  compose(takeFirst<TA>(), switchMap(mapper));
