[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Share

# Interface: Share<C, O\>

[rx](../modules/rx.md).Share

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Transform Methods

- [share](rx.Share.md#share)

## Transform Methods

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `O` & { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `replay?`: `number`  } | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>
