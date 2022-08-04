[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / takeLast

# Interface: takeLast

[rx/ObservableLike](../modules/rx_ObservableLike.md).takeLast

## Callable

### takeLast

▸ **takeLast**<`T`, `C`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
