import {
  expectEquals,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as WritableStore from "../../computations/WritableStore.js";
import { StoreLike_value } from "../../computations.js";
import { pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";

testModule(
  "WritableStore",
  test("create", () => {
    const store = WritableStore.create(0);

    let current = 0;
    pipe(
      store,
      Broadcaster.addEventHandler(v => {
        current = v;
      }),
    );

    store[StoreLike_value] = 5;
    pipe(current, expectEquals(5));

    store[StoreLike_value] = 10;
    pipe(current, expectEquals(10));

    store[DisposableLike_dispose]();

    pipe(
      store[DisposableLike_isDisposed],
      expectTrue("expected store to be disposed"),
    );
  }),
);
