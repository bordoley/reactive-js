import { RunnableLike } from "../../../computations.js";
import { compose, identity, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_last from "./Runnable.last.js";
import Runnable_takeFirst from "./Runnable.takeFirst.js";

const Runnable_first: Runnable.Signature["first"] = (<T>() =>
  returns(
    compose(
      identity<RunnableLike<T>>,
      Runnable_takeFirst<T>(),
      Runnable_last(),
    ),
  ))() as Runnable.Signature["first"];
export default Runnable_first;
