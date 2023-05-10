import type * as Disposable from "../../Disposable.js";
import { DisposableLike_dispose } from "../../types.js";
import Disposable_create from "./Disposable.create.js";

const Disposable_disposed: Disposable.Signature["disposed"] =
  /*@__PURE__*/ (() => {
    const instance = Disposable_create();
    instance[DisposableLike_dispose]();
    return instance;
  })();

export default Disposable_disposed;
