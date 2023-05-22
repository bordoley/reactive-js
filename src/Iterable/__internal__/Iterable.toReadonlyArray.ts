import { Function1 } from "../../functions.js";

const Iterable_toReadonlyArray: <T>() => Function1<Iterable<T>, readonly T[]> =
  <T>() =>
  (iterable: Iterable<T>) =>
    Array.from(iterable);

export default Iterable_toReadonlyArray;
