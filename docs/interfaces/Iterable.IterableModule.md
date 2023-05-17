[Reactive-JS](../README.md) / [Iterable](../modules/Iterable.md) / IterableModule

# Interface: IterableModule

[Iterable](../modules/Iterable.md).IterableModule

## Hierarchy

- [`ConcreteContainerBaseTypeClass`](type_classes.ConcreteContainerBaseTypeClass.md)<[`Type`](../modules/Iterable.md#type)\>

- [`EnumerableContainerBaseTypeClass`](type_classes.EnumerableContainerBaseTypeClass.md)<[`Type`](../modules/Iterable.md#type)\>

  ↳ **`IterableModule`**

## Table of contents

### Constructor Methods

- [empty](Iterable.IterableModule.md#empty)
- [fromEnumerable](Iterable.IterableModule.md#fromenumerable)
- [fromEnumeratorFactory](Iterable.IterableModule.md#fromenumeratorfactory)
- [fromFactory](Iterable.IterableModule.md#fromfactory)
- [fromIterable](Iterable.IterableModule.md#fromiterable)
- [fromOptional](Iterable.IterableModule.md#fromoptional)
- [fromReadonlyArray](Iterable.IterableModule.md#fromreadonlyarray)
- [fromValue](Iterable.IterableModule.md#fromvalue)

### Other Methods

- [toObservable](Iterable.IterableModule.md#toobservable)

### Transform Methods

- [enumerate](Iterable.IterableModule.md#enumerate)
- [toIterable](Iterable.IterableModule.md#toiterable)
- [toReadonlyArray](Iterable.IterableModule.md#toreadonlyarray)

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

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromEnumerable](type_classes.ConcreteContainerBaseTypeClass.md#fromenumerable)

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

## Other Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[toReadonlyArray](type_classes.ConcreteContainerBaseTypeClass.md#toreadonlyarray)
