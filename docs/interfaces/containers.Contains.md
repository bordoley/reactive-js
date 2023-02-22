[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Contains

# Interface: Contains<C, O\>

[containers](../modules/containers.md).Contains

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Contains`**

## Table of contents

### Operator Properties

- [contains](containers.Contains.md#contains)

## Operator Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: `O` & { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `O` & { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  } |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>
