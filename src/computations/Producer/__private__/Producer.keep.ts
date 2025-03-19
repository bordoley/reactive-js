import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Keep from "../../__internal__/operators/Keep.js";
import Producer_lift from "./Producer.lift.js";

const Producer_keep: Producer.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(Keep.createConsumer, partial(predicate), Producer_lift<T, T>());

export default Producer_keep;
