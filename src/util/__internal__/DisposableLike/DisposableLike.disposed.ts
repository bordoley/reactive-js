import { pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import { create } from "./DisposableLike.create";
import { dispose } from "./DisposableLike.dispose";

export const disposed: DisposableLike = /*@__PURE__*/ (() => {
  const instance = create();
  pipe(instance, dispose());
  return instance;
})();
