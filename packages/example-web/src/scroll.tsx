import React, { useMemo } from "react";
import ReactDOMClient from "react-dom/client";
import { useAnimate, useScroll, useSpring } from "@reactive-js/core/react/web";
import { useDisposable } from "@reactive-js/core/react";
import { ScrollValue } from "@reactive-js/core/web";
import { Optional } from "@reactive-js/core/functions";
import * as Broadcaster from "@reactive-js/core/computations/Broadcaster";
import { BroadcasterLike } from "@reactive-js/core/computations";
import * as Publisher from "@reactive-js/core/computations/Publisher";
import {
  EventListenerLike_notify,
  PauseableLike_pause,
  PauseableLike_resume,
} from "@reactive-js/core/utils";

const AnimatedCircle = ({
  animation,
}: {
  animation: Optional<BroadcasterLike<number>>;
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
  const spring = useSpring({ precision: 0.1 });

  const publishedAnimation = useDisposable(Publisher.create, []);

  const containerRef = useScroll<HTMLDivElement>(
    ({ y, done }: ScrollValue) => {
      const pos = y.progress;
      const { velocity } = y;

      spring?.[PauseableLike_pause]();

      if (!done && velocity > 0) {
        spring?.[EventListenerLike_notify]({
          from: pos,
          to: [pos + 0.05, pos],
        });
      } else if (!done && velocity < 0) {
        spring?.[EventListenerLike_notify]({
          from: pos,
          to: [pos - 0.01, pos],
        });
      }

      if (!done) {
        publishedAnimation?.[EventListenerLike_notify](pos);
      } else {
        spring?.[PauseableLike_resume]();
      }
    },
    [publishedAnimation],
  );

  const circleAnimtation = useMemo(
    () =>
      spring &&
      publishedAnimation &&
      Broadcaster.merge<number>(spring, publishedAnimation),
    [spring, publishedAnimation],
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
        <AnimatedCircle animation={circleAnimtation} />
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
