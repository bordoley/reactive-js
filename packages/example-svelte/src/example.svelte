<script>
import * as Scheduler from "@reactive-js/core/scheduling/Scheduler";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import { subscribe } from "@reactive-js/core/integrations/svelte";
import {
  bindMethod,
  increment,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import {
  FlowableObservableLike_isPaused, 
} from "@reactive-js/core/rx";
import {
  PauseableLike_pause, 
  PauseableLike_resume
} from "@reactive-js/core/util";

  const scheduler = Scheduler.createHostScheduler();

  const counter = pipe(
    Runnable.generate(increment, returns(-1), { delay: 500 }),
    Runnable.flow(scheduler),
  );

  const pause = bindMethod(counter, PauseableLike_pause);
  const resume = bindMethod(counter, PauseableLike_resume);

  const isPaused = pipe(
    counter[FlowableObservableLike_isPaused],
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