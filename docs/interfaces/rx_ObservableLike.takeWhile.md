[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / takeWhile

# Interface: takeWhile

[rx/ObservableLike](../modules/rx_ObservableLike.md).takeWhile

## Callable

### takeWhile

▸ **takeWhile**<`T`, `C`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
