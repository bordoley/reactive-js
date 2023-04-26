import { Optional, pipeLazy, pipeSome } from "@reactive-js/core/functions";
import React, { useEffect, useState } from "react";
import { Rect } from "@reactive-js/core/integrations/web";
import * as Observable from "@reactive-js/core/rx/Observable";
import {
  useAnimation,
  useObservable,
} from "@reactive-js/core/integrations/react";
import { useAnimateEvent } from "@reactive-js/core/integrations/react/web";
import * as EventSource from "@reactive-js/core/util/EventSource";
import * as WebElement from "@reactive-js/core/integrations/web/Element";


const Measure = () => {
  const [open, toggle] = useState(false);

  const [container, setContainer] = useState<Optional<HTMLDivElement>>();

  const { width: boxWidth } = useObservable(
    () =>
      pipeSome(container ,WebElement.observeMeasure(), Observable.throttle(50)) ??
      Observable.empty<Rect>(),
    [container],
  ) ?? { width: 0 };

  const [animation, dispatch] = useAnimation<
    number,
    { prevWidth: number; width: number }
  >(
    ({ prevWidth, width }) => ({
      type: "spring",
      from: prevWidth,
      to: width,
      precision: 0.1,
    }),

    [],
    { mode: "switching" },
  );

  const width =
    useObservable(
      pipeLazy(
        animation,
        EventSource.toObservable(),
        Observable.throttle(50),
        Observable.pick<{ value: number }, "value">("value"),
        Observable.map(Math.floor),
      ),
      [animation],
    ) ?? 0;

  useEffect(() => {
    if (width > 0 && boxWidth > width && open) {
      dispatch({ prevWidth: width, width: boxWidth });
    } else if (width === 0 && open) {
      dispatch({ prevWidth: 0, width: boxWidth });
    } else if (width >= boxWidth && !open) {
      dispatch({ prevWidth: boxWidth, width: 0 });
    } else if (width >= boxWidth && open) {
      dispatch({ prevWidth: boxWidth, width: boxWidth });
    }
  }, [width, open, boxWidth, dispatch]);

  const fillRef = useAnimateEvent<HTMLDivElement, number>(animation, ev => ({
    width: `${ev.value}px`,
  }));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        ref={setContainer as React.Ref<HTMLDivElement>}
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
          toggle(s => !s);
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
          {width}
        </div>
      </div>
    </div>
  );
};

export default Measure;
