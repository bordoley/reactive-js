import { Factory, Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_usingImpl from "./Disposable.usingImpl.js";

const Disposable_usingLazy: Disposable.Signature["usingLazy"] =
  (
    ...factories: readonly Factory<DisposableLike>[]
  ): Function1<(...args: DisposableLike[]) => unknown, Factory<unknown>> =>
  f =>
  () =>
    Disposable_usingImpl(f, factories);

export default Disposable_usingLazy;
