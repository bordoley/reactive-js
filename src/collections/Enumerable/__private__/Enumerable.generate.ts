import { Factory, Updater, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_fromIteratorFactory from "./Enumerable.fromIteratorFactory.js";

const Enumerable_generate: Enumerable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  pipe(function* () {
    let acc = initialValue();
    while (true) {
      acc = generator(acc);
      yield acc;
    }
  }, Enumerable_fromIteratorFactory());

export default Enumerable_generate;
