import { Factory, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as ThrowIfEmptySink from "../../__internal__/sinks/ThrowIfEmptySink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_throwIfEmpty: Runnable.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) =>
  pipe(
    ThrowIfEmptySink.create<SinkLike, T>,
    partial(factory),
    Runnable_lift<T, T>(),
  );
export default Runnable_throwIfEmpty;
