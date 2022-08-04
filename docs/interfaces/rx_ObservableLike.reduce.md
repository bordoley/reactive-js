[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / reduce

# Interface: reduce

[rx/ObservableLike](../modules/rx_ObservableLike.md).reduce

## Callable

### reduce

▸ **reduce**<`T`, `TAcc`, `C`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>
