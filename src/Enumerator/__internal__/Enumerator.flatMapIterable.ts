import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { Function1, compose, pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatAll from "./Enumerator.concatAll.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_flatMapIterable =
  <TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
  (enumerator: EnumeratorLike<TA>) =>
    pipe(
      enumerator,
      Enumerator_map(compose(selector, Iterable_enumerate())),
      Enumerator_concatAll(),
    );

export default Enumerator_flatMapIterable;
