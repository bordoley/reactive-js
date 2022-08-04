[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / throwIfEmpty

# Interface: throwIfEmpty

[rx/ObservableLike](../modules/rx_ObservableLike.md).throwIfEmpty

## Callable

### throwIfEmpty

▸ **throwIfEmpty**<`T`, `C`\>(`factory`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
