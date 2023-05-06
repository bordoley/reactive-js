import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  useAnimate,
  useScroll,
} from "@reactive-js/core/integrations/react/web";
import {
  useDispatcher,
  useDisposable,
  useListen,
  useStream,
} from "@reactive-js/core/integrations/react";
import { EventSourceLike } from "@reactive-js/core/util";
import { ScrollValue } from "@reactive-js/core/integrations/web";
import { Optional, pipeLazy, pipeSome } from "@reactive-js/core/functions";
import * as EventSource from "@reactive-js/core/util/EventSource";
import { EventListenerLike_notify } from "@reactive-js/core/util";
import * as EventPublisher from "@reactive-js/core/util/EventPublisher";
import * as Streamable from "@reactive-js/core/rx/Streamable";
import { KeyedCollectionLike_get } from "@reactive-js/core/containers";
import { getScheduler } from "@reactive-js/core/integrations/scheduler";
import * as WebScheduler from "@reactive-js/core/integrations/web/Scheduler";

const AnimatedCircle = ({
  animation,
}: {
  animation: Optional<EventSourceLike<number>>;
}) => {
  const circleRef: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    progress => ({
      clipPath: `circle(${progress * 25 + 5}%)`,
    }),
    [],
  );

  return (
    <div
      ref={circleRef}
      style={{
        backgroundColor: "orange",
        clipPath: `circle(5%)`,
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        position: "fixed",
        inset: "0",
      }}
    />
  );
};

const ScrollApp = () => {
  const animationScheduler = useDisposable(
    pipeLazy(getScheduler(), WebScheduler.createAnimationFrameScheduler),
    [],
  );

  const animationGroup = useStream(
    () =>
      Streamable.createAnimationGroupEventHandler<boolean, number, number>(
        [
          direction =>
            direction
              ? [
                  {
                    type: "spring",
                    precision: 0.1,
                    from: 1,
                    to: 1.2,
                  },
                  {
                    type: "spring",
                    precision: 0.1,
                    from: 1.2,
                    to: 1,
                  },
                ]
              : [
                  {
                    type: "spring",
                    precision: 0.1,
                    from: 0,
                    to: -0.01,
                  },
                  {
                    type: "spring",
                    precision: 0.1,
                    from: -0.01,
                    to: 0,
                  },
                ],
        ],
        { mode: "switching", scheduler: animationScheduler },
      ),
    [],
  );
  const { enqueue } = useDispatcher(animationGroup);

  const springAnimation = animationGroup?.[KeyedCollectionLike_get](0);

  const publishedAnimation = useDisposable(EventPublisher.create, []);

  const containerRef = useScroll<HTMLDivElement>(
    ({ value }: { value: ScrollValue }) => {
      const pos = value.y.progress;
      const velocity = value.y.velocity;

      publishedAnimation?.[EventListenerLike_notify](pos);

      if (pos === 1 && Math.abs(velocity) > 0.5) {
        // FIXME: To make this really right, we should measure the velocity
        // and dispatch that so we can adjust the size of the overshoot
        // in the animation.
        enqueue(true);
      }

      if (pos === 0 && Math.abs(velocity) > 0.5) {
        // FIXME: To make this really right, we should measure the velocity
        // and dispatch that so we can adjust the size of the overshoot
        // in the animation.
        enqueue(false);
      }
    },
    [publishedAnimation, enqueue],
  );

  useListen(
    () =>
      pipeSome(
        springAnimation,
        EventSource.pick("value"),
        EventSource.forEach(v =>
          publishedAnimation?.[EventListenerLike_notify](v),
        ),
        EventSource.ignoreElements(),
      ) ?? EventSource.empty(),
    [springAnimation, publishedAnimation],
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%",
          position: "fixed",
          inset: "0",
          pointerEvents: "none",
          zIndex: "0",
        }}
      >
        <AnimatedCircle animation={publishedAnimation} />
      </div>

      <div
        style={{
          width: "100vw",
          height: "200vh",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<ScrollApp />);
