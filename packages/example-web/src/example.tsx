import React, { useCallback, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Observable from "@reactive-js/core/rx/Observable";
import {
  createComponent,
  useEnumerate,
  useFlow,
  useObservable,
  useStream,
  useAnimations,
} from "@reactive-js/core/integrations/react";
import {
  useAnimateEvent,
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react/web";
import {
  WindowLocationLike,
  WindowLocationURI,
} from "@reactive-js/core/integrations/web";
import {
  increment,
  isNone,
  isSome,
  Optional,
  pipe,
  returns,
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
import {
  __await,
  __bindMethod,
  __currentScheduler,
  __memo,
  __observe,
  __stream,
  __using,
} from "@reactive-js/core/rx/effects";
import { SchedulerLike } from "@reactive-js/core/scheduling";
import { Wordle } from "./wordle";
import Measure from "./measure";
import * as WindowLocation from "@reactive-js/core/integrations/web/WindowLocation";
import * as Scheduler from "@reactive-js/core/integrations/scheduler";

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

  const counter = useFlow(
    () =>
      pipe(
        Runnable.generate(increment, returns(counterInitialValue ?? -1)),
        Runnable.forEach<number>(value =>
          history.replace((uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${value}`,
          })),
        ),
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
          Enumerator.map(([key, animation]) => (
            <AnimatedBox key={key} animation={animation} />
          )),
          Enumerator.toReadonlyArray(),
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
      windowLocation: WindowLocationLike;
    }>,
  ) => {
    const createRef = () => ({ current: null });

    const createAnimationStream = (
      animatedDivRef: {
        current: HTMLElement | null;
      },
      hostScheduler: SchedulerLike,
    ) =>
      Streamable.createEventHandler<"cancel" | "animate">(
        ev =>
          ev === "animate"
            ? pipe(
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
              )
            : Observable.empty(),
        { mode: "switching" },
      );

    return Observable.compute(() => {
      const { windowLocation } = __await(props);
      const uri = __await(windowLocation);

      const scheduler = __currentScheduler();

      const animatedDivRef = __memo(createRef);
      const animationStreamable = __memo(
        createAnimationStream,
        animatedDivRef,
        scheduler,
      );
      const animationStream = __stream(animationStreamable);
      const isAnimationRunning = __observe(animationStream) ?? false;

      const runAnimation = __bindMethod(animationStream, QueueableLike_enqueue);

      __observe(animationStream);

      return (
        <div>
          <div>This is not actually a React Component</div>
          <div>{String(uri) ?? ""}</div>
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
            {isAnimationRunning ? (
              <button onClick={() => runAnimation("cancel")}>
                Cancel Animation
              </button>
            ) : (
              <button onClick={() => runAnimation("animate")}>
                Run Animation
              </button>
            )}
          </div>
        </div>
      );
    });
  },
);

// Subscribe to the window location using react's normal priority scheduler.
const windowLocation = WindowLocation.subscribe(Scheduler.getScheduler());
const rootElement = document.getElementById("root");

ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider windowLocation={windowLocation}>
    <Root />
    <RxComponent windowLocation={windowLocation} />
    <Wordle />
    <Measure />
  </WindowLocationProvider>,
);
