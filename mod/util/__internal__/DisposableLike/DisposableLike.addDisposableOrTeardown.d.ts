import { DisposableLike, DisposableOrTeardown } from "../../../util.mjs";
declare const addDisposableOrTeardown: (parent: DisposableLike, child: DisposableOrTeardown, ignoreChildErrors?: boolean) => void;
export { addDisposableOrTeardown as default };
