import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Factory, compose } from "../../functions.js";
import EnumeratorFactory_fromValue from "./EnumeratorFactory.fromValue.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";

const EnumeratorFactory_fromFactory: EnumeratorFactory.Signature["fromFactory"] =
  <T>() =>
    compose(
      EnumeratorFactory_fromValue<Factory<T>>(),
      EnumeratorFactory_map((f: Factory<T>) => f()),
    );

export default EnumeratorFactory_fromFactory;
