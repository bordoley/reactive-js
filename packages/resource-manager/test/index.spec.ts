import { createDisposableValue, disposed } from "@reactive-js/disposable";
import { createVirtualTimeScheduler } from "@reactive-js/scheduler";
import { createResourceManager } from "../src";
import {
  onNotify,
  subscribe,
  fromScheduledValues,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";

test("resource manager test", () => {
  const scheduler = createVirtualTimeScheduler();

  const rm = createResourceManager(
    (k: string) => createDisposableValue(k, () => {}),
    x => x,
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
    fromScheduledValues(
      [
        1,
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
      ],
      [
        1,
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
      ],

      [
        1,
        () => {
          da2.dispose();
          db1.dispose();
        },
      ],

      [
        1,
        () => {
          db2.dispose();
        },
      ],

      [
        1,
        () => {
          da3.dispose();
          db2.dispose();
          db3.dispose();
        },
      ],

      [
        2,
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
      ],

      [
        10,
        () => {
          rm.dispose();
        },
      ],
    ),
    onNotify(src => src()),
    subscribe(scheduler),
  );

  scheduler.run();
});
