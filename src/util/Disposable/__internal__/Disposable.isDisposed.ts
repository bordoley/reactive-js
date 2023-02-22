import { DisposableLike_isDisposed } from "../../../util.js";

const Disposable_isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];

export default Disposable_isDisposed;
