import { Disposable } from "./disposable.mjs";
declare class DisposableRef {
    private readonly disposable;
    private _current;
    constructor(disposable: Disposable);
    get current(): Disposable;
    set current(newCurrent: Disposable);
}
export { DisposableRef };
