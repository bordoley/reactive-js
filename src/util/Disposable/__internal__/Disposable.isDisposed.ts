import { DisposableLike, DisposableLike_isDisposed } from "../../../util.js";

const Disposable_isDisposed = (disposable: DisposableLike): boolean =>
  disposable[DisposableLike_isDisposed];

export default Disposable_isDisposed;
