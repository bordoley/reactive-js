[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / distinctUntilChanged

# Interface: distinctUntilChanged

[rx/ObservableLike](../modules/rx_ObservableLike.md).distinctUntilChanged

## Callable

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`, `C`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
