import {
  expectEquals,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { StoreLike_value } from "../../events.js";
import { pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as WritableStore from "../WritableStore.js";

testModule(
  "WritableStore",
  test("create", () => {
    const store = WritableStore.create(0);

    let current = 0;
    pipe(
      store,
      EventSource.addEventHandler(v => {
        current = v;
      }),
    );

    store[StoreLike_value] = 5;
    pipe(current, expectEquals(5));

    store[StoreLike_value] = 10;
    pipe(current, expectEquals(10));

    store[DisposableLike_dispose]();

    expectTrue(store[DisposableLike_isDisposed]);
  }),
);

((_: WritableStore.Signature) => {})(WritableStore);
