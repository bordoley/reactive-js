'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var disposable = require('./disposable.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
var testing = require('./testing.js');
var resourceManager = require('./resourceManager.js');

const tests = testing.describe("resource manager", testing.test("integration test", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const rm = resourceManager.createResourceManager((k) => disposable.createDisposableValue(k, functions.ignore), scheduler$1, { maxIdleTime: 10, maxResourcesPerKey: 1, maxTotalResources: 2 });
    let da1 = disposable.disposed, da2 = disposable.disposed, da3 = disposable.disposed, db1 = disposable.disposed, db2 = disposable.disposed, db3 = disposable.disposed, dc = disposable.disposed, dd = disposable.disposed;
    functions.pipe([
        () => {
            da1 = functions.pipe(rm.get("a"), observable.onNotify(_ => {
                console.log("a1: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
            da2 = functions.pipe(rm.get("a"), observable.onNotify(_ => {
                console.log("a2: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
            da3 = functions.pipe(rm.get("a"), observable.onNotify(_ => {
                console.log("a3: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
        },
        () => {
            functions.pipe(da1, disposable.dispose());
            db1 = functions.pipe(rm.get("b"), observable.onNotify(_ => {
                console.log("b1: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
            db2 = functions.pipe(rm.get("b"), observable.onNotify(_ => {
                console.log("b2: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
            dc = functions.pipe(rm.get("c"), observable.onNotify(_ => {
                console.log("c1: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
            dd = functions.pipe(rm.get("d"), observable.onNotify(_ => {
                console.log("d1: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
        },
        () => {
            functions.pipe(da2, disposable.dispose());
            functions.pipe(db1, disposable.dispose());
        },
        () => {
            functions.pipe(db2, disposable.dispose());
        },
        () => {
            functions.pipe(da3, disposable.dispose());
            functions.pipe(db2, disposable.dispose());
            functions.pipe(db3, disposable.dispose());
        },
        functions.ignore,
        functions.ignore,
        () => {
            console.log(rm);
            functions.pipe(rm.get("e"), observable.onNotify(_ => {
                console.log("e1: " + scheduler$1.now);
            }), observable.subscribe(scheduler$1));
            functions.pipe(dc, disposable.dispose());
            functions.pipe(dd, disposable.dispose());
        },
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.ignore,
        functions.defer(rm, disposable.dispose()),
    ], observable.fromArray({ delay: 1 }), observable.onNotify(lib => lib()), observable.subscribe(scheduler$1));
    scheduler$1.run();
}));

exports.tests = tests;
