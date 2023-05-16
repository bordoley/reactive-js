import type * as Enumerator from "../../Enumerator.js";
import { Factory } from "../../functions.js";

const Enumerator_fromEnumeratorFactory: Enumerator.Signature["fromEnumeratorFactory"] =

    <T>() =>
    (f: Factory<T>) =>
      f();

export default Enumerator_fromEnumeratorFactory;
