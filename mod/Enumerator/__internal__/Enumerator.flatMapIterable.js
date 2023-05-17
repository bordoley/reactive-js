/// <reference types="./Enumerator.flatMapIterable.d.ts" />

import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { compose, pipe } from "../../functions.js";
import Enumerator_concatAll from "./Enumerator.concatAll.js";
import Enumerator_map from "./Enumerator.map.js";
const Enumerator_flatMapIterable = (selector) => (enumerator) => pipe(enumerator, Enumerator_map(compose(selector, Iterable_enumerate())), Enumerator_concatAll());
export default Enumerator_flatMapIterable;
