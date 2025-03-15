import { Array_length } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { EventSourceLike } from "../../../computations.js";
import {
  Function1,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_merge from "./EventSource.merge.js";

const EventSourceModule = {
  merge: EventSource_merge,
};

const EventSource_forkMerge: EventSource.Signature["forkMerge"] = (<TA, TB>(
  ...args: Function1<EventSourceLike<TA>, EventSourceLike<TB>>[]
) => {
  const argsLength = args[Array_length];
  const lastArg = args[argsLength - 1];
  const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
  const ops = isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args;

  return (eventSource: EventSourceLike<TA>) =>
    pipe(
      ops,
      ReadonlyArray.map(op => op(eventSource)),
      Computation.mergeMany(EventSourceModule),
    );
}) as unknown as EventSource.Signature["forkMerge"];

export default EventSource_forkMerge;
