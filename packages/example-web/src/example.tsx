import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ReactDOMClient from "react-dom/client";
import * as Observable from "@reactive-js/core/concurrent/Observable";
import {
  CacheProvider,
  createComponent,
  useDispatcher,
  usePauseable,
  useObserve,
} from "@reactive-js/core/integrations/react";
import {
  useAnimate,
  useAnimationGroup,
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react/web";
import {
  CSSStyleMapLike,
  WindowLocationLike,
  WindowLocationURI,
} from "@reactive-js/core/integrations/web";
import {
  increment,
  isNone,
  isSome,
  none,
  Optional,
  pipe,
  pipeLazy,
  pipeSome,
  returns,
  scale,
  Tuple2,
} from "@reactive-js/core/functions";
import * as Streamable from "@reactive-js/core/concurrent/Streamable";
import * as Dictionary from "@reactive-js/core/collections/Dictionary";
import * as ReadonlyArray from "@reactive-js/core/collections/ReadonlyArray";
import {
  __await,
  __bindMethod,
  __constant,
  __currentScheduler,
  __memo,
  __observe,
  __stream,
  __using,
} from "@reactive-js/core/concurrent/Observable/effects";
import { __animate } from "@reactive-js/core/integrations/web/effects";
import { Wordle } from "./wordle.js";
import Measure from "./measure.js";
import * as WindowLocation from "@reactive-js/core/integrations/web/WindowLocation";
import * as PauseableScheduler from "@reactive-js/core/concurrent/PauseableScheduler";
import * as ReactScheduler from "@reactive-js/core/integrations/react/Scheduler";
import {
  ObservableLike,
  SchedulerLike,
  PauseableLike_resume,
  PauseableLike_isPaused,
  PauseableLike_pause,
  CacheLike,
} from "@reactive-js/core/concurrent";
import { EventSourceLike, StoreLike_value } from "@reactive-js/core/events";
import { QueueableLike_enqueue } from "@reactive-js/core/utils";
import { DictionaryLike_get } from "@reactive-js/core/collections";
import * as Flowable from "@reactive-js/core/concurrent/Flowable";
import { useFlow } from "@reactive-js/core/integrations/react";
import * as AnimationFrameScheduler from "@reactive-js/core/integrations/web/AnimationFrameScheduler";
import * as Cache from "@reactive-js/core/concurrent/Cache";

const AnimatedBox = ({
  animation,
}: {
  animation?: EventSourceLike<number>;
}) => {
  const ref: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    value => ({
      margin: `${50 - value * 50}px`,
      padding: `${value * 50}px`,
    }),
    [],
  );

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

const AnimationGroup = () => {
  const animationStream = useAnimationGroup(
    {
      a: pipe(
        Observable.concat(
          Observable.keyFrame(500),
          Observable.empty({ delay: 250 }),
          pipe(Observable.keyFrame(500), Observable.map(scale(1, 0))),
        ),
        Observable.repeat(2),
      ),
      b: _ =>
        Observable.concat(
          Observable.keyFrame(500),
          Observable.empty({ delay: 250 }),
          pipe(
            Observable.spring({ stiffness: 0.01, damping: 0.01 }),
            Observable.map(scale(1, 0)),
          ),
        ),
    },
    { mode: "blocking" },
  );

  const animationDispatcher = useDispatcher(animationStream);
  const isAnimationRunning = useObserve(animationStream) ?? false;

  return (
    <div>
      <div>
        {pipeSome(
          animationStream,
          Dictionary.entries(),
          ReadonlyArray.fromIterable(),
          ReadonlyArray.map(
            ([key, animation]: Tuple2<string, EventSourceLike<number>>) => (
              <AnimatedBox key={key} animation={animation} />
            ),
          ),
        )}
      </div>
      <div>
        <button
          onClick={() => animationDispatcher.enqueue(none)}
          disabled={isAnimationRunning}
        >
          Run Animation
        </button>
      </div>
    </div>
  );
};

const inMemoryCacheContext =
  /*@__PURE__*/ createContext<Optional<CacheLike<string>>>(none);

const CacheComponent = () => {
  const cache = useContext(inMemoryCacheContext);

  const values = cache && Cache.get(cache, "a");
  const value = useObserve(values) ?? "";

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const next = ev.target.value;
      cache && Cache.set(cache, "a", next);
    },
    [values],
  );

  return (
    <div>
      <input type="text" onChange={onChange}></input>
      <span>{value}</span>
    </div>
  );
};

const Counter = () => {
  const history = useWindowLocation();
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
    pipeLazy(
      Observable.generate(increment, returns(counterInitialValue ?? -1)),
      Observable.forEach<number>(value =>
        history.replace((uri: WindowLocationURI) => ({
          ...uri,
          query: `v=${value}`,
        })),
      ),
      Flowable.fromRunnable(),
    ),
    [history.replace, counterInitialValue],
  );
  const counterController = usePauseable(counter);
  const counterValue = useObserve(counter) ?? counterInitialValue;

  return (
    <div>
      <button
        onClick={
          counterController.isPaused
            ? counterController.resume
            : counterController.pause
        }
      >
        {counterController.isPaused ? "Resume Counter" : "Pause Counter"}
      </button>
      <span>{counterValue}</span>
    </div>
  );
};

const History = () => {
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
    </div>
  );
};

const RxComponent = createComponent(
  (
    props: ObservableLike<{
      windowLocation: WindowLocationLike;
    }>,
  ) => {
    const createAnimationGroupEventHandler = (
      animationFrameScheduler: SchedulerLike,
    ) =>
      Streamable.animationGroup<CSSStyleMapLike>(
        {
          a: Observable.concat(
            pipe(
              Observable.keyFrame(1000),
              Observable.map(scale(0, 50)),
              Observable.map((v: number) => ({
                "background-color": "blue",
                margin: `${50 - v}px`,
                padding: `${v}px`,
              })),
            ),
            pipe(
              Observable.spring({ stiffness: 0.01, damping: 0.01 }),
              Observable.map(scale(50, 0)),
              Observable.map((v: number) => ({
                "background-color": "green",
                margin: `${50 - v}px`,
                padding: `${v}px`,
              })),
            ),
          ),
        },

        { mode: "switching", scheduler: animationFrameScheduler },
      );

    return Observable.computeDeferred(() => {
      const { windowLocation } = __await(props);
      const uri = __await(windowLocation);

      const animationScheduler = AnimationFrameScheduler.get();

      const createScheduler = __constant(() => {
        const scheduler = PauseableScheduler.create(animationScheduler);
        scheduler[PauseableLike_resume]();
        return scheduler;
      }, animationScheduler);

      const pauseableScheduler = __using(createScheduler);

      const streamableAnimation = __memo(
        createAnimationGroupEventHandler,
        pauseableScheduler,
      );
      const animationGroupEventHandler = __stream(streamableAnimation);

      const isAnimationRunning = __observe(animationGroupEventHandler) ?? false;
      const isAnimationPausedObservable: ObservableLike<boolean> = __constant(
        pipe(
          pauseableScheduler[PauseableLike_isPaused],
          Observable.fromStore(),
        ),
        pauseableScheduler,
      );

      const isAnimationPaused =
        __observe(isAnimationPausedObservable) ??
        pauseableScheduler[PauseableLike_isPaused][StoreLike_value];
      const runAnimation = __bindMethod(
        animationGroupEventHandler,
        QueueableLike_enqueue,
      );

      const pauseAnimation = __bindMethod(
        pauseableScheduler,
        PauseableLike_pause,
      );
      const resumeAnimation = __bindMethod(
        pauseableScheduler,
        PauseableLike_resume,
      );

      const animatedDivRef = __animate(
        animationGroupEventHandler[DictionaryLike_get]("a")!,
      );

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
const windowLocation = WindowLocation.subscribe(ReactScheduler.get());
const rootElement = document.getElementById("root");

ReactDOMClient.createRoot(rootElement as any).render(
  <CacheProvider cacheContext={inMemoryCacheContext}>
    <WindowLocationProvider windowLocation={windowLocation}>
      <History />
      <Counter />
      <AnimationGroup />
      <CacheComponent />
      <RxComponent windowLocation={windowLocation} />
      <Wordle />
      <Measure />
    </WindowLocationProvider>
  </CacheProvider>,
);
