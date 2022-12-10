import { DisposableLike_isDisposed } from "../../../util";

const isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];

export default isDisposed;
