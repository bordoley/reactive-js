[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Container Interfaces

- [EnumerableLike](../interfaces/rx.EnumerableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)
- [SubjectLike](../interfaces/rx.SubjectLike.md)

### Other Interfaces

- [EnumeratorLike](../interfaces/rx.EnumeratorLike.md)
- [ObserverLike](../interfaces/rx.ObserverLike.md)

### TypeClass Interfaces

- [CombineLatest](../interfaces/rx.CombineLatest.md)
- [Exhaust](../interfaces/rx.Exhaust.md)
- [ExhaustMap](../interfaces/rx.ExhaustMap.md)
- [ForkCombineLatest](../interfaces/rx.ForkCombineLatest.md)
- [ForkMerge](../interfaces/rx.ForkMerge.md)
- [ForkZipLatest](../interfaces/rx.ForkZipLatest.md)
- [FromEnumerable](../interfaces/rx.FromEnumerable.md)
- [FromRunnable](../interfaces/rx.FromRunnable.md)
- [Lift](../interfaces/rx.Lift.md)
- [Merge](../interfaces/rx.Merge.md)
- [MergeAll](../interfaces/rx.MergeAll.md)
- [MergeMap](../interfaces/rx.MergeMap.md)
- [MergeWith](../interfaces/rx.MergeWith.md)
- [Retry](../interfaces/rx.Retry.md)
- [ScanAsync](../interfaces/rx.ScanAsync.md)
- [SwitchAll](../interfaces/rx.SwitchAll.md)
- [SwitchMap](../interfaces/rx.SwitchMap.md)
- [TakeUntil](../interfaces/rx.TakeUntil.md)
- [Throttle](../interfaces/rx.Throttle.md)
- [Timeout](../interfaces/rx.Timeout.md)
- [ToEnumerable](../interfaces/rx.ToEnumerable.md)
- [ToObservable](../interfaces/rx.ToObservable.md)
- [ToRunnable](../interfaces/rx.ToRunnable.md)
- [WithLatestFrom](../interfaces/rx.WithLatestFrom.md)
- [ZipLatest](../interfaces/rx.ZipLatest.md)
- [ZipWithLatestFrom](../interfaces/rx.ZipWithLatestFrom.md)

### Type Aliases

- [AsyncReducer](rx.md#asyncreducer)
- [ThrottleMode](rx.md#throttlemode)

### Variables

- [ThrottleMode\_first](rx.md#throttlemode_first)
- [ThrottleMode\_interval](rx.md#throttlemode_interval)
- [ThrottleMode\_last](rx.md#throttlemode_last)

## Type Aliases

### AsyncReducer

Ƭ **AsyncReducer**<`C`, `T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](containers.md#containerof)<`C`, `TAcc`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |
| `T` | `T` |
| `TAcc` | `TAcc` |

___

### ThrottleMode

Ƭ **ThrottleMode**: typeof [`ThrottleMode_first`](rx.md#throttlemode_first) \| typeof [`ThrottleMode_last`](rx.md#throttlemode_last) \| typeof [`ThrottleMode_interval`](rx.md#throttlemode_interval)

## Variables

### ThrottleMode\_first

• `Const` **ThrottleMode\_first**: unique `symbol`

___

### ThrottleMode\_interval

• `Const` **ThrottleMode\_interval**: unique `symbol`

___

### ThrottleMode\_last

• `Const` **ThrottleMode\_last**: unique `symbol`
