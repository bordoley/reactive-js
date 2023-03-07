import { SequenceLike } from "../../../containers.js";
import { Function1, Optional, compose } from "../../../functions.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Optional_toReadonlyArray from "./Optional_toReadonlyArray.js";

const Optional_toSequence = <T>(): Function1<Optional<T>, SequenceLike<T>> =>
  compose(Optional_toReadonlyArray(), ReadonlyArray_toSequence());

export default Optional_toSequence;
