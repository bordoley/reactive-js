import { createDisposableValue, disposed, dispose } from "../disposable.js";
import { pipe, ignore, defer } from "../functions.js";
import { onNotify, subscribe, fromArray } from "../observable.js";
import { createVirtualTimeScheduler } from "../scheduler.js";
import { createResourceManager } from "./resourceManager.js";
import { test, describe } from "./testing.js";
export const tests = describe("resource manager", test("integration test", () => {
    const scheduler = createVirtualTimeScheduler();
    const rm = createResourceManager((k) => createDisposableValue(k, ignore), scheduler, { maxIdleTime: 10, maxResourcesPerKey: 1, maxTotalResources: 2 });
    let da1 = disposed, da2 = disposed, da3 = disposed, db1 = disposed, db2 = disposed, db3 = disposed, dc = disposed, dd = disposed;
    pipe([
        () => {
            da1 = pipe(rm.get("a"), onNotify(_ => {
                console.log("a1: " + scheduler.now);
            }), subscribe(scheduler));
            da2 = pipe(rm.get("a"), onNotify(_ => {
                console.log("a2: " + scheduler.now);
            }), subscribe(scheduler));
            da3 = pipe(rm.get("a"), onNotify(_ => {
                console.log("a3: " + scheduler.now);
            }), subscribe(scheduler));
        },
        () => {
            pipe(da1, dispose());
            db1 = pipe(rm.get("b"), onNotify(_ => {
                console.log("b1: " + scheduler.now);
            }), subscribe(scheduler));
            db2 = pipe(rm.get("b"), onNotify(_ => {
                console.log("b2: " + scheduler.now);
            }), subscribe(scheduler));
            dc = pipe(rm.get("c"), onNotify(_ => {
                console.log("c1: " + scheduler.now);
            }), subscribe(scheduler));
            dd = pipe(rm.get("d"), onNotify(_ => {
                console.log("d1: " + scheduler.now);
            }), subscribe(scheduler));
        },
        () => {
            pipe(da2, dispose());
            pipe(db1, dispose());
        },
        () => {
            pipe(db2, dispose());
        },
        () => {
            pipe(da3, dispose());
            pipe(db2, dispose());
            pipe(db3, dispose());
        },
        ignore,
        ignore,
        () => {
            console.log(rm);
            pipe(rm.get("e"), onNotify(_ => {
                console.log("e1: " + scheduler.now);
            }), subscribe(scheduler));
            pipe(dc, dispose());
            pipe(dd, dispose());
        },
        ignore,
        ignore,
        ignore,
        ignore,
        ignore,
        ignore,
        ignore,
        ignore,
        ignore,
        ignore,
        defer(rm, dispose()),
    ], fromArray({ delay: 1 }), onNotify(lib => lib()), subscribe(scheduler));
    scheduler.run();
}));
