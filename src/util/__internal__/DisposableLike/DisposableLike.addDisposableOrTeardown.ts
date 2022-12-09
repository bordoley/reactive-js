import {
  DisposableLike,
  DisposableLike_add,
  DisposableOrTeardown,
} from "../../../util";

export const addDisposableOrTeardown = (
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) => {
  parent[DisposableLike_add](child, ignoreChildErrors);
};
