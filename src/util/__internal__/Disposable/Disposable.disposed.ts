import { pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import create from "./Disposable.create";
import dispose from "./Disposable.dispose";

const Disposable$disposed: DisposableLike = /*@__PURE__*/ (() => {
  const instance = create();
  pipe(instance, dispose());
  return instance;
})();

export default Disposable$disposed;
