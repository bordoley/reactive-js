import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import ReadonlyArray_repeat from "../../ReadonlyArray/__internal__/ReadonlyArray.repeat.js";
import ReadonlyArray_toEnumeratorFactory from "../../ReadonlyArray/__internal__/ReadonlyArray.toEnumeratorFactory.js";
import { pipe } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_concatAll from "./EnumeratorFactory.concatAll.js";

const EnumeratorFactory_repeat: EnumeratorFactory.Signature["repeat"] =
  <T>(count: number) =>
  (factory: EnumeratorFactoryLike<T>) =>
    // FIXME: This is kind of an awful implmentation.
    pipe(
      [factory],
      ReadonlyArray_repeat(count),
      ReadonlyArray_toEnumeratorFactory(),
      EnumeratorFactory_concatAll(),
    );

export default EnumeratorFactory_repeat;
