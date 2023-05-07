[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / LastAsync

# Interface: LastAsync<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).LastAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Transform Methods

- [lastAsync](rx.Reactive.LastAsync.md#lastasync)

## Transform Methods

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](util.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>
