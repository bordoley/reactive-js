[Reactive-JS](../README.md) / [core](core.md) / Container

# Namespace: Container

[core](core.md).Container

## Table of contents

### TypeClass Interfaces

- [Buffer](../interfaces/core.Container.Buffer.md)
- [Concat](../interfaces/core.Container.Concat.md)
- [ConcatAll](../interfaces/core.Container.ConcatAll.md)
- [ConcatMap](../interfaces/core.Container.ConcatMap.md)
- [ConcatWith](../interfaces/core.Container.ConcatWith.md)
- [Contains](../interfaces/core.Container.Contains.md)
- [DistinctUntilChanged](../interfaces/core.Container.DistinctUntilChanged.md)
- [Empty](../interfaces/core.Container.Empty.md)
- [EndWith](../interfaces/core.Container.EndWith.md)
- [Enumerate](../interfaces/core.Container.Enumerate.md)
- [EverySatisfy](../interfaces/core.Container.EverySatisfy.md)
- [First](../interfaces/core.Container.First.md)
- [FlatMapIterable](../interfaces/core.Container.FlatMapIterable.md)
- [Flow](../interfaces/core.Container.Flow.md)
- [ForEach](../interfaces/core.Container.ForEach.md)
- [ForkConcat](../interfaces/core.Container.ForkConcat.md)
- [ForkZip](../interfaces/core.Container.ForkZip.md)
- [FromAsyncIterable](../interfaces/core.Container.FromAsyncIterable.md)
- [FromEnumerable](../interfaces/core.Container.FromEnumerable.md)
- [FromEnumeratorFactory](../interfaces/core.Container.FromEnumeratorFactory.md)
- [FromFactory](../interfaces/core.Container.FromFactory.md)
- [FromIterable](../interfaces/core.Container.FromIterable.md)
- [FromOptional](../interfaces/core.Container.FromOptional.md)
- [FromReadonlyArray](../interfaces/core.Container.FromReadonlyArray.md)
- [FromRunnable](../interfaces/core.Container.FromRunnable.md)
- [Generate](../interfaces/core.Container.Generate.md)
- [Identity](../interfaces/core.Container.Identity.md)
- [IgnoreElements](../interfaces/core.Container.IgnoreElements.md)
- [Keep](../interfaces/core.Container.Keep.md)
- [KeepType](../interfaces/core.Container.KeepType.md)
- [Last](../interfaces/core.Container.Last.md)
- [Map](../interfaces/core.Container.Map.md)
- [MapTo](../interfaces/core.Container.MapTo.md)
- [NoneSatisfy](../interfaces/core.Container.NoneSatisfy.md)
- [Pairwise](../interfaces/core.Container.Pairwise.md)
- [Pick](../interfaces/core.Container.Pick.md)
- [Reduce](../interfaces/core.Container.Reduce.md)
- [Repeat](../interfaces/core.Container.Repeat.md)
- [Scan](../interfaces/core.Container.Scan.md)
- [SkipFirst](../interfaces/core.Container.SkipFirst.md)
- [SomeSatisfy](../interfaces/core.Container.SomeSatisfy.md)
- [StartWith](../interfaces/core.Container.StartWith.md)
- [TakeFirst](../interfaces/core.Container.TakeFirst.md)
- [TakeLast](../interfaces/core.Container.TakeLast.md)
- [TakeWhile](../interfaces/core.Container.TakeWhile.md)
- [ToEnumerable](../interfaces/core.Container.ToEnumerable.md)
- [ToIterable](../interfaces/core.Container.ToIterable.md)
- [ToObservable](../interfaces/core.Container.ToObservable.md)
- [ToReadonlyArray](../interfaces/core.Container.ToReadonlyArray.md)
- [ToRunnable](../interfaces/core.Container.ToRunnable.md)
- [Zip](../interfaces/core.Container.Zip.md)
- [ZipWith](../interfaces/core.Container.ZipWith.md)

### Type Aliases

- [Of](core.Container.md#of)
- [Operator](core.Container.md#operator)

## Type Aliases

### Of

Ƭ **Of**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container-1.md) |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](core.Container.md#of)<`C`, `TA`\>, [`Of`](core.Container.md#of)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container-1.md) |
| `TA` | `TA` |
| `TB` | `TB` |
