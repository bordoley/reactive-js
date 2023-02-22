import {
  DisposableLike,
  DisposableLike_add,
  DisposableOrTeardown,
} from "../../../util.js";

const Disposable_addDisposableOrTeardown = (
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) => {
  parent[DisposableLike_add](child, ignoreChildErrors);
};

export default Disposable_addDisposableOrTeardown;
