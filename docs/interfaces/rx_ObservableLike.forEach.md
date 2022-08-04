[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / forEach

# Interface: forEach

[rx/ObservableLike](../modules/rx_ObservableLike.md).forEach

## Callable

### forEach

▸ **forEach**<`T`, `C`\>(`effect`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

### forEach

▸ **forEach**<`T`\>(`effect`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>
