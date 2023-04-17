import React, { useCallback, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Observable from "@reactive-js/core/rx/Observable";
import * as AsyncEnumerable from "@reactive-js/core/streaming/AsyncEnumerable";
import {
  createComponent,
  useEnumerate,
  useFlowable,
  useObservable,
  useStream,
  useAnimations,
} from "@reactive-js/core/integrations/react";
import {
  useAnimateEvent,
  useWindowLocation,
  useWindowLocationStream,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react/web";
import {
  WindowLocationStreamLike,
  WindowLocationURI,
} from "@reactive-js/core/integrations/web";
import {
  increment,
  isNone,
  isSome,
  Optional,
  pipe,
  returns,
  SideEffect,
} from "@reactive-js/core/functions";
import { createAnimationFrameScheduler } from "@reactive-js/core/scheduling/Scheduler";
import * as Streamable from "@reactive-js/core/streaming/Streamable";
import { ObservableLike } from "@reactive-js/core/rx";
import {
  QueueableLike_enqueue,
  KeyedCollectionLike_get,
} from "@reactive-js/core/util";
import { CacheStreamLike } from "@reactive-js/core/streaming";
import { EventSourceLike } from "@reactive-js/core/util.js";
import * as ReadonlyObjectMap from "@reactive-js/core/keyed-containers/ReadonlyObjectMap";
import * as Enumerator from "@reactive-js/core/containers/Enumerator";
import * as ReadonlyArray from "@reactive-js/core/keyed-containers/ReadonlyArray";
import {
  __await,
  __bindMethod,
  __currentScheduler,
  __memo,
  __observe,
  __stream,
} from "@reactive-js/core/rx/effects";
import { SchedulerLike } from "@reactive-js/core/scheduling";
import { Wordle } from "./wordle";
import Measure from "./measure";

const CacheInner = ({ cache }: { cache: CacheStreamLike<string> }) => {
  const values = cache[KeyedCollectionLike_get]("a");
  const value = useObservable(values) ?? "";

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const next = ev.target.value;
      cache[QueueableLike_enqueue]({ a: _ => next });
    },
    [values],
  );

  return (
    <div>
      <input type="text" onChange={onChange} value={value}></input>
      <span>{value}</span>
    </div>
  );
};

const CacheComponent = () => {
  const cacheStream = useStream(
    () => Streamable.createInMemoryCache<string>(),
    [],
  );

  return isSome(cacheStream) ? <CacheInner cache={cacheStream} /> : null;
};

const AnimatedBox = ({
  animation,
}: {
  animation?: EventSourceLike<{ event: unknown; value: number }>;
}) => {
  const ref = useAnimateEvent<HTMLDivElement>(animation, ({ value }) => ({
    margin: `${50 - value * 50}px`,
    padding: `${value * 50}px`,
  }));

  return (
    <div
      ref={ref}
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "#bbb",
        borderRadius: "50%",
        display: "inline-block",
        margin: "50px",
        padding: "0px",
      }}
    />
  );
};

const Root = () => {
  const history = useWindowLocation();
  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value: path } = ev.target;

      history.push((uri: WindowLocationURI) => ({
        ...uri,
        path,
      }));
    },
    [history.push],
  );

  const [counterInitialValue, setCounterInitialValue] =
    useState<Optional<number>>();
  useEffect(() => {
    if (isSome(history.uri?.query) && isNone(counterInitialValue)) {
      const counterHistoryValue = new URLSearchParams(history.uri?.query);
      setCounterInitialValue(
        Number.parseInt(counterHistoryValue.get("v") ?? "-1"),
      );
    }
  }, [history.uri, counterInitialValue, setCounterInitialValue]);

  const counter = useFlowable(
    () =>
      pipe(
        Runnable.generate(increment, returns(counterInitialValue ?? -1)),
        Runnable.enqueue<number>(value =>
          history.replace((uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${value}`,
          })),
        ),
        Runnable.toFlowable(),
      ),
    [history.replace, counterInitialValue],
  );

  const [animations, dispatch, isAnimationRunning] = useAnimations(
    () => ({
      abc: () => ({
        type: "loop",
        count: 2,
        animation: [
          { type: "tween", duration: 500, from: 0, to: 1 },
          { type: "delay", duration: 250 },
          { type: "tween", duration: 500, from: 1, to: 0 },
        ],
      }),

      def: () => [
        { type: "tween", duration: 500, from: 0, to: 1 },
        { type: "delay", duration: 250 },
        { type: "spring", stiffness: 0.01, damping: 0.1, from: 1, to: 0 },
      ],
    }),
    [],
    { mode: "blocking" },
  );

  const enumerator = useEnumerate(
    () => Enumerable.generate(increment, () => -1),
    [],
  );

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          value={String(history.uri?.path ?? "")}
        ></input>
        <button onClick={history.goBack} disabled={!history.canGoBack}>
          Back
        </button>
      </div>

      <div>
        <button onClick={enumerator.move}>Move the Enumerator</button>
        <span> {enumerator.hasCurrent ? enumerator.current : "no value"}</span>
      </div>

      <div>
        <button onClick={counter.isPaused ? counter.resume : counter.pause}>
          {counter.isPaused ? "Resume Counter" : "Pause Counter"}
        </button>
        <span>{counter.value ?? counterInitialValue}</span>
      </div>
      <div>
        {pipe(
          animations,
          ReadonlyObjectMap.entries<
            EventSourceLike<{ event: unknown; value: number }>,
            string
          >(),
          Enumerator.toReadonlyArray(),
          ReadonlyArray.map(([key, animation]) => (
            <AnimatedBox key={key} animation={animation} />
          )),
        )}
      </div>
      <div>
        <button onClick={dispatch} disabled={isAnimationRunning}>
          Run Animation
        </button>
      </div>
      <CacheComponent />
    </div>
  );
};

const RxComponent = createComponent(
  (
    props: ObservableLike<{
      windowLocationStream: WindowLocationStreamLike;
    }>,
  ) => {
    const asyncEnumerable = AsyncEnumerable.generate(increment, () => -1);
    const createRef = () => ({ current: null });

    const createAnimationStream = (
      animatedDivRef: {
        current: HTMLElement | null;
      },
      hostScheduler: SchedulerLike,
    ) =>
      Streamable.createEventHandler(
        pipe(
          Observable.animate([
            {
              type: "tween",
              duration: 1000,
              from: 0,
              to: 50,
              selector: (v: number) => ({
                color: "blue",
                margin: `${50 - v}px`,
                padding: `${v}px`,
              }),
            },
            {
              type: "spring",
              stiffness: 0.01,
              damping: 0.1,
              from: 50,
              to: 0,
              selector: (v: number) => ({
                color: "green",
                margin: `${50 - v}px`,
                padding: `${v}px`,
              }),
            },
          ]),
          Observable.forEach(({ color, margin, padding }) => {
            const animatedDiv = animatedDivRef.current;
            if (animatedDiv != null) {
              animatedDiv.style.backgroundColor = color;
              animatedDiv.style.margin = margin;
              animatedDiv.style.padding = padding;
            }
          }),
          Observable.subscribeOn(() =>
            createAnimationFrameScheduler(hostScheduler),
          ),
          returns,
        ),
        { mode: "switching" },
      );

    return Observable.compute(() => {
      const { windowLocationStream } = __await(props);
      const uri = __await(windowLocationStream);

      const enumerator = __stream(asyncEnumerable);
      const move: SideEffect = __bindMethod(enumerator, QueueableLike_enqueue);

      const animatedDivRef = __memo(createRef);
      const scheduler = __currentScheduler();
      const animationStreamable = __memo(
        createAnimationStream,
        animatedDivRef,
        scheduler,
      );
      const animationStream = __stream(animationStreamable);

      const runAnimation = __bindMethod(animationStream, QueueableLike_enqueue);

      __observe(animationStream);

      const value = __observe<number>(enumerator) ?? "no value";

      return (
        <div>
          <div>This is not actually a React Component</div>
          <div>{String(uri) ?? ""}</div>
          <div>
            <button onClick={move}>Move the Enumerator</button>
            <span>{value}</span>
          </div>

          <div
            ref={animatedDivRef}
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              margin: "50px",
              padding: "0px",
            }}
          />
          <div>
            <button onClick={runAnimation}>Run Animation</button>
          </div>
        </div>
      );
    });
  },
);

const RootRxComponent = () => {
  const windowLocationStream = useWindowLocationStream();

  return <RxComponent windowLocationStream={windowLocationStream} />;
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
    <RootRxComponent />
    <Wordle />
    <Measure />
  </WindowLocationProvider>,
);
