import { Factory, partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as ThrowIfEmpty from "../../__internal__/operators/ThrowIfEmpty.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_throwIfEmpty: Runnable.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) => pipe(ThrowIfEmpty.createSink<T>, partial(factory), Runnable_lift<T, T>());
export default Runnable_throwIfEmpty;
