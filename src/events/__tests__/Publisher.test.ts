import {
  describe,
  expectEquals,
  expectIsNone,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { Optional, newInstance, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as Publisher from "../Publisher.js";

testModule(
  "Publisher",
  describe(
    "createRefCounted",
    test("when disposed with an error", () => {
      const e = newInstance(Error);
      const publisher = Publisher.createRefCounted();

      pipe(publisher[DisposableLike_error], expectIsNone);
      publisher[DisposableLike_dispose](e);
      pipe(publisher[DisposableLike_error], expectEquals<Optional<Error>>(e));
    }),
  ),
);

((_: Publisher.Signature) => {})(Publisher);
