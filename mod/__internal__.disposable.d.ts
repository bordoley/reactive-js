import { DisposableLike } from "./disposable.mjs";
declare class DisposableRef<T extends DisposableLike> {
    private readonly disposable;
    private _current;
    constructor(disposable: DisposableLike, defaultValue: T);
    get current(): T;
    set current(newCurrent: T);
}
export { DisposableRef };
