[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/rx.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/rx.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/rx.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/rx.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/rx.SpringAnimationConfig.md)

### Container Interfaces

- [EnumerableContainer](../interfaces/rx.EnumerableContainer.md)
- [ObservableContainer](../interfaces/rx.ObservableContainer.md)
- [PauseableObservableContainer](../interfaces/rx.PauseableObservableContainer.md)
- [RunnableContainer](../interfaces/rx.RunnableContainer.md)

### Observable Interfaces

- [EnumerableLike](../interfaces/rx.EnumerableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [PauseableObservableLike](../interfaces/rx.PauseableObservableLike.md)
- [PublisherLike](../interfaces/rx.PublisherLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)

### Other Interfaces

- [ObserverLike](../interfaces/rx.ObserverLike.md)

### TypeClass Interfaces

- [Animate](../interfaces/rx.Animate.md)
- [BackpressureStrategy](../interfaces/rx.BackpressureStrategy.md)
- [CatchError](../interfaces/rx.CatchError.md)
- [CombineLatest](../interfaces/rx.CombineLatest.md)
- [CurrentTime](../interfaces/rx.CurrentTime.md)
- [DecodeWithCharset](../interfaces/rx.DecodeWithCharset.md)
- [Defer](../interfaces/rx.Defer.md)
- [DispatchTo](../interfaces/rx.DispatchTo.md)
- [EncodeUtf8](../interfaces/rx.EncodeUtf8.md)
- [Enqueue](../interfaces/rx.Enqueue.md)
- [Exhaust](../interfaces/rx.Exhaust.md)
- [ExhaustMap](../interfaces/rx.ExhaustMap.md)
- [FirstAsync](../interfaces/rx.FirstAsync.md)
- [Flow](../interfaces/rx.Flow.md)
- [ForkCombineLatest](../interfaces/rx.ForkCombineLatest.md)
- [ForkMerge](../interfaces/rx.ForkMerge.md)
- [ForkZipLatest](../interfaces/rx.ForkZipLatest.md)
- [FromEnumerable](../interfaces/rx.FromEnumerable.md)
- [FromRunnable](../interfaces/rx.FromRunnable.md)
- [LastAsync](../interfaces/rx.LastAsync.md)
- [Merge](../interfaces/rx.Merge.md)
- [MergeAll](../interfaces/rx.MergeAll.md)
- [MergeMap](../interfaces/rx.MergeMap.md)
- [MergeWith](../interfaces/rx.MergeWith.md)
- [Multicast](../interfaces/rx.Multicast.md)
- [Never](../interfaces/rx.Never.md)
- [Retry](../interfaces/rx.Retry.md)
- [ScanLast](../interfaces/rx.ScanLast.md)
- [ScanMany](../interfaces/rx.ScanMany.md)
- [Share](../interfaces/rx.Share.md)
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

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/rx.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/rx.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/rx.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/rx.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/rx.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/rx.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/rx.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/rx.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
