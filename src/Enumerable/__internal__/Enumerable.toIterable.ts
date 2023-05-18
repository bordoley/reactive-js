import type * as Enumerable from "../../Enumerable.js";
import EnumeratorFactory_toIterable from "../../EnumeratorFactory/__internal__/EnumeratorFactory.toIterable.js";
import { compose } from "../../functions.js";
import Enumerable_toEnumeratorFactory from "./Enumerable.toEnumeratorFactory.js";

const Enumerable_toIterable: Enumerable.Signature["toIterable"] = <T>() =>
  compose(Enumerable_toEnumeratorFactory<T>(), EnumeratorFactory_toIterable());

export default Enumerable_toIterable;
