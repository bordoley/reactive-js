import { createDisposableValue, disposed } from "../src/disposable";
import { pipe } from "../src/functions";
import { onNotify, subscribe, fromArray } from "../src/observable";
import { createResourceManager } from "../src/resourceManager";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { test, describe } from "../src/testing";

export const tests = describe(
  "resource manager",
  test("integration test", () => {
    const scheduler = createVirtualTimeScheduler();

    const rm = createResourceManager(
      (k: string) => createDisposableValue(k, () => {}),
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
            onNotify(_ => {
              console.log("a1: " + scheduler.now);
            }),
            subscribe(scheduler),
          );
          da2 = pipe(
            rm.get("a"),
            onNotify(_ => {
              console.log("a2: " + scheduler.now);
            }),
            subscribe(scheduler),
          );
          da3 = pipe(
            rm.get("a"),
            onNotify(_ => {
              console.log("a3: " + scheduler.now);
            }),
            subscribe(scheduler),
          );
        },
        () => {
          da1.dispose();

          db1 = pipe(
            rm.get("b"),
            onNotify(_ => {
              console.log("b1: " + scheduler.now);
            }),
            subscribe(scheduler),
          );
          db2 = pipe(
            rm.get("b"),
            onNotify(_ => {
              console.log("b2: " + scheduler.now);
            }),
            subscribe(scheduler),
          );

          dc = pipe(
            rm.get("c"),
            onNotify(_ => {
              console.log("c1: " + scheduler.now);
            }),
            subscribe(scheduler),
          );
          dd = pipe(
            rm.get("d"),
            onNotify(_ => {
              console.log("d1: " + scheduler.now);
            }),
            subscribe(scheduler),
          );
        },
        () => {
          da2.dispose();
          db1.dispose();
        },
        () => {
          db2.dispose();
        },
        () => {
          da3.dispose();
          db2.dispose();
          db3.dispose();
        },
        () => {},
        () => {},
        () => {
          console.log(rm);
          pipe(
            rm.get("e"),
            onNotify(_ => {
              console.log("e1: " + scheduler.now);
            }),
            subscribe(scheduler),
          );

          dc.dispose();
          dd.dispose();
        },
        () => {},
        () => {},
        () => {},
        () => {},
        () => {},
        () => {},
        () => {},
        () => {},
        () => {},
        () => {},
        () => {
          rm.dispose();
        },
      ],
      fromArray({ delay: 1 }),
      onNotify(src => src()),
      subscribe(scheduler),
    );

    scheduler.run();
  }),
);
