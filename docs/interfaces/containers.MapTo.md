[Reactive-JS](../README.md) / [containers](../modules/containers.md) / MapTo

# Interface: MapTo<C, O\>

[containers](../modules/containers.md).MapTo

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`MapTo`**

## Table of contents

### Operator Methods

- [mapTo](containers.MapTo.md#mapto)

## Operator Methods

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
