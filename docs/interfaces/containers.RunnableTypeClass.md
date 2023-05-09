[Reactive-JS](../README.md) / [containers](../modules/containers.md) / RunnableTypeClass

# Interface: RunnableTypeClass<C\>

[containers](../modules/containers.md).RunnableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](containers.Container.Type.md) |

## Hierarchy

- **`RunnableTypeClass`**

  ↳ [`TypeClass`](containers.EnumeratorContainer.TypeClass.md)

  ↳ [`TypeClass`](containers.IterableContainer.TypeClass.md)

  ↳ [`TypeClass`](containers.ReadonlyArrayContainer.TypeClass.md)

  ↳ [`RunnableObservableTypeClass`](containers.RunnableObservableTypeClass.md)

## Table of contents

### Transform Properties

- [contains](containers.RunnableTypeClass.md#contains)
- [toRunnable](containers.RunnableTypeClass.md#torunnable)

### Transform Methods

- [everySatisfy](containers.RunnableTypeClass.md#everysatisfy)
- [first](containers.RunnableTypeClass.md#first)
- [flow](containers.RunnableTypeClass.md#flow)
- [last](containers.RunnableTypeClass.md#last)
- [noneSatisfy](containers.RunnableTypeClass.md#nonesatisfy)
- [reduce](containers.RunnableTypeClass.md#reduce)
- [someSatisfy](containers.RunnableTypeClass.md#somesatisfy)
- [toReadonlyArray](containers.RunnableTypeClass.md#toreadonlyarray)

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Container.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, readonly `T`[]\>
