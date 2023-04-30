[Reactive-JS](../README.md) / containers

# Module: containers

## Table of contents

### Container Interfaces

- [AsyncIterableContainerLike](../interfaces/containers.AsyncIterableContainerLike.md)
- [ContainerLike](../interfaces/containers.ContainerLike.md)
- [EnumeratorLike](../interfaces/containers.EnumeratorLike.md)
- [IterableContainerLike](../interfaces/containers.IterableContainerLike.md)
- [PromiseContainerLike](../interfaces/containers.PromiseContainerLike.md)
- [ReadonlyArrayContainerLike](../interfaces/containers.ReadonlyArrayContainerLike.md)

### Other Interfaces

- [EnumeratorContainerLike](../interfaces/containers.EnumeratorContainerLike.md)

### TypeClass Interfaces

- [Buffer](../interfaces/containers.Buffer.md)
- [Concat](../interfaces/containers.Concat.md)
- [ConcatAll](../interfaces/containers.ConcatAll.md)
- [ConcatMap](../interfaces/containers.ConcatMap.md)
- [ConcatWith](../interfaces/containers.ConcatWith.md)
- [Contains](../interfaces/containers.Contains.md)
- [DistinctUntilChanged](../interfaces/containers.DistinctUntilChanged.md)
- [Empty](../interfaces/containers.Empty.md)
- [EndWith](../interfaces/containers.EndWith.md)
- [Enumerate](../interfaces/containers.Enumerate.md)
- [EverySatisfy](../interfaces/containers.EverySatisfy.md)
- [First](../interfaces/containers.First.md)
- [FlatMapIterable](../interfaces/containers.FlatMapIterable.md)
- [ForEach](../interfaces/containers.ForEach.md)
- [ForkConcat](../interfaces/containers.ForkConcat.md)
- [ForkZip](../interfaces/containers.ForkZip.md)
- [FromAsyncIterable](../interfaces/containers.FromAsyncIterable.md)
- [FromEnumeratorFactory](../interfaces/containers.FromEnumeratorFactory.md)
- [FromFactory](../interfaces/containers.FromFactory.md)
- [FromIterable](../interfaces/containers.FromIterable.md)
- [FromOptional](../interfaces/containers.FromOptional.md)
- [FromReadonlyArray](../interfaces/containers.FromReadonlyArray.md)
- [Generate](../interfaces/containers.Generate.md)
- [Identity](../interfaces/containers.Identity.md)
- [IgnoreElements](../interfaces/containers.IgnoreElements.md)
- [Keep](../interfaces/containers.Keep.md)
- [KeepType](../interfaces/containers.KeepType.md)
- [Last](../interfaces/containers.Last.md)
- [Map](../interfaces/containers.Map.md)
- [MapTo](../interfaces/containers.MapTo.md)
- [NoneSatisfy](../interfaces/containers.NoneSatisfy.md)
- [Pairwise](../interfaces/containers.Pairwise.md)
- [Pick](../interfaces/containers.Pick.md)
- [Reduce](../interfaces/containers.Reduce.md)
- [Repeat](../interfaces/containers.Repeat.md)
- [Scan](../interfaces/containers.Scan.md)
- [SkipFirst](../interfaces/containers.SkipFirst.md)
- [SomeSatisfy](../interfaces/containers.SomeSatisfy.md)
- [StartWith](../interfaces/containers.StartWith.md)
- [TakeFirst](../interfaces/containers.TakeFirst.md)
- [TakeLast](../interfaces/containers.TakeLast.md)
- [TakeWhile](../interfaces/containers.TakeWhile.md)
- [ToIterable](../interfaces/containers.ToIterable.md)
- [ToReadonlyArray](../interfaces/containers.ToReadonlyArray.md)
- [Zip](../interfaces/containers.Zip.md)
- [ZipWith](../interfaces/containers.ZipWith.md)

### Type Aliases

- [ContainerOf](containers.md#containerof)
- [ContainerOperator](containers.md#containeroperator)

## Type Aliases

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `[___ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___ContainerLike_T]`: `T`  }[typeof `ContainerLike_type`]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
