import { DisposableLike } from "./disposable.mjs";
declare class DisposableRef {
    private readonly disposable;
    private _current;
    constructor(disposable: DisposableLike);
    get current(): DisposableLike;
    set current(newCurrent: DisposableLike);
}
export { DisposableRef };
