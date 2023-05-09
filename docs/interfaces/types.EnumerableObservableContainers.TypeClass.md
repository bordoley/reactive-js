[Reactive-JS](../README.md) / [types](../modules/types.md) / [EnumerableObservableContainers](../modules/types.EnumerableObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[types](../modules/types.md).[EnumerableObservableContainers](../modules/types.EnumerableObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableContainer`](types.EnumerableContainer-1.md) |

## Hierarchy

- [`TypeClass`](types.RunnableObservableContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](types.EnumerableContainer.TypeClass.md)

## Table of contents

### Transform Properties

- [contains](types.EnumerableObservableContainers.TypeClass.md#contains)
- [toRunnable](types.EnumerableObservableContainers.TypeClass.md#torunnable)

### Constructor Methods

- [animate](types.EnumerableObservableContainers.TypeClass.md#animate)
- [currentTime](types.EnumerableObservableContainers.TypeClass.md#currenttime)
- [empty](types.EnumerableObservableContainers.TypeClass.md#empty)
- [fromEnumeratorFactory](types.EnumerableObservableContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](types.EnumerableObservableContainers.TypeClass.md#fromfactory)
- [fromIterable](types.EnumerableObservableContainers.TypeClass.md#fromiterable)
- [fromOptional](types.EnumerableObservableContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](types.EnumerableObservableContainers.TypeClass.md#fromreadonlyarray)
- [generate](types.EnumerableObservableContainers.TypeClass.md#generate)

### Transform Methods

- [everySatisfy](types.EnumerableObservableContainers.TypeClass.md#everysatisfy)
- [first](types.EnumerableObservableContainers.TypeClass.md#first)
- [flow](types.EnumerableObservableContainers.TypeClass.md#flow)
- [last](types.EnumerableObservableContainers.TypeClass.md#last)
- [multicast](types.EnumerableObservableContainers.TypeClass.md#multicast)
- [noneSatisfy](types.EnumerableObservableContainers.TypeClass.md#nonesatisfy)
- [reduce](types.EnumerableObservableContainers.TypeClass.md#reduce)
- [share](types.EnumerableObservableContainers.TypeClass.md#share)
- [someSatisfy](types.EnumerableObservableContainers.TypeClass.md#somesatisfy)
- [toReadonlyArray](types.EnumerableObservableContainers.TypeClass.md#toreadonlyarray)

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[contains](types.RunnableObservableContainers.TypeClass.md#contains)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[toRunnable](types.RunnableObservableContainers.TypeClass.md#torunnable)

## Constructor Methods

### animate

▸ **animate**<`T`\>(`configs`): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](../modules/types.RunnableObservableContainers.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](../modules/types.RunnableObservableContainers.md#animationconfig)<`T`\>[] |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[animate](types.RunnableObservableContainers.TypeClass.md#animate)

___

### currentTime

▸ **currentTime**(`options?`): [`Of`](../modules/types.Containers.md#of)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `number`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[currentTime](types.RunnableObservableContainers.TypeClass.md#currenttime)

___

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[empty](types.RunnableObservableContainers.TypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[fromEnumeratorFactory](types.RunnableObservableContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[fromFactory](types.RunnableObservableContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[fromIterable](types.RunnableObservableContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[fromOptional](types.RunnableObservableContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[fromReadonlyArray](types.RunnableObservableContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[generate](types.RunnableObservableContainers.TypeClass.md#generate)

___

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Containers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[everySatisfy](types.RunnableObservableContainers.TypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[first](types.RunnableObservableContainers.TypeClass.md#first)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[flow](types.RunnableObservableContainers.TypeClass.md#flow)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[last](types.RunnableObservableContainers.TypeClass.md#last)

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[multicast](types.RunnableObservableContainers.TypeClass.md#multicast)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[noneSatisfy](types.RunnableObservableContainers.TypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `TAcc`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[reduce](types.RunnableObservableContainers.TypeClass.md#reduce)

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[share](types.RunnableObservableContainers.TypeClass.md#share)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[someSatisfy](types.RunnableObservableContainers.TypeClass.md#somesatisfy)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](types.RunnableObservableContainers.TypeClass.md).[toReadonlyArray](types.RunnableObservableContainers.TypeClass.md#toreadonlyarray)
