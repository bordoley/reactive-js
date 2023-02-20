[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ForEach

# Interface: ForEach<C, O\>

[containers](../modules/containers.md).ForEach

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](containers.StatefulContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ForEach`**

## Table of contents

### Operator Methods

- [forEach](containers.ForEach.md#foreach)

## Operator Methods

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
