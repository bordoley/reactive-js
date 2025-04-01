import { Readable } from "node:stream";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as Producer from "../../computations/Producer.js";
import * as ReactiveSource from "../../computations/ReactiveSource.js";
import {
  Optional,
  newInstance,
  pipe,
  pipeAsync,
  returns,
} from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as NodeReadable from "../NodeReadable.js";

testModule(
  "NodeReadable",
  describe(
    "create",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      const readable = Readable.from(generate(), {
        autoDestroy: false,
      });

      await pipeAsync(
        readable,
        returns,
        NodeReadable.create,
        Producer.decodeWithCharset(),
        Producer.scan((acc: string, next: string) => acc + next, returns("")),
        ReactiveSource.lastAsync<string>(),
        expectEquals<Optional<string>>("abcdefg"),
      );

      pipe(readable.destroyed, expectTrue("expected readable to be destroyed"));
    }),
    testAsync("reading from readable factory", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      await pipeAsync(
        NodeReadable.create(() => Readable.from(generate())),
        Producer.decodeWithCharset(),
        Producer.scan((acc: string, next: string) => acc + next, returns("")),
        ReactiveSource.lastAsync(),
        expectEquals<Optional<string>>("abcdefg"),
      );
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      await pipe(
        NodeReadable.create(() => Readable.from(generate())),
        ReactiveSource.lastAsync<Uint8Array>(),
        expectPromiseToThrow,
      );
    }),
  ),
)({
  beforeEach() {
    const scheduler = HostScheduler.create();
    DefaultScheduler.set(scheduler);
  },
  afterEach() {
    DefaultScheduler.dispose();
  },
});
