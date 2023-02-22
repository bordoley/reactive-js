import { pipe } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import create from "./Disposable.create.js";
import dispose from "./Disposable.dispose.js";

const Disposable_disposed: DisposableLike = /*@__PURE__*/ (() => {
  const instance = create();
  pipe(instance, dispose());
  return instance;
})();

export default Disposable_disposed;
