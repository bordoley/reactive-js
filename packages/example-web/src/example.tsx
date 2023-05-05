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
  useAnimationGroup,
} from "@reactive-js/core/integrations/react";
import {
  useAnimateEvent,
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react/web";
import {
  CSSStyleKey,
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
import * as Streamable from "@reactive-js/core/rx/Streamable";
import { ObservableLike, CacheLike, StreamOf } from "@reactive-js/core/rx";
import {
  QueueableLike_enqueue,
  EventSourceLike,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableLike_isPaused,
} from "@reactive-js/core/util";
import * as Dictionary from "@reactive-js/core/containers/Dictionary";
import * as Enumerator from "@reactive-js/core/containers/Enumerator";
import {
  __await,
  __bindMethod,
  __constant,
  __currentScheduler,
  __memo,
  __observe,
  __stream,
  __using,
} from "@reactive-js/core/rx/effects";
import { __animateEvent } from "@reactive-js/core/integrations/web/effects";
import { Wordle } from "./wordle";
import Measure from "./measure";
import * as WindowLocation from "@reactive-js/core/integrations/web/WindowLocation";
import * as Scheduler from "@reactive-js/core/util/Scheduler";
import { getScheduler } from "@reactive-js/core/integrations/scheduler";
import {
  KeyedCollectionLike_get,
  ReadonlyObjectMapLike,
} from "@reactive-js/core/containers";
import * as Store from "@reactive-js/core/util/Store";

const CacheInner = ({ cache }: { cache: StreamOf<CacheLike<string>> }) => {
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
  animation?: EventSourceLike<{ type: unknown; value: number }>;
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

  const [animations, animationActions, { isAnimationRunning }] =
    useAnimationGroup<number>(
      () => ({
        abc: () => ({
          type: "loop",
          count: 2,
          animation: [
            { type: "keyframe", duration: 500, from: 0, to: 1 },
            { type: "delay", duration: 250 },
            { type: "keyframe", duration: 500, from: 1, to: 0 },
          ],
        }),

        def: () => [
          { type: "keyframe", duration: 500, from: 0, to: 1 },
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
          Dictionary.entries(),
          Enumerator.map(([key, animation]) => (
            <AnimatedBox key={key} animation={animation} />
          )),
          Enumerator.toReadonlyArray(),
        )}
      </div>
      <div>
        <button
          onClick={animationActions.dispatch}
          disabled={isAnimationRunning}
        >
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
    const createAnimationEventHandler = Streamable.createAnimationEventHandler<
      "animate" | "cancel",
      ReadonlyObjectMapLike<CSSStyleKey, string>
    >(
      ev =>
        ev === "animate"
          ? [
              {
                type: "keyframe",
                duration: 1000,
                from: 0,
                to: 50,
                selector: (v: number) => ({
                  "background-color": "blue",
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
                  "background-color": "green",
                  margin: `${50 - v}px`,
                  padding: `${v}px`,
                }),
              },
            ]
          : [],
      { mode: "switching" },
    );

    return Observable.compute(() => {
      const { windowLocation } = __await(props);
      const uri = __await(windowLocation);

      const scheduler = __currentScheduler();
      const animationScheduler = __using(
        Scheduler.createAnimationFrameScheduler,
        scheduler,
      );
      const animationEventHandler = __stream(createAnimationEventHandler, {
        scheduler: animationScheduler,
      });
      const isAnimationRunning = __observe(animationEventHandler) ?? false;
      const isAnimationPausedObservable: ObservableLike<boolean> = __constant(
        pipe(
          animationEventHandler[PauseableLike_isPaused],
          Store.toObservable(),
        ),
      );

      const isAnimationPaused =
        __observe(isAnimationPausedObservable) ??
        animationEventHandler[PauseableLike_isPaused];
      const runAnimation = __bindMethod(
        animationEventHandler,
        QueueableLike_enqueue,
      );

      const pauseAnimation = __bindMethod(
        animationEventHandler,
        PauseableLike_pause,
      );
      const resumeAnimation = __bindMethod(
        animationEventHandler,
        PauseableLike_resume,
      );

      const animatedDivRef = __animateEvent(animationEventHandler, ["animate"]);

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
            {isAnimationRunning && isAnimationPaused ? (
              <button onClick={() => resumeAnimation()}>
                Resume Animation
              </button>
            ) : isAnimationRunning && !isAnimationPaused ? (
              <button onClick={() => pauseAnimation()}>Pause Animation</button>
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
const windowLocation = WindowLocation.subscribe(getScheduler());
const rootElement = document.getElementById("root");

ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider windowLocation={windowLocation}>
    <Root />
    <RxComponent windowLocation={windowLocation} />
    <Wordle />
    <Measure />
  </WindowLocationProvider>,
);
