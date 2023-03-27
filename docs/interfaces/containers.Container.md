[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Container

# Interface: Container<C\>

[containers](../modules/containers.md).Container

Base type for Container type classes.

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- **`Container`**

  ↳ [`Buffer`](containers.Buffer.md)

  ↳ [`CatchError`](containers.CatchError.md)

  ↳ [`Concat`](containers.Concat.md)

  ↳ [`ConcatAll`](containers.ConcatAll.md)

  ↳ [`ConcatMap`](containers.ConcatMap.md)

  ↳ [`ConcatWith`](containers.ConcatWith.md)

  ↳ [`Contains`](containers.Contains.md)

  ↳ [`DecodeWithCharset`](containers.DecodeWithCharset.md)

  ↳ [`Defer`](containers.Defer.md)

  ↳ [`DistinctUntilChanged`](containers.DistinctUntilChanged.md)

  ↳ [`EncodeUtf8`](containers.EncodeUtf8.md)

  ↳ [`EndWith`](containers.EndWith.md)

  ↳ [`Enumerate`](containers.Enumerate.md)

  ↳ [`Every`](containers.Every.md)

  ↳ [`EverySatisfy`](containers.EverySatisfy.md)

  ↳ [`Empty`](containers.Empty.md)

  ↳ [`First`](containers.First.md)

  ↳ [`FirstAsync`](containers.FirstAsync.md)

  ↳ [`FlatMapIterable`](containers.FlatMapIterable.md)

  ↳ [`ForEach`](containers.ForEach.md)

  ↳ [`ForkConcat`](containers.ForkConcat.md)

  ↳ [`ForkZip`](containers.ForkZip.md)

  ↳ [`FromAsyncIterable`](containers.FromAsyncIterable.md)

  ↳ [`FromFactory`](containers.FromFactory.md)

  ↳ [`FromIterable`](containers.FromIterable.md)

  ↳ [`FromOptional`](containers.FromOptional.md)

  ↳ [`FromReadonlyArray`](containers.FromReadonlyArray.md)

  ↳ [`Generate`](containers.Generate.md)

  ↳ [`IgnoreElements`](containers.IgnoreElements.md)

  ↳ [`Keep`](containers.Keep.md)

  ↳ [`KeepType`](containers.KeepType.md)

  ↳ [`Last`](containers.Last.md)

  ↳ [`LastAsync`](containers.LastAsync.md)

  ↳ [`Map`](containers.Map.md)

  ↳ [`MapTo`](containers.MapTo.md)

  ↳ [`Never`](containers.Never.md)

  ↳ [`NoneSatisfy`](containers.NoneSatisfy.md)

  ↳ [`Pairwise`](containers.Pairwise.md)

  ↳ [`Pick`](containers.Pick.md)

  ↳ [`Reduce`](containers.Reduce.md)

  ↳ [`Repeat`](containers.Repeat.md)

  ↳ [`Scan`](containers.Scan.md)

  ↳ [`SkipFirst`](containers.SkipFirst.md)

  ↳ [`Some`](containers.Some.md)

  ↳ [`SomeSatisfy`](containers.SomeSatisfy.md)

  ↳ [`StartWith`](containers.StartWith.md)

  ↳ [`TakeFirst`](containers.TakeFirst.md)

  ↳ [`TakeLast`](containers.TakeLast.md)

  ↳ [`TakeWhile`](containers.TakeWhile.md)

  ↳ [`ThrowIfEmpty`](containers.ThrowIfEmpty.md)

  ↳ [`Throws`](containers.Throws.md)

  ↳ [`ToIterable`](containers.ToIterable.md)

  ↳ [`ToReadonlyArray`](containers.ToReadonlyArray.md)

  ↳ [`Zip`](containers.Zip.md)

  ↳ [`ZipWith`](containers.ZipWith.md)

  ↳ [`CombineLatest`](rx.CombineLatest.md)

  ↳ [`CurrentTime`](rx.CurrentTime.md)

  ↳ [`Enqueue`](rx.Enqueue.md)

  ↳ [`Exhaust`](rx.Exhaust.md)

  ↳ [`ExhaustMap`](rx.ExhaustMap.md)

  ↳ [`ForkCombineLatest`](rx.ForkCombineLatest.md)

  ↳ [`ForkMerge`](rx.ForkMerge.md)

  ↳ [`ForkZipLatest`](rx.ForkZipLatest.md)

  ↳ [`FromEnumerable`](rx.FromEnumerable.md)

  ↳ [`FromRunnable`](rx.FromRunnable.md)

  ↳ [`GenerateLast`](rx.GenerateLast.md)

  ↳ [`Lift`](rx.Lift.md)

  ↳ [`Merge`](rx.Merge.md)

  ↳ [`MergeAll`](rx.MergeAll.md)

  ↳ [`MergeMap`](rx.MergeMap.md)

  ↳ [`MergeWith`](rx.MergeWith.md)

  ↳ [`Retry`](rx.Retry.md)

  ↳ [`ScanLast`](rx.ScanLast.md)

  ↳ [`ScanMany`](rx.ScanMany.md)

  ↳ [`Spring`](rx.Spring.md)

  ↳ [`SwitchAll`](rx.SwitchAll.md)

  ↳ [`SwitchMap`](rx.SwitchMap.md)

  ↳ [`TakeUntil`](rx.TakeUntil.md)

  ↳ [`Throttle`](rx.Throttle.md)

  ↳ [`Timeout`](rx.Timeout.md)

  ↳ [`ToEnumerable`](rx.ToEnumerable.md)

  ↳ [`ToObservable`](rx.ToObservable.md)

  ↳ [`ToRunnable`](rx.ToRunnable.md)

  ↳ [`Tween`](rx.Tween.md)

  ↳ [`WithCurrentTime`](rx.WithCurrentTime.md)

  ↳ [`WithLatestFrom`](rx.WithLatestFrom.md)

  ↳ [`ZipLatest`](rx.ZipLatest.md)

  ↳ [`ZipWithLatestFrom`](rx.ZipWithLatestFrom.md)

  ↳ [`FromAsyncEnumerable`](streaming.FromAsyncEnumerable.md)

  ↳ [`FromFlowable`](streaming.FromFlowable.md)

  ↳ [`ToAsyncEnumerable`](streaming.ToAsyncEnumerable.md)

  ↳ [`ToFlowable`](streaming.ToFlowable.md)

## Table of contents

### Properties

- [ContainerLike\_type](containers.Container.md#containerlike_type)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`
