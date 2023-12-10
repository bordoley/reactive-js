import { bindMethod, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
} from "../../../utils.js";
import Disposable_onError from "./Disposable.onError.js";

const Disposable_addChildToParent = (
  parent: DisposableLike,
  child: DisposableLike,
  options?: { readonly ignoreChildErrors?: boolean },
) => {
  const { ignoreChildErrors = false } = options ?? {};

  parent[DisposableLike_add](child);

  if (!ignoreChildErrors) {
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
  }
};
export default Disposable_addChildToParent;
