import { createDisposableValue, dispose, disposed } from "../disposable";
import { defer, ignore, pipe } from "../functions";
import { fromArray, subscribe } from "../observable";
import { createResourceManager } from "../resourceManager";
import { createVirtualTimeScheduler } from "../scheduler";
import { describe, test } from "../testing";

export const tests = describe(
  "resource manager",
  test("integration test", () => {
    const scheduler = createVirtualTimeScheduler();

    const rm = createResourceManager(
      (k: string) => createDisposableValue(k, ignore),
      scheduler,
      { maxIdleTime: 10, maxResourcesPerKey: 1, maxTotalResources: 2 },
    );

    let da1 = disposed,
      da2 = disposed,
      da3 = disposed,
      db1 = disposed,
      db2 = disposed,
      db3 = disposed,
      dc = disposed,
      dd = disposed;

    pipe(
      [
        () => {
          da1 = pipe(
            rm.get("a"),
    
            subscribe(scheduler, _ => {
              console.log("a1: " + scheduler.now);
            }),
          );
          da2 = pipe(
            rm.get("a"),
            subscribe(scheduler, _ => {
              console.log("a2: " + scheduler.now);
            }),
          );
          da3 = pipe(
            rm.get("a"),
            subscribe(scheduler, _ => {
              console.log("a3: " + scheduler.now);
            }),
          );
        },
        () => {
          pipe(da1, dispose());

          db1 = pipe(
            rm.get("b"),
            subscribe(scheduler, _ => {
              console.log("b1: " + scheduler.now);
            }),
          );
          db2 = pipe(
            rm.get("b"),
            subscribe(scheduler, _ => {
              console.log("b2: " + scheduler.now);
            }),
          );

          dc = pipe(
            rm.get("c"),
            subscribe(scheduler, _ => {
              console.log("c1: " + scheduler.now);
            }),
          );
          dd = pipe(
            rm.get("d"),
            subscribe(scheduler, _ => {
              console.log("d1: " + scheduler.now);
            }),
          );
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
          pipe(
            rm.get("e"),
            subscribe(scheduler, _ => {
              console.log("e1: " + scheduler.now);
            }),
          );

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
      ],
      fromArray({ delay: 1 }),
      subscribe(scheduler, lib => lib()),
    );

    scheduler.run();
  }),
);
