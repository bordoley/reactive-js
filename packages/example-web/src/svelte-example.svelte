<script>
import * as Scheduler from "@reactive-js/core/concurrent/Scheduler";
import * as Observable from "@reactive-js/core/concurrent/Observable";
import { subscribe } from "@reactive-js/core/integrations/svelte";
import {
  bindMethod,
  increment,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import {
  PauseableLike_isPaused,
  PauseableLike_pause, 
  PauseableLike_resume
} from "@reactive-js/core/concurrent";
import * as Enumerable from "@reactive-js/core/collections/Enumerable";

  const scheduler = Scheduler.createHostScheduler();

  const counter = pipe(
    Enumerable.generate(increment, returns(-1)),
    Observable.fromEnumerable({delay: 500}),
    Observable.flow(scheduler),
  );

  const pause = bindMethod(counter, PauseableLike_pause);
  const resume = bindMethod(counter, PauseableLike_resume);

  const isPaused = pipe(
    counter[PauseableLike_isPaused],
    // FIXME: Maybe we should add a function to avoid the need for scheduling?
    Observable.fromStore(),
    subscribe(scheduler),
  );

  const counterValue = pipe(
     counter,
     subscribe(scheduler),
  );
</script>

<main>
	<h1>{$counterValue ?? 0}</h1>
   <button 
     on:click={
      ($isPaused ?? counter[PauseableLike_isPaused]) ? resume : pause
    }>{
      ($isPaused ?? counter[PauseableLike_isPaused]) ? "Resume" : "Pause"
    }</button>
</main>