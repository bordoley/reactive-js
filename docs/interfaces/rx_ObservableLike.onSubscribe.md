[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / onSubscribe

# Interface: onSubscribe

[rx/ObservableLike](../modules/rx_ObservableLike.md).onSubscribe

## Callable

### onSubscribe

▸ **onSubscribe**<`T`, `C`\>(`f`): [`Function1`](../modules/functions.md#function1)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<`void` \| [`DisposableOrTeardown`](../modules/util.md#disposableorteardown)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
