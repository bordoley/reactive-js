import { Factory, Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_usingImpl from "./Disposable.usingImpl.js";

const Disposable_using: Disposable.Signature["using"] = ((
    ...factories: readonly Factory<DisposableLike>[]
  ): Function1<(...args: DisposableLike[]) => unknown, unknown> =>
  f =>
    Disposable_usingImpl(f, factories)) as Disposable.Signature["using"];

export default Disposable_using;
