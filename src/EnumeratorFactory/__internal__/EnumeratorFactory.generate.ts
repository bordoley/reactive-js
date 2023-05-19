import Enumerator_generate from "../../Enumerator/__internal__/Enumerator.generate.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Factory, Updater } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";

const EnumeratorFactory_generate: EnumeratorFactory.Signature["generate"] =
  <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): EnumeratorFactoryLike<T> =>
  () =>
    Enumerator_generate(generator, initialValue);

export default EnumeratorFactory_generate;
