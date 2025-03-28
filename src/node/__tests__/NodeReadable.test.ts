import { Readable } from "node:stream";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as Computation from "../../computations/Computation.js";
import * as Producer from "../../computations/Producer.js";
import { SourceLike_subscribe } from "../../computations.js";
import {
  Optional,
  invoke,
  newInstance,
  pipe,
  pipeAsync,
  returns,
} from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Consumer from "../../utils/__internal__/Consumer.js";
import { CollectionEnumeratorLike_peek } from "../../utils.js";
import * as NodeReadable from "../NodeReadable.js";

const m = Computation.makeModule<Producer.Computation>()(Producer);

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
        Computation.lastAsync(m)<string>(),
        expectEquals<Optional<string>>("abcdefg"),
      );

      pipe(readable.destroyed, expectTrue("expected readable to be destroyed"));
    }),
    testAsync("reading from readable factory", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      const queue = Consumer.takeLast<string>(1);
      pipe(
        NodeReadable.create(() => Readable.from(generate())),
        Producer.decodeWithCharset(),
        Producer.scan((acc: string, next: string) => acc + next, returns("")),
        invoke(SourceLike_subscribe, queue),
      );

      await DisposableContainer.toPromise(queue);

      pipe(
        queue[CollectionEnumeratorLike_peek],
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
        Computation.lastAsync(m)<Uint8Array>(),
        expectPromiseToThrow,
      );
    }),
  ),
)();
