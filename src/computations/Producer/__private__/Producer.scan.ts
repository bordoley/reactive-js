import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Scan from "../../__internal__/operators/Scan.js";
import Producer_lift from "./Producer.lift.js";

const Producer_scan: Producer.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    Scan.createConsumer<T, TAcc>,
    partial(reducer, initialValue),
    Producer_lift<T, TAcc>(),
  );

export default Producer_scan;
