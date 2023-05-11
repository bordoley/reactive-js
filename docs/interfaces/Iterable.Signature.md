[Reactive-JS](../README.md) / [Iterable](../modules/Iterable.md) / Signature

# Interface: Signature

[Iterable](../modules/Iterable.md).Signature

## Hierarchy

- [`ConcreteContainerBaseTypeClass`](type_classes.ConcreteContainerBaseTypeClass.md)<[`Type`](../modules/Iterable.md#type)\>

- [`BlockingContainerBaseTypeClass`](type_classes.BlockingContainerBaseTypeClass.md)<[`Type`](../modules/Iterable.md#type)\>

- [`EnumerableContainerBaseTypeClass`](type_classes.EnumerableContainerBaseTypeClass.md)<[`Type`](../modules/Iterable.md#type)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Methods

- [empty](Iterable.Signature.md#empty)
- [fromEnumeratorFactory](Iterable.Signature.md#fromenumeratorfactory)
- [fromFactory](Iterable.Signature.md#fromfactory)
- [fromIterable](Iterable.Signature.md#fromiterable)
- [fromOptional](Iterable.Signature.md#fromoptional)
- [fromReadonlyArray](Iterable.Signature.md#fromreadonlyarray)
- [fromValue](Iterable.Signature.md#fromvalue)

### Transform Methods

- [enumerate](Iterable.Signature.md#enumerate)
- [toIterable](Iterable.Signature.md#toiterable)
- [toReadonlyArray](Iterable.Signature.md#toreadonlyarray)

## Constructor Methods

### empty

▸ **empty**<`T`\>(): `Iterable`<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[empty](type_classes.ConcreteContainerBaseTypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromEnumeratorFactory](type_classes.ConcreteContainerBaseTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromFactory](type_classes.ConcreteContainerBaseTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromIterable](type_classes.ConcreteContainerBaseTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromOptional](type_classes.ConcreteContainerBaseTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromReadonlyArray](type_classes.ConcreteContainerBaseTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromValue](type_classes.ConcreteContainerBaseTypeClass.md#fromvalue)

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerBaseTypeClass](type_classes.EnumerableContainerBaseTypeClass.md).[enumerate](type_classes.EnumerableContainerBaseTypeClass.md#enumerate)

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableContainerBaseTypeClass](type_classes.EnumerableContainerBaseTypeClass.md).[toIterable](type_classes.EnumerableContainerBaseTypeClass.md#toiterable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Inherited from

[BlockingContainerBaseTypeClass](type_classes.BlockingContainerBaseTypeClass.md).[toReadonlyArray](type_classes.BlockingContainerBaseTypeClass.md#toreadonlyarray)
