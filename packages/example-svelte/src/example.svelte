<script>
import * as Scheduler from "@reactive-js/core/scheduling/Scheduler";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import { subscribe } from "@reactive-js/core/integrations/svelte";
import {
  bind,
  increment,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import {
  StreamableLike_stream, 
  FlowableStreamLike_pause, 
  FlowableStreamLike_isPaused, 
  FlowableStreamLike_resume
} from "@reactive-js/core/streaming";

  const flowableCounter = pipe(
    Runnable.generate(increment, returns(-1), { delay: 500 }),
    Runnable.toFlowable(),
  );

  const scheduler = Scheduler.createHostScheduler();
  const counter = flowableCounter[StreamableLike_stream](scheduler);

  const pause = bind(counter[FlowableStreamLike_pause], counter);
  const resume = bind(counter[FlowableStreamLike_resume], counter);

  const isPaused =  pipe(
    counter[FlowableStreamLike_isPaused],
    subscribe(scheduler),
  );

  const counterValue = pipe(
     counter,
     subscribe(scheduler),
  );
</script>

<main>
	<h1>{$counterValue ?? 0}</h1>
   <button on:click={$isPaused ? resume : pause}>{$isPaused ? "Resume" : "Pause"}</button>
</main>