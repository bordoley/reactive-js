import { DisposableLike, DisposableLike_dispose } from "../../../util.js";
import create from "./Disposable.create.js";

const Disposable_disposed: DisposableLike = /*@__PURE__*/ (() => {
  const instance = create();
  instance[DisposableLike_dispose]();
  return instance;
})();

export default Disposable_disposed;
