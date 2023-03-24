[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Pick

# Interface: Pick<C\>

[containers](../modules/containers.md).Pick

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Pick`**

## Table of contents

### Operator Methods

- [pick](containers.Pick.md#pick)

## Operator Methods

### pick

▸ **pick**<`T`\>(`key`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`]\>

▸ **pick**<`T`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`][keyof `T`[keyof `T`]]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | keyof `T` |
| `keyB` | keyof `T`[keyof `T`] |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`][keyof `T`[keyof `T`]]\>

▸ **pick**<`T`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`][keyof `T`[keyof `T`]]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | keyof `T` |
| `keyB` | keyof `T`[keyof `T`] |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`][keyof `T`[keyof `T`]]\>

▸ **pick**<`T`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`][keyof `T`[keyof `T`]][keyof `T`[keyof `T`][keyof `T`[keyof `T`]]]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | keyof `T` |
| `keyB` | keyof `T`[keyof `T`] |
| `keyC` | keyof `T`[keyof `T`][keyof `T`[keyof `T`]] |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`[keyof `T`][keyof `T`[keyof `T`]][keyof `T`[keyof `T`][keyof `T`[keyof `T`]]]\>
