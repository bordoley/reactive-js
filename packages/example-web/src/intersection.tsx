import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as WebElement from "@reactive-js/core/web/Element";
import {
  Optional,
  isTrue,
  none,
  pipeLazy,
  pipeSomeLazy,
} from "@reactive-js/core/functions";
import { useDisposable } from "@reactive-js/core/react";
import * as Broadcaster from "@reactive-js/core/computations/Broadcaster";
import { incrementBy } from "@reactive-js/core/math";

const IntersectionApp = () => {
  const [count, updateCount] = useState(10);
  const [endOfPageRef, setEndOfPage] = useState<Optional<HTMLDivElement>>();

  useDisposable(
    pipeSomeLazy(
      endOfPageRef,
      WebElement.intersectionEventSource(document),
      Broadcaster.map((ev: IntersectionObserverEntry) => ev.isIntersecting),
      Broadcaster.keep(isTrue),
      Broadcaster.addEventHandler(pipeLazy(incrementBy(10), updateCount)),
    ),
    [endOfPageRef],
  );

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      {Array(count)
        .fill(none)
        .map((_, i) => (
          <div
            key={i}
            style={{
              background: "#FFF",
              border: "1px solid #666",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >{`Item ${i}`}</div>
        ))}
      <div
        ref={setEndOfPage as React.Ref<HTMLDivElement>}
        style={{
          width: "1px",
          height: "1px",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<IntersectionApp />);
