[Reactive-JS](../README.md) / [ReadonlyArray](../modules/ReadonlyArray.md) / ReadonlyArrayModule

# Interface: ReadonlyArrayModule

[ReadonlyArray](../modules/ReadonlyArray.md).ReadonlyArrayModule

## Hierarchy

- [`ConcreteKeyedContainerTypeClass`](types.ConcreteKeyedContainerTypeClass.md)<[`Type`](../modules/ReadonlyArray.md#type)\>

- `Omit`<[`EnumerableTypeClass`](types.EnumerableTypeClass.md)<[`Type`](../modules/ReadonlyArray.md#type)\>, keyof [`ConcreteKeyedContainerTypeClass`](types.ConcreteKeyedContainerTypeClass.md)<[`Type`](../modules/ReadonlyArray.md#type)\> \| ``"enumerate"`` \| ``"keepType"``\>

  ↳ **`ReadonlyArrayModule`**

## Table of contents

### Operator Methods

- [keepType](ReadonlyArray.ReadonlyArrayModule.md#keeptype)

### Transform Methods

- [enumerate](ReadonlyArray.ReadonlyArrayModule.md#enumerate)
- [toEnumeratorFactory](ReadonlyArray.ReadonlyArrayModule.md#toenumeratorfactory)
- [toIterable](ReadonlyArray.ReadonlyArrayModule.md#toiterable)
- [toObservable](ReadonlyArray.ReadonlyArrayModule.md#toobservable)
- [toReadonlyArray](ReadonlyArray.ReadonlyArrayModule.md#toreadonlyarray)

## Operator Methods

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Overrides

[ConcreteKeyedContainerTypeClass](types.ConcreteKeyedContainerTypeClass.md).[keepType](types.ConcreteKeyedContainerTypeClass.md#keeptype)

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Overrides

ConcreteKeyedContainerTypeClass.keepType

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

___

### toEnumeratorFactory

▸ **toEnumeratorFactory**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Overrides

Omit.toEnumeratorFactory

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

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

#### Overrides

Omit.toIterable

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Overrides

Omit.toReadonlyArray
