import { Array_length } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { BroadcasterLike } from "../../../computations.js";
import {
  Function1,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_merge from "./Broadcaster.merge.js";

const Broadcaster_forkMerge: Broadcaster.Signature["forkMerge"] = (<TA, TB>(
  ...args: Function1<BroadcasterLike<TA>, BroadcasterLike<TB>>[]
) => {
  const argsLength = args[Array_length];
  const lastArg = args[argsLength - 1];
  const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
  const ops = isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args;

  return (broadcaster: BroadcasterLike<TA>) =>
    pipe(
      ops,
      ReadonlyArray.map(op => op(broadcaster)),
      broadcasters => Broadcaster_merge(...broadcasters),
    );
}) as unknown as Broadcaster.Signature["forkMerge"];

export default Broadcaster_forkMerge;
