[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / StatefulContainerBaseTypeClass

# Interface: StatefulContainerBaseTypeClass<C\>

[type-classes](../modules/type_classes.md).StatefulContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`StatefulContainerBaseTypeClass`**

  ↳ [`Signature`](EventSource.Signature.md)

## Table of contents

### Constructor Methods

- [generate](type_classes.StatefulContainerBaseTypeClass.md#generate)

### Operator Methods

- [ignoreElements](type_classes.StatefulContainerBaseTypeClass.md#ignoreelements)

## Constructor Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

Generates a Container from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

## Operator Methods

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`\>
