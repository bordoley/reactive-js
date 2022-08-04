[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / map

# Interface: map

[rx/ObservableLike](../modules/rx_ObservableLike.md).map

## Callable

### map

▸ **map**<`TA`, `TB`, `C`\>(`mapper`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
