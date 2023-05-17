[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / ConcreteContainerBaseTypeClass

# Interface: ConcreteContainerBaseTypeClass<C\>

[type-classes](../modules/type_classes.md).ConcreteContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`ConcreteContainerBaseTypeClass`**

  ↳ [`IterableModule`](Iterable.IterableModule.md)

  ↳ [`RunnableContainerTypeClass`](type_classes.RunnableContainerTypeClass.md)

  ↳ [`EnumerableContainerTypeClass`](type_classes.EnumerableContainerTypeClass.md)

## Table of contents

### Constructor Methods

- [empty](type_classes.ConcreteContainerBaseTypeClass.md#empty)
- [fromEnumerable](type_classes.ConcreteContainerBaseTypeClass.md#fromenumerable)
- [fromEnumeratorFactory](type_classes.ConcreteContainerBaseTypeClass.md#fromenumeratorfactory)
- [fromFactory](type_classes.ConcreteContainerBaseTypeClass.md#fromfactory)
- [fromIterable](type_classes.ConcreteContainerBaseTypeClass.md#fromiterable)
- [fromOptional](type_classes.ConcreteContainerBaseTypeClass.md#fromoptional)
- [fromReadonlyArray](type_classes.ConcreteContainerBaseTypeClass.md#fromreadonlyarray)
- [fromValue](type_classes.ConcreteContainerBaseTypeClass.md#fromvalue)

### Transform Methods

- [toReadonlyArray](type_classes.ConcreteContainerBaseTypeClass.md#toreadonlyarray)

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

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

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

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>
