[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [Container](../modules/containers.Container.md) / ForEach

# Interface: ForEach<C\>

[containers](../modules/containers.md).[Container](../modules/containers.Container.md).ForEach

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [forEach](containers.Container.ForEach.md#foreach)

## Operator Methods

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
