import { EnumerableLike } from "../../../collections";
import { Factory, Function1, pipe, returns } from "../../../functions";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator";
import Enumerable_create from "./Enumerable.create";

const Enumerable_fromIteratorFactory: <T>() => Function1<
  Factory<Iterator<T>>,
  EnumerableLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns((f: Factory<Iterator<T>>) =>
    Enumerable_create(() => pipe(f(), Enumerator_fromIterator())),
  ))();

export default Enumerable_fromIteratorFactory;
