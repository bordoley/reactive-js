[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / ConcreteContainerTypeClass

# Interface: ConcreteContainerTypeClass<C\>

[type-classes](../modules/type_classes.md).ConcreteContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`ConcreteContainerTypeClass`**

  ↳ [`Signature`](Enumerator.Signature.md)

  ↳ [`Signature`](Iterable.Signature.md)

  ↳ [`Signature`](ReadonlyArray.Signature.md)

## Table of contents

### Constructor Methods

- [empty](type_classes.ConcreteContainerTypeClass.md#empty)
- [fromEnumerable](type_classes.ConcreteContainerTypeClass.md#fromenumerable)
- [fromEnumeratorFactory](type_classes.ConcreteContainerTypeClass.md#fromenumeratorfactory)
- [fromFactory](type_classes.ConcreteContainerTypeClass.md#fromfactory)
- [fromIterable](type_classes.ConcreteContainerTypeClass.md#fromiterable)
- [fromOptional](type_classes.ConcreteContainerTypeClass.md#fromoptional)
- [fromReadonlyArray](type_classes.ConcreteContainerTypeClass.md#fromreadonlyarray)
- [fromValue](type_classes.ConcreteContainerTypeClass.md#fromvalue)
- [generate](type_classes.ConcreteContainerTypeClass.md#generate)

## Constructor Methods

### empty

▸ **empty**<`T`\>(): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

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
