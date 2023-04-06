import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Observable from "@reactive-js/core/rx/Observable";
import * as AsyncEnumerable from "@reactive-js/core/streaming/AsyncEnumerable";
import {
  createComponent,
  useEnumerable,
  useFlowable,
  useObservable,
  useStream,
  useAnimation,
} from "@reactive-js/core/integrations/react";
import {
  useAnimatedValue,
  useWindowLocation,
  useWindowLocationStream,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react-web";
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
import { identity } from "@reactive-js/core/functions";
import * as Scheduler from "@reactive-js/core/scheduling/Scheduler";

// FIXME: should probably export the react scheduler in its own module for outside of hooks use cases.
const hostScheduler = Scheduler.createHostScheduler();

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
  const cache = useMemo(() => Streamable.createInMemoryCache<string>(), []);
  const cacheStream = useStream(cache);

  return isSome(cacheStream) ? <CacheInner cache={cacheStream} /> : null;
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

  const counterFlowable = useMemo(
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
  const counter = useFlowable(counterFlowable);

  const [animatedValue, dispatch, animationRunning] = useAnimation(
    () => {
      const selector = (v: number) => ({
        margin: `${50 - v}px`,
        padding: `${v}px`,
      });

      return [
        {
          type: "loop",
          count: 2,
          animation: [
            { type: "tween", duration: 1000, from: 0, to: 50, selector },
            { type: "delay", duration: 500 },
            { type: "tween", duration: 1000, from: 50, to: 0, selector },
          ],
        },
      ];
    },
    { mode: "blocking" },
    [],
  );

  const divRef = useAnimatedValue<HTMLDivElement>(animatedValue, identity);

  const enumerable = useMemo(
    () => Enumerable.generate(increment, () => -1),
    [],
  );
  const enumerator = useEnumerable(enumerable);

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
      <div
        ref={divRef}
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
        <button onClick={dispatch} disabled={animationRunning}>
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

    const createAnimationStream = (animatedDivRef: {
      current: HTMLElement | null;
    }) =>
      Streamable.createEventHandler(
        pipe(
          Observable.animate(
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
          ),
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
      const { windowLocationStream } = Observable.__await(props);
      const uri = Observable.__await(windowLocationStream);

      const enumerator = Observable.__stream(asyncEnumerable);
      const move: SideEffect = Observable.__bindMethod(
        enumerator,
        QueueableLike_enqueue,
      );

      const animatedDivRef = Observable.__memo(createRef);
      const animationStreamable = Observable.__memo(
        createAnimationStream,
        animatedDivRef,
      );
      const animationStream = Observable.__stream(animationStreamable);

      const runAnimation = Observable.__bindMethod(
        animationStream,
        QueueableLike_enqueue,
      );

      Observable.__observe(animationStream);

      const value = Observable.__observe<number>(enumerator) ?? "no value";

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

const items = ["W", "O", "R", "D", "L", "E"];

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
};

const Box = (props: any) => (
  <div
    {...{ ...props }}
    style={{
      position: "relative",
      height: 50,
      width: 50,
    }}
  />
);

const FrontBox = (props: any) => (
  <div
    {...{ ...props }}
    style={{
      ...SharedStyles,
      backgroundColor: "#fafafa",
      border: "solid 2px #1a1a1a",
    }}
  />
);

const BackBox = (props: any) => (
  <div
    {...{ ...props }}
    style={{
      ...SharedStyles,
      backgroundColor: "#6cab64",
      border: "solid 2px #6cab64",
      color: "#fafafa",
    }}
  />
);

const Wordle = () => {
  return (
    <div>
      {items.map((x, i) => (
        <Box key={i}>
          <FrontBox>{"?"}</FrontBox>
          <BackBox>{x}</BackBox>
        </Box>
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
    <RootRxComponent />
    <Wordle />
  </WindowLocationProvider>,
);
