[Reactive-JS](../README.md) / [rx](rx.md) / Reactive

# Namespace: Reactive

[rx](rx.md).Reactive

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/rx.Reactive.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/rx.Reactive.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/rx.Reactive.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/rx.Reactive.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/rx.Reactive.SpringAnimationConfig.md)

### TypeClass Interfaces

- [Animate](../interfaces/rx.Reactive.Animate.md)
- [BackpressureStrategy](../interfaces/rx.Reactive.BackpressureStrategy.md)
- [CatchError](../interfaces/rx.Reactive.CatchError.md)
- [CombineLatest](../interfaces/rx.Reactive.CombineLatest.md)
- [CurrentTime](../interfaces/rx.Reactive.CurrentTime.md)
- [DecodeWithCharset](../interfaces/rx.Reactive.DecodeWithCharset.md)
- [Defer](../interfaces/rx.Reactive.Defer.md)
- [DispatchTo](../interfaces/rx.Reactive.DispatchTo.md)
- [EncodeUtf8](../interfaces/rx.Reactive.EncodeUtf8.md)
- [Enqueue](../interfaces/rx.Reactive.Enqueue.md)
- [Exhaust](../interfaces/rx.Reactive.Exhaust.md)
- [ExhaustMap](../interfaces/rx.Reactive.ExhaustMap.md)
- [FirstAsync](../interfaces/rx.Reactive.FirstAsync.md)
- [Flow](../interfaces/rx.Reactive.Flow.md)
- [ForkCombineLatest](../interfaces/rx.Reactive.ForkCombineLatest.md)
- [ForkMerge](../interfaces/rx.Reactive.ForkMerge.md)
- [ForkZipLatest](../interfaces/rx.Reactive.ForkZipLatest.md)
- [FromEnumerable](../interfaces/rx.Reactive.FromEnumerable.md)
- [FromRunnable](../interfaces/rx.Reactive.FromRunnable.md)
- [LastAsync](../interfaces/rx.Reactive.LastAsync.md)
- [Merge](../interfaces/rx.Reactive.Merge.md)
- [MergeAll](../interfaces/rx.Reactive.MergeAll.md)
- [MergeMap](../interfaces/rx.Reactive.MergeMap.md)
- [MergeWith](../interfaces/rx.Reactive.MergeWith.md)
- [Multicast](../interfaces/rx.Reactive.Multicast.md)
- [Never](../interfaces/rx.Reactive.Never.md)
- [Retry](../interfaces/rx.Reactive.Retry.md)
- [ScanLast](../interfaces/rx.Reactive.ScanLast.md)
- [ScanMany](../interfaces/rx.Reactive.ScanMany.md)
- [Share](../interfaces/rx.Reactive.Share.md)
- [SwitchAll](../interfaces/rx.Reactive.SwitchAll.md)
- [SwitchMap](../interfaces/rx.Reactive.SwitchMap.md)
- [TakeUntil](../interfaces/rx.Reactive.TakeUntil.md)
- [Throttle](../interfaces/rx.Reactive.Throttle.md)
- [ThrowIfEmpty](../interfaces/rx.Reactive.ThrowIfEmpty.md)
- [Throws](../interfaces/rx.Reactive.Throws.md)
- [Timeout](../interfaces/rx.Reactive.Timeout.md)
- [ToEnumerable](../interfaces/rx.Reactive.ToEnumerable.md)
- [ToObservable](../interfaces/rx.Reactive.ToObservable.md)
- [ToRunnable](../interfaces/rx.Reactive.ToRunnable.md)
- [WithCurrentTime](../interfaces/rx.Reactive.WithCurrentTime.md)
- [WithLatestFrom](../interfaces/rx.Reactive.WithLatestFrom.md)
- [ZipLatest](../interfaces/rx.Reactive.ZipLatest.md)
- [ZipWithLatestFrom](../interfaces/rx.Reactive.ZipWithLatestFrom.md)

### Type Aliases

- [AnimationConfig](rx.Reactive.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/rx.Reactive.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/rx.Reactive.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/rx.Reactive.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/rx.Reactive.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/rx.Reactive.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/rx.Reactive.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/rx.Reactive.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/rx.Reactive.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
