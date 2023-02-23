[Reactive-JS](../README.md) / containers

# Module: containers

## Table of contents

### Container Interfaces

- [AsyncIterableLike](../interfaces/containers.AsyncIterableLike.md)
- [ContainerLike](../interfaces/containers.ContainerLike.md)
- [IterableLike](../interfaces/containers.IterableLike.md)
- [PromiseableLike](../interfaces/containers.PromiseableLike.md)
- [ReadonlyArrayLike](../interfaces/containers.ReadonlyArrayLike.md)
- [SequenceLike](../interfaces/containers.SequenceLike.md)
- [StatefulContainerLike](../interfaces/containers.StatefulContainerLike.md)

### Other Interfaces

- [ZipWith](../interfaces/containers.ZipWith.md)

### TypeClass Interfaces

- [Buffer](../interfaces/containers.Buffer.md)
- [CatchError](../interfaces/containers.CatchError.md)
- [Compute](../interfaces/containers.Compute.md)
- [Concat](../interfaces/containers.Concat.md)
- [ConcatAll](../interfaces/containers.ConcatAll.md)
- [ConcatMap](../interfaces/containers.ConcatMap.md)
- [ConcatWith](../interfaces/containers.ConcatWith.md)
- [Container](../interfaces/containers.Container.md)
- [Contains](../interfaces/containers.Contains.md)
- [DecodeWithCharset](../interfaces/containers.DecodeWithCharset.md)
- [Defer](../interfaces/containers.Defer.md)
- [DistinctUntilChanged](../interfaces/containers.DistinctUntilChanged.md)
- [Empty](../interfaces/containers.Empty.md)
- [EncodeUtf8](../interfaces/containers.EncodeUtf8.md)
- [EndWith](../interfaces/containers.EndWith.md)
- [EverySatisfy](../interfaces/containers.EverySatisfy.md)
- [FlatMapIterable](../interfaces/containers.FlatMapIterable.md)
- [ForEach](../interfaces/containers.ForEach.md)
- [ForkConcat](../interfaces/containers.ForkConcat.md)
- [ForkZip](../interfaces/containers.ForkZip.md)
- [FromAsyncIterable](../interfaces/containers.FromAsyncIterable.md)
- [FromIterable](../interfaces/containers.FromIterable.md)
- [FromOptional](../interfaces/containers.FromOptional.md)
- [FromReadonlyArray](../interfaces/containers.FromReadonlyArray.md)
- [FromSequence](../interfaces/containers.FromSequence.md)
- [Generate](../interfaces/containers.Generate.md)
- [IgnoreElements](../interfaces/containers.IgnoreElements.md)
- [Keep](../interfaces/containers.Keep.md)
- [KeepType](../interfaces/containers.KeepType.md)
- [Map](../interfaces/containers.Map.md)
- [MapTo](../interfaces/containers.MapTo.md)
- [Never](../interfaces/containers.Never.md)
- [NoneSatisfy](../interfaces/containers.NoneSatisfy.md)
- [Pairwise](../interfaces/containers.Pairwise.md)
- [Reduce](../interfaces/containers.Reduce.md)
- [Repeat](../interfaces/containers.Repeat.md)
- [Scan](../interfaces/containers.Scan.md)
- [SkipFirst](../interfaces/containers.SkipFirst.md)
- [SomeSatisfy](../interfaces/containers.SomeSatisfy.md)
- [StartWith](../interfaces/containers.StartWith.md)
- [TakeFirst](../interfaces/containers.TakeFirst.md)
- [TakeLast](../interfaces/containers.TakeLast.md)
- [TakeWhile](../interfaces/containers.TakeWhile.md)
- [ThrowIfEmpty](../interfaces/containers.ThrowIfEmpty.md)
- [Throws](../interfaces/containers.Throws.md)
- [ToAsyncIterable](../interfaces/containers.ToAsyncIterable.md)
- [ToIterable](../interfaces/containers.ToIterable.md)
- [ToReadonlyArray](../interfaces/containers.ToReadonlyArray.md)
- [ToSequence](../interfaces/containers.ToSequence.md)
- [Zip](../interfaces/containers.Zip.md)

### Type Aliases

- [ContainerOf](containers.md#containerof)
- [ContainerOperator](containers.md#containeroperator)

## Type Aliases

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `[ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[ContainerLike_T]`: `T`  }[typeof `ContainerLike_type`]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
