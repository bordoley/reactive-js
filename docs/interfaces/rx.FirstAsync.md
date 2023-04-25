[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FirstAsync

# Interface: FirstAsync<C\>

[rx](../modules/rx.md).FirstAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Table of contents

### Transform Methods

- [firstAsync](rx.FirstAsync.md#firstasync)

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`PromiseableLike`](containers.PromiseableLike.md)<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.scheduler?` | [`SchedulerLike`](scheduling.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](scheduling.SchedulerLike.md)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`PromiseableLike`](containers.PromiseableLike.md)<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>
