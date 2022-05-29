[Reactive-JS](../README.md) / enumerable

# Module: enumerable

## Index

### Interfaces

* [EnumerableLike](../interfaces/enumerable.enumerablelike.md)
* [EnumeratorLike](../interfaces/enumerable.enumeratorlike.md)

### Type aliases

* [EnumerableOperator](enumerable.md#enumerableoperator)
* [EnumeratorOperator](enumerable.md#enumeratoroperator)

### Functions

* [compute](enumerable.md#compute)
* [concat](enumerable.md#concat)
* [concatAll](enumerable.md#concatall)
* [concatMap](enumerable.md#concatmap)
* [concatWith](enumerable.md#concatwith)
* [current](enumerable.md#current)
* [distinctUntilChanged](enumerable.md#distinctuntilchanged)
* [empty](enumerable.md#empty)
* [endWith](enumerable.md#endwith)
* [enumerate](enumerable.md#enumerate)
* [fromArray](enumerable.md#fromarray)
* [fromIterable](enumerable.md#fromiterable)
* [fromIterator](enumerable.md#fromiterator)
* [fromValue](enumerable.md#fromvalue)
* [generate](enumerable.md#generate)
* [hasCurrent](enumerable.md#hascurrent)
* [keep](enumerable.md#keep)
* [keepType](enumerable.md#keeptype)
* [lift](enumerable.md#lift)
* [map](enumerable.md#map)
* [mapTo](enumerable.md#mapto)
* [move](enumerable.md#move)
* [repeat](enumerable.md#repeat)
* [scan](enumerable.md#scan)
* [skipFirst](enumerable.md#skipfirst)
* [startWith](enumerable.md#startwith)
* [takeFirst](enumerable.md#takefirst)
* [takeLast](enumerable.md#takelast)
* [takeWhile](enumerable.md#takewhile)
* [toIterable](enumerable.md#toiterable)
* [toRunnable](enumerable.md#torunnable)
* [zip](enumerable.md#zip)
* [zipEnumerators](enumerable.md#zipenumerators)
* [zipWith](enumerable.md#zipwith)

## Type aliases

### EnumerableOperator

Ƭ **EnumerableOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

___

### EnumeratorOperator

Ƭ **EnumeratorOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<TA\>, [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<TB\>\>

A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

## Functions

### compute

▸ `Const`**compute**<T\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Creates an EnumerableLike that emits the computed value.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### concat

▸ **concat**<T\>(`fst`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, `snd`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, ...`tail`: readonly [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>[]): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>

Creates an EnumerableLike which yields all values from each source sequentially.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fst` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\> |
`snd` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\> |
`...tail` | readonly [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>[] |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>

___

### concatAll

▸ `Const`**concatAll**<T\>(): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Converts a higher-order EnumerableLike into a first-order EnumerableLike.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### concatMap

▸ `Const`**concatMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

Maps each item yielded by the sourc using a mapping function, then flattens the result.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

___

### concatWith

▸ `Const`**concatWith**<T\>(`snd`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### current

▸ `Const`**current**<T\>(`enumerator`: [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\>): T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`enumerator` | [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\> |

**Returns:** T

___

### distinctUntilChanged

▸ `Const`**distinctUntilChanged**<T\>(`options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### empty

▸ `Const`**empty**<T\>(): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>

Returns an empty EnumerableLike.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>

___

### endWith

▸ **endWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that yields items from the source,
concatenated with the values specified as arguments.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### enumerate

▸ `Const`**enumerate**<T\>(`enumerable`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>): [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`enumerable` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\> |

**Returns:** [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): function

Returns an EnumerableLike view over the `values` array.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } |

**Returns:** function

___

### fromIterable

▸ `Const`**fromIterable**<T\>(): [*Function1*](functions.md#function1)<*Iterable*<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Converts a javascript Iterable to an EnumerableLike.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<*Iterable*<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### fromIterator

▸ `Const`**fromIterator**<T, TReturn, TNext\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<*Iterator*<T, TReturn, TNext\>\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns a single use EnumerableLike over the javascript Iterator
returned by the function `f`.

#### Type parameters:

Name | Default |
------ | ------ |
`T` | - |
`TReturn` | *any* |
`TNext` | *unknown* |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<*Iterator*<T, TReturn, TNext\>\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### fromValue

▸ `Const`**fromValue**<T\>(): [*Function1*](functions.md#function1)<T, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Creates an EnumerableLike that yields `value`.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<T, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### generate

▸ `Const`**generate**<T\>(`generator`: [*Updater*](functions.md#updater)<T\>, `initialValue`: [*Factory*](functions.md#factory)<T\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`generator` | [*Updater*](functions.md#updater)<T\> | the generator function.   |
`initialValue` | [*Factory*](functions.md#factory)<T\> | Factory function used to generate the initial accumulator.    |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>

___

### hasCurrent

▸ `Const`**hasCurrent**<T\>(`enumerator`: [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\>): *boolean*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`enumerator` | [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\> |

**Returns:** *boolean*

___

### keep

▸ `Const`**keep**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an `EnumerableLike` that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> | The predicate function.    |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### keepType

▸ `Const`**keepType**<TA, TB\>(`predicate`: [*TypePredicate*](functions.md#typepredicate)<TA, TB\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

Returns an `EnumerableLike` that only emits items from the
source that satisfy the specified type predicate.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*TypePredicate*](functions.md#typepredicate)<TA, TB\> | The predicate function.    |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

___

### lift

▸ `Const`**lift**<TA, TB\>(`operator`: [*Function1*](functions.md#function1)<[*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<TA\>, [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<TB\>\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

Returns an EnumerableOperator that applies `operator` to
the EnumeratorLike returned by the source when enumerated.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`operator` | [*Function1*](functions.md#function1)<[*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<TA\>, [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<TB\>\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

___

### map

▸ `Const`**map**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

Returns an `EnumerableLike` that applies the `mapper` function to each
value emitted by the source.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> | The map function to apply each value. Must be a pure function.    |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

___

### mapTo

▸ `Const`**mapTo**<TA, TB\>(`v`: TB): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>\>

___

### move

▸ `Const`**move**<T\>(`enumerator`: [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\>): *boolean*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`enumerator` | [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<T\> |

**Returns:** *boolean*

___

### repeat

▸ **repeat**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<*number*\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<*number*\> | The predicate function to apply.    |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

▸ **repeat**<T\>(`count`: *number*): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that repeats the source count times.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`count` | *number* |     |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

▸ **repeat**<T\>(): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike` that continually repeats the source.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### scan

▸ `Const`**scan**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TAcc\>\>

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TAcc\>\>

___

### skipFirst

▸ `Const`**skipFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that skips the first `count` values emitted by the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### startWith

▸ **startWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that yields the values followed by items from the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### takeFirst

▸ `Const`**takeFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that only yields the first `count` values emitted by the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### takeLast

▸ `Const`**takeLast**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike that only yields the last `count` items yielded by the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### takeWhile

▸ `Const`**takeWhile**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>, `options?`: { `inclusive?`: *undefined* \| *boolean*  }): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> | The predicate function.    |
`options?` | { `inclusive?`: *undefined* \| *boolean*  } | - |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>\>

___

### toIterable

▸ `Const`**toIterable**<T\>(): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, *Iterable*<T\>\>

Converts an EnumerableLike into a javascript Iterable.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, *Iterable*<T\>\>

___

### toRunnable

▸ `Const`**toRunnable**<T\>(): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### zip

▸ **zip**<TA, TB\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB]\>

▸ **zip**<TA, TB, TC\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC]\>

▸ **zip**<TA, TB, TC, TD\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>, `d`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |
`d` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD]\>

▸ **zip**<TA, TB, TC, TD, TE\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>, `d`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\>, `e`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |
`d` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\> |
`e` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE]\>

▸ **zip**<TA, TB, TC, TD, TE, TF\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>, `d`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\>, `e`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\>, `f`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |
`d` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\> |
`e` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\> |
`f` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF]\>

▸ **zip**<TA, TB, TC, TD, TE, TF, TG\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>, `d`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\>, `e`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\>, `f`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\>, `g`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TG\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |
`d` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\> |
`e` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\> |
`f` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\> |
`g` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TG\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

▸ **zip**<TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>, `d`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\>, `e`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\>, `f`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\>, `g`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TG\>, `h`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TH\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |
`d` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\> |
`e` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\> |
`f` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\> |
`g` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TG\> |
`h` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TH\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

▸ **zip**<TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, `b`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>, `c`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\>, `d`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\>, `e`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\>, `f`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\>, `g`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TG\>, `h`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TH\>, `i`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TI\>): [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`TI` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\> |
`b` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |
`c` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TC\> |
`d` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TD\> |
`e` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TE\> |
`f` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TF\> |
`g` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TG\> |
`h` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TH\> |
`i` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TI\> |

**Returns:** [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

___

### zipEnumerators

▸ **zipEnumerators**(`enumerators`: readonly [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<*unknown*\>[]): [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<readonly *unknown*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`enumerators` | readonly [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<*unknown*\>[] |

**Returns:** [*EnumeratorLike*](../interfaces/enumerable.enumeratorlike.md)<readonly *unknown*[]\>

___

### zipWith

▸ `Const`**zipWith**<TA, TB\>(`snd`: [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\>): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB]\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<TA\>, [*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<[TA, TB]\>\>
