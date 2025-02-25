import { pipeSomeLazy } from "@reactive-js/core/functions";
import React, { useEffect, useState } from "react";
import * as Observable from "@reactive-js/core/concurrent/Observable";
import { useObserve } from "@reactive-js/core/integrations/react";
import {
  useAnimate,
  useMeasure,
  useSpring,
} from "@reactive-js/core/integrations/react/web";
import { AnimationStreamLike_animation } from "@reactive-js/core/concurrent";
import { QueueableLike_enqueue } from "@reactive-js/core/utils";

const Measure = () => {
  const spring = useSpring(0);
  const [boxRef, rect] = useMeasure();
  const boxWidth = rect?.width ?? 0;

  const [state, updateState] = useState(false);
  const springIsAnimating = useObserve(spring) ?? false;

  useEffect(() => {
    spring?.[QueueableLike_enqueue](_ => (state ? boxWidth : 0));
  }, [boxWidth, state]);

  const width =
    useObserve(
      pipeSomeLazy(
        spring?.[AnimationStreamLike_animation],
        Observable.fromEventSource(),
        Observable.throttle<number>(50, { mode: "last" }),
      ),
      [spring],
    ) ?? 0;

  const fillRef: React.Ref<HTMLDivElement> = useAnimate(
    spring?.[AnimationStreamLike_animation],
    value => ({ width: `${value}px` }),
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        ref={boxRef}
        style={{
          position: "relative",
          width: "1000px",
          height: "50px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "2px solid #272727",
          overflow: "hidden",
        }}
        onClick={() => {
          updateState(f => !f);
        }}
      >
        <div
          ref={fillRef}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "0",
            height: "100%",
            background: "hotpink",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#272727",
          }}
        >
          {Math.floor(width)}
        </div>
      </div>
      {springIsAnimating ? "Animation is running" : ""}
    </div>
  );
};

export default Measure;
