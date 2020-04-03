import { compose } from "@reactive-js/pipe";
import { ObservableLike } from "./interfaces";
import { map } from "./map";
import { switchAll } from "./switchAll";

export const await_ = <TA, TB>(mapper: (a: TA) => ObservableLike<TB>) =>
  compose(map(mapper), switchAll());
