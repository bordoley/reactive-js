[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/rx.DelayAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/rx.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/rx.SpringAnimationConfig.md)
- [TweenAnimationConfig](../interfaces/rx.TweenAnimationConfig.md)

### Container Interfaces

- [EnumerableLike](../interfaces/rx.EnumerableLike.md)
- [FlowableObservableLike](../interfaces/rx.FlowableObservableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [PublisherLike](../interfaces/rx.PublisherLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)

### Other Interfaces

- [InteractiveObservableLike](../interfaces/rx.InteractiveObservableLike.md)
- [ObserverLike](../interfaces/rx.ObserverLike.md)

### TypeClass Interfaces

- [Animate](../interfaces/rx.Animate.md)
- [BackpressureStrategy](../interfaces/rx.BackpressureStrategy.md)
- [CatchError](../interfaces/rx.CatchError.md)
- [CombineLatest](../interfaces/rx.CombineLatest.md)
- [CurrentTime](../interfaces/rx.CurrentTime.md)
- [DecodeWithCharset](../interfaces/rx.DecodeWithCharset.md)
- [Defer](../interfaces/rx.Defer.md)
- [Empty](../interfaces/rx.Empty.md)
- [EncodeUtf8](../interfaces/rx.EncodeUtf8.md)
- [Enqueue](../interfaces/rx.Enqueue.md)
- [EnumerateAsync](../interfaces/rx.EnumerateAsync.md)
- [Exhaust](../interfaces/rx.Exhaust.md)
- [ExhaustMap](../interfaces/rx.ExhaustMap.md)
- [FirstAsync](../interfaces/rx.FirstAsync.md)
- [Flow](../interfaces/rx.Flow.md)
- [ForkCombineLatest](../interfaces/rx.ForkCombineLatest.md)
- [ForkMerge](../interfaces/rx.ForkMerge.md)
- [ForkZipLatest](../interfaces/rx.ForkZipLatest.md)
- [FromEnumerable](../interfaces/rx.FromEnumerable.md)
- [FromEnumeratorFactory](../interfaces/rx.FromEnumeratorFactory.md)
- [FromFactory](../interfaces/rx.FromFactory.md)
- [FromIterable](../interfaces/rx.FromIterable.md)
- [FromOptional](../interfaces/rx.FromOptional.md)
- [FromReadonlyArray](../interfaces/rx.FromReadonlyArray.md)
- [FromRunnable](../interfaces/rx.FromRunnable.md)
- [Generate](../interfaces/rx.Generate.md)
- [GenerateLast](../interfaces/rx.GenerateLast.md)
- [LastAsync](../interfaces/rx.LastAsync.md)
- [Merge](../interfaces/rx.Merge.md)
- [MergeAll](../interfaces/rx.MergeAll.md)
- [MergeMap](../interfaces/rx.MergeMap.md)
- [MergeWith](../interfaces/rx.MergeWith.md)
- [Never](../interfaces/rx.Never.md)
- [Retry](../interfaces/rx.Retry.md)
- [ScanLast](../interfaces/rx.ScanLast.md)
- [ScanMany](../interfaces/rx.ScanMany.md)
- [SwitchAll](../interfaces/rx.SwitchAll.md)
- [SwitchMap](../interfaces/rx.SwitchMap.md)
- [TakeUntil](../interfaces/rx.TakeUntil.md)
- [Throttle](../interfaces/rx.Throttle.md)
- [ThrowIfEmpty](../interfaces/rx.ThrowIfEmpty.md)
- [Throws](../interfaces/rx.Throws.md)
- [Timeout](../interfaces/rx.Timeout.md)
- [ToEnumerable](../interfaces/rx.ToEnumerable.md)
- [ToObservable](../interfaces/rx.ToObservable.md)
- [ToRunnable](../interfaces/rx.ToRunnable.md)
- [WithCurrentTime](../interfaces/rx.WithCurrentTime.md)
- [WithLatestFrom](../interfaces/rx.WithLatestFrom.md)
- [ZipLatest](../interfaces/rx.ZipLatest.md)
- [ZipWithLatestFrom](../interfaces/rx.ZipWithLatestFrom.md)

### Type Aliases

- [AnimationConfig](rx.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/rx.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/rx.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`TweenAnimationConfig`](../interfaces/rx.TweenAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/rx.SpringAnimationConfig.md) & { `selector?`: `never`  } : [`TweenAnimationConfig`](../interfaces/rx.TweenAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/rx.SpringAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
