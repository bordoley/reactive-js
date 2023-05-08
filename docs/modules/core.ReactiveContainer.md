[Reactive-JS](../README.md) / [core](core.md) / ReactiveContainer

# Namespace: ReactiveContainer

[core](core.md).ReactiveContainer

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/core.ReactiveContainer.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/core.ReactiveContainer.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/core.ReactiveContainer.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/core.ReactiveContainer.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/core.ReactiveContainer.SpringAnimationConfig.md)

### TypeClass Interfaces

- [Animate](../interfaces/core.ReactiveContainer.Animate.md)
- [BackpressureStrategy](../interfaces/core.ReactiveContainer.BackpressureStrategy.md)
- [CatchError](../interfaces/core.ReactiveContainer.CatchError.md)
- [CombineLatest](../interfaces/core.ReactiveContainer.CombineLatest.md)
- [CurrentTime](../interfaces/core.ReactiveContainer.CurrentTime.md)
- [DecodeWithCharset](../interfaces/core.ReactiveContainer.DecodeWithCharset.md)
- [Defer](../interfaces/core.ReactiveContainer.Defer.md)
- [DispatchTo](../interfaces/core.ReactiveContainer.DispatchTo.md)
- [Empty](../interfaces/core.ReactiveContainer.Empty.md)
- [EncodeUtf8](../interfaces/core.ReactiveContainer.EncodeUtf8.md)
- [Enqueue](../interfaces/core.ReactiveContainer.Enqueue.md)
- [Exhaust](../interfaces/core.ReactiveContainer.Exhaust.md)
- [ExhaustMap](../interfaces/core.ReactiveContainer.ExhaustMap.md)
- [FirstAsync](../interfaces/core.ReactiveContainer.FirstAsync.md)
- [ForkCombineLatest](../interfaces/core.ReactiveContainer.ForkCombineLatest.md)
- [ForkMerge](../interfaces/core.ReactiveContainer.ForkMerge.md)
- [ForkZipLatest](../interfaces/core.ReactiveContainer.ForkZipLatest.md)
- [FromEnumeratorFactory](../interfaces/core.ReactiveContainer.FromEnumeratorFactory.md)
- [FromFactory](../interfaces/core.ReactiveContainer.FromFactory.md)
- [FromIterable](../interfaces/core.ReactiveContainer.FromIterable.md)
- [FromOptional](../interfaces/core.ReactiveContainer.FromOptional.md)
- [FromReadonlyArray](../interfaces/core.ReactiveContainer.FromReadonlyArray.md)
- [Generate](../interfaces/core.ReactiveContainer.Generate.md)
- [LastAsync](../interfaces/core.ReactiveContainer.LastAsync.md)
- [Merge](../interfaces/core.ReactiveContainer.Merge.md)
- [MergeAll](../interfaces/core.ReactiveContainer.MergeAll.md)
- [MergeMap](../interfaces/core.ReactiveContainer.MergeMap.md)
- [MergeWith](../interfaces/core.ReactiveContainer.MergeWith.md)
- [Multicast](../interfaces/core.ReactiveContainer.Multicast.md)
- [Never](../interfaces/core.ReactiveContainer.Never.md)
- [Retry](../interfaces/core.ReactiveContainer.Retry.md)
- [ScanLast](../interfaces/core.ReactiveContainer.ScanLast.md)
- [ScanMany](../interfaces/core.ReactiveContainer.ScanMany.md)
- [Share](../interfaces/core.ReactiveContainer.Share.md)
- [SwitchAll](../interfaces/core.ReactiveContainer.SwitchAll.md)
- [SwitchMap](../interfaces/core.ReactiveContainer.SwitchMap.md)
- [TakeUntil](../interfaces/core.ReactiveContainer.TakeUntil.md)
- [Throttle](../interfaces/core.ReactiveContainer.Throttle.md)
- [ThrowIfEmpty](../interfaces/core.ReactiveContainer.ThrowIfEmpty.md)
- [Throws](../interfaces/core.ReactiveContainer.Throws.md)
- [Timeout](../interfaces/core.ReactiveContainer.Timeout.md)
- [WithCurrentTime](../interfaces/core.ReactiveContainer.WithCurrentTime.md)
- [WithLatestFrom](../interfaces/core.ReactiveContainer.WithLatestFrom.md)
- [ZipLatest](../interfaces/core.ReactiveContainer.ZipLatest.md)
- [ZipWithLatestFrom](../interfaces/core.ReactiveContainer.ZipWithLatestFrom.md)

### Type Aliases

- [AnimationConfig](core.ReactiveContainer.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/core.ReactiveContainer.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/core.ReactiveContainer.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/core.ReactiveContainer.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.ReactiveContainer.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.ReactiveContainer.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/core.ReactiveContainer.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.ReactiveContainer.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.ReactiveContainer.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
