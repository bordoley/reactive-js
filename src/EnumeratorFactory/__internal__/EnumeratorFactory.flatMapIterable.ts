import Enumerator_flatMapIterable from "../../Enumerator/__internal__/Enumerator.flatMapIterable.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Function1, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_flatMapIterable: EnumeratorFactory.Signature["flatMapIterable"] =
  <TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
    composeLazy(
      EnumeratorFactory_enumerate<TA>(),
      Enumerator_flatMapIterable(selector),
    );

export default EnumeratorFactory_flatMapIterable;
