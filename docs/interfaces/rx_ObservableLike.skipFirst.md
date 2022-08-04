[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / skipFirst

# Interface: skipFirst

[rx/ObservableLike](../modules/rx_ObservableLike.md).skipFirst

## Callable

### skipFirst

▸ **skipFirst**<`T`, `C`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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
