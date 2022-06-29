import {
  consume,
  consumeAsync,
  consumeContinue,
  consumeDone,
  fromArray as fromArrayStream,
  fromIterable,
  generate as generateStream,
} from "../asyncEnumerable";
import {
  empty as emptyContainer,
  encodeUtf8,
  fromValue,
  ignoreElements,
  mapTo,
  startWith,
} from "../container";
import { dispatchTo } from "../dispatcher";
import { Error, dispose, isDisposed, onDisposed } from "../disposable";
import { forEach } from "../enumerator";
import {
  ignore,
  increment,
  incrementBy,
  pipe,
  pipeLazy,
  returns,
  sum,
} from "../functions";
import {
  StreamLike,
  __memo,
  __observe,
  buffer,
  concatT,
  decodeWithCharset,
  fromArray,
  fromArrayT,
  generate,
  keepT,
  map,
  mapT,
  observable,
  observerCount,
  onNotify,
  onNotify as onNotifyObs,
  scan,
  subscribe,
  takeFirst,
  toRunnable,
  usingT,
} from "../observable";
import { Option, none } from "../option";
import { last, toArray } from "../runnable";
import { createVirtualTimeScheduler, now, schedule } from "../scheduler";
import {
  __stream,
  createActionReducer,
  createFlowableSinkAccumulator,
  createLiftedStreamable,
  empty,
  flow,
  identity,
  sinkInto,
  stream,
} from "../streamable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../testing";

export const tests = describe(
  "streamable",
  test("__stream", () => {
    const streamable = identity<number>();
    const createLooper = (stream: StreamLike<number, number>) =>
      pipe(
        [0, 1, 2, 3],
        fromArray({ delay: 10 }),
        onNotifyObs(dispatchTo(stream)),
        ignoreElements(keepT),
      );

    const obs = observable(() => {
      const stream = __stream(streamable);
      const runLooper = __memo(createLooper, stream);
      __observe(runLooper);

      return __observe(stream) ?? -1;
    });

    pipe(obs, toRunnable(), toArray(), expectArrayEquals([-1, 0, 1, 2, 3]));
  }),
  test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = pipe(
      createActionReducer<number, number>(sum, returns<number>(0)),
      stream(scheduler),
    );

    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    pipe(actionReducerStream, dispose());

    let result: number[] = [];
    pipe(
      actionReducerStream,
      onNotify(x => {
        result.push(x);
      }),
      subscribe(scheduler),
    );

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([0, 1, 3]));
  }),
  describe(
    "empty",
    test("with no delay", () => {
      const scheduler = createVirtualTimeScheduler();
      const emptyStream = pipe(empty<void, number>(), stream(scheduler));

      emptyStream.dispatch(none);
      emptyStream.dispatch(none);

      let result: number[] = [];
      const subscription = pipe(
        emptyStream,
        onNotify(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      pipe(scheduler, forEach(ignore));

      pipe(result, expectArrayEquals([]));
      pipe(emptyStream, isDisposed, expectTrue);
      pipe(subscription, isDisposed, expectTrue);
    }),
  ),
  test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();

    const incrStream = pipe(
      createLiftedStreamable(map(incrementBy(100))),
      stream(scheduler),
    );

    pipe(incrStream, observerCount, expectEquals(0));
    const sub1 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream, observerCount, expectEquals(1));
    const sub2 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream, observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(incrStream, observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(incrStream, observerCount, expectEquals(0));
  }),
  test("map", () => {
    const scheduler = createVirtualTimeScheduler();

    const incrStream = pipe(
      createLiftedStreamable(map(incrementBy(100))),
      stream(scheduler),
    );

    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    pipe(incrStream, dispose());

    let result: readonly number[] = [];
    const subscription = pipe(
      incrStream,
      buffer(),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([110, 120, 130]));
    pipe(subscription, isDisposed, expectTrue);
  }),

  test("onNotify", () => {
    const scheduler = createVirtualTimeScheduler();

    let result: number[] = [];
    const notifyStream = pipe(
      createLiftedStreamable(
        onNotify((x: number) => {
          result.push(x);
        }),
      ),
      stream(scheduler),
    );

    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    pipe(notifyStream, dispose());

    pipe(notifyStream, isDisposed, expectTrue);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
  test("scan", () => {
    const scheduler = createVirtualTimeScheduler();

    let result: number[] = [];
    const scanStream = pipe(
      createLiftedStreamable(
        scan(sum, returns<number>(0)),
        onNotify(x => {
          result.push(x);
        }),
      ),
      stream(scheduler),
    );

    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 3, 6]));
  }),
  test("sink", () => {
    const scheduler = createVirtualTimeScheduler();

    const src = createLiftedStreamable(
      scan((acc, _) => acc + 1, returns<number>(0)),
      takeFirst({ count: 3 }),
    );

    let result = 0;
    const dest = createLiftedStreamable(
      scan((acc, _) => acc + 1, returns<number>(0)),
      onNotify(v => {
        result = v;
      }),
      mapTo(mapT, none),
      startWith({ ...concatT, ...fromArrayT }, none),
    );

    const subscription = pipe(src, sinkInto(dest), subscribe(scheduler));
    pipe(subscription, isDisposed, expectFalse);

    pipe(scheduler, forEach(ignore));

    pipe(subscription, isDisposed, expectTrue);
    pipe(result, expectEquals(3));
  }),
  describe(
    "flow",
    test("empty source", () => {
      const scheduler = createVirtualTimeScheduler();
      const emptyStream = pipe([], fromArray(), flow(), stream(scheduler));

      emptyStream.dispatch("pause");
      emptyStream.dispatch("resume");

      const f = mockFn();
      const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(0));
      pipe(subscription, isDisposed, expectTrue);
      pipe(emptyStream, isDisposed, expectTrue);
    }),

    test("generate source", () => {
      const scheduler = createVirtualTimeScheduler();
      const generateStream = pipe(
        generate(increment, returns(-1), { delay: 1 }),
        flow({ scheduler }),
        stream(scheduler),
      );

      generateStream.dispatch("resume");

      pipe(
        scheduler,
        schedule(pipeLazy("pause", dispatchTo(generateStream)), {
          delay: 2,
        }),
      );

      pipe(
        scheduler,
        schedule(pipeLazy("resume", dispatchTo(generateStream)), {
          delay: 4,
        }),
      );
      pipe(
        scheduler,
        schedule(pipeLazy(generateStream, dispose()), { delay: 5 }),
      );

      const f = mockFn();
      const subscription = pipe(
        generateStream,
        onNotify(x => {
          f(now(scheduler), x);
        }),
        subscribe(scheduler),
      );

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(f.calls[0][1], expectEquals(0));
      pipe(f.calls[1][1], expectEquals(1));
      pipe(f.calls[2][1], expectEquals(2));

      pipe(subscription, isDisposed, expectTrue);
    }),

    test("fromValue", () => {
      const scheduler = createVirtualTimeScheduler();
      const fromValueStream = pipe([1], fromArray(), flow(), stream(scheduler));

      fromValueStream.dispatch("resume");
      fromValueStream.dispatch("resume");

      const f = mockFn();
      const subscription = pipe(
        fromValueStream,
        onNotify(f),
        subscribe(scheduler),
      );

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(1));
      pipe(f.calls[0][0], expectEquals(1));
      pipe(subscription, isDisposed, expectTrue);
      pipe(fromValueStream, isDisposed, expectTrue);
    }),
  ),
  describe(
    "io",
    test("decodeWithCharset", () => {
      const src = pipe(
        [
          Uint8Array.from([226]),
          Uint8Array.from([130]),
          Uint8Array.from([172]),
        ],
        fromArray(),
        decodeWithCharset(),
        flow(),
      );
      const dest = createFlowableSinkAccumulator(
        (acc: string, next: string) => acc + next,
        returns(""),
        { replay: 1 },
      );

      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(src, sinkInto(dest), subscribe(scheduler));

      const f = mockFn();
      pipe(dest, onNotify(f), subscribe(scheduler));

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(1));
      pipe(f.calls[0][0], expectEquals(String.fromCodePoint(8364)));
      pipe(subscription, isDisposed, expectTrue);
    }),
    test("empty", () => {
      const scheduler = createVirtualTimeScheduler();
      const emptyStream = pipe(
        emptyContainer(fromArrayT),
        flow(),
        stream(scheduler),
      );

      emptyStream.dispatch("pause");
      emptyStream.dispatch("resume");

      const f = mockFn();
      const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(0));
      pipe(subscription, isDisposed, expectTrue);
      pipe(emptyStream, isDisposed, expectTrue);
    }),
    test("encodeUtf8", () => {
      const str = "abcdefghijklmnsopqrstuvwxyz";

      const src = pipe(
        str,
        fromValue(fromArrayT),
        encodeUtf8({ ...mapT, ...usingT }),
        decodeWithCharset(),
        flow(),
      );
      const dest = createFlowableSinkAccumulator(
        (acc: string, next: string) => acc + next,
        returns(""),
        { replay: 1 },
      );

      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(src, sinkInto(dest), subscribe(scheduler));

      const f = mockFn();
      pipe(dest, onNotify(f), subscribe(scheduler));
      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(1));
      pipe(f.calls[0][0], expectEquals(str));
      pipe(subscription, isDisposed, expectTrue);
    }),
    test("fromValue", () => {
      const scheduler = createVirtualTimeScheduler();
      const fromValueStream = pipe(
        1,
        fromValue(fromArrayT),
        flow(),
        stream(scheduler),
      );

      fromValueStream.dispatch("resume");

      const f = mockFn();
      const subscription = pipe(
        fromValueStream,
        onNotify(f),
        subscribe(scheduler),
      );

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(1));
      pipe(f.calls[0][0], expectEquals(1));
      pipe(subscription, isDisposed, expectTrue);
      pipe(fromValueStream, isDisposed, expectTrue);
    }),
    test("map", () => {
      const src = pipe(1, fromValue(fromArrayT), map(returns(2)), flow());
      const dest = createFlowableSinkAccumulator(sum, returns(0), {
        replay: 1,
      });

      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(src, sinkInto(dest), subscribe(scheduler));

      const f = mockFn();
      pipe(dest, onNotify(f), subscribe(scheduler));

      pipe(scheduler, forEach(ignore));

      pipe(f, expectToHaveBeenCalledTimes(1));
      pipe(f.calls[0][0], expectEquals(2));
      pipe(subscription, isDisposed, expectTrue);
    }),
  ),

  test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArrayStream<number>());
    const enumerator = pipe(enumerable, stream(scheduler));

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify((x: number) => result.push(x)),
      subscribe(scheduler),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();

    const result: number[] = [];
    let error: Option<Error> = none;

    const enumerator = pipe(
      fromIterable<number>()([1, 2, 3, 4, 5, 6]),
      stream(scheduler),
    );

    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
      onDisposed(e => {
        error = e;
      }),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
  }),

  test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(
      generateStream(increment, returns<number>(0)),
      stream(scheduler),
    );

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
  describe(
    "async-enumerable",
    test("consume", () => {
      const enumerable = fromIterable<number>()([1, 2, 3, 4, 5, 6]);

      pipe(
        enumerable,
        consume((acc, next) => consumeContinue(acc + next), returns<number>(0)),
        toRunnable(),
        last(),
        expectEquals(21),
      );

      pipe(
        enumerable,
        consume(
          (acc, next) =>
            acc > 0 ? consumeDone(acc + next) : consumeContinue(acc + next),
          returns<number>(0),
        ),
        toRunnable(),
        last(),
        expectEquals(3),
      );
    }),

    describe(
      "consumeAsync",
      test(
        "when the consumer early terminates",
        pipeLazy(
          [1, 2, 3, 4, 5, 6],
          fromIterable(),
          consumeAsync(
            (acc, next) =>
              fromValue(fromArrayT)(
                acc > 0 ? consumeDone(acc + next) : consumeContinue(acc + next),
              ),
            returns<number>(0),
          ),
          toRunnable(),
          last(),
          expectEquals(3),
        ),
      ),
      test(
        "when the consumer never terminates",
        pipeLazy(
          [1, 2, 3, 4, 5, 6],
          fromIterable(),
          consumeAsync(
            (acc, next) =>
              pipe(acc + next, consumeContinue, fromValue(fromArrayT)),
            returns<number>(0),
          ),
          toRunnable(),
          last(),
          expectEquals(21),
        ),
      ),
    ),
  ),
);
