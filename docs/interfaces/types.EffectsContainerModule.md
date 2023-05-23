[Reactive-JS](../README.md) / [types](../modules/types.md) / EffectsContainerModule

# Interface: EffectsContainerModule<C\>

[types](../modules/types.md).EffectsContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`EffectsContainerModule`**

  ↳ [`ObservableModule`](Observable.ObservableModule.md)

## Table of contents

### Operator Methods

- [dispatchTo](types.EffectsContainerModule.md#dispatchto)
- [enqueue](types.EffectsContainerModule.md#enqueue)
- [forEach](types.EffectsContainerModule.md#foreach)
- [ignoreElements](types.EffectsContainerModule.md#ignoreelements)

## Operator Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`\>
