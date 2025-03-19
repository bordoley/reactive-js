import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as Keep from "../../__internal__/operators/Keep.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_keep: Runnable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(Keep.createSink<T>, partial(predicate), Runnable_lift<T, T>());

export default Runnable_keep;
