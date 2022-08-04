[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / keep

# Interface: keep

[rx/ObservableLike](../modules/rx_ObservableLike.md).keep

## Callable

### keep

▸ **keep**<`T`, `C`\>(`predicate`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

### keep

▸ **keep**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>
