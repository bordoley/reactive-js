import { EnumerableLike } from "../../../collections.js";
import { Factory, Function1, pipe, returns } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_fromIteratorFactory: <T>() => Function1<
  Factory<Iterator<T>>,
  EnumerableLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns((f: Factory<Iterator<T>>) =>
    Enumerable_create(() => pipe(f(), Enumerator_fromIterator())),
  ))();

export default Enumerable_fromIteratorFactory;
