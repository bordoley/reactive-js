import { bindMethod, pipe } from "../../../functions.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
} from "../../../utils.js";
import Disposable_onError from "../../DisposableContainer/__private__/DisposableContainer.onError.js";

const Disposable_addChildToParent = (
  parent: DisposableLike,
  child: DisposableLike,
  options?: { readonly ignoreChildErrors?: boolean },
) => {
  const { ignoreChildErrors = false } = options ?? {};

  parent[DisposableContainerLike_add](child);

  if (!ignoreChildErrors) {
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
  }
};
export default Disposable_addChildToParent;
