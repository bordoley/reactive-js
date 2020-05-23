[reactive-js - v0.0.42](../README.md) › ["enumerable"](_enumerable_.md)

# Module: "enumerable"

## Index

### Interfaces

* [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)
* [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)

### Type aliases

* [EnumerableOperator](_enumerable_.md#enumerableoperator)
* [EnumeratorOperator](_enumerable_.md#enumeratoroperator)

### Functions

* [compute](_enumerable_.md#const-compute)
* [concat](_enumerable_.md#concat)
* [concatAll](_enumerable_.md#const-concatall)
* [concatMap](_enumerable_.md#const-concatmap)
* [concatWith](_enumerable_.md#const-concatwith)
* [current](_enumerable_.md#const-current)
* [distinctUntilChanged](_enumerable_.md#const-distinctuntilchanged)
* [empty](_enumerable_.md#const-empty)
* [endWith](_enumerable_.md#endwith)
* [enumerate](_enumerable_.md#const-enumerate)
* [fromArray](_enumerable_.md#const-fromarray)
* [fromIterable](_enumerable_.md#const-fromiterable)
* [fromIterator](_enumerable_.md#const-fromiterator)
* [fromValue](_enumerable_.md#const-fromvalue)
* [generate](_enumerable_.md#const-generate)
* [hasCurrent](_enumerable_.md#const-hascurrent)
* [keep](_enumerable_.md#const-keep)
* [keepType](_enumerable_.md#const-keeptype)
* [lift](_enumerable_.md#const-lift)
* [map](_enumerable_.md#const-map)
* [mapTo](_enumerable_.md#const-mapto)
* [move](_enumerable_.md#const-move)
* [repeat](_enumerable_.md#repeat)
* [scan](_enumerable_.md#const-scan)
* [skipFirst](_enumerable_.md#const-skipfirst)
* [startWith](_enumerable_.md#startwith)
* [takeFirst](_enumerable_.md#const-takefirst)
* [takeLast](_enumerable_.md#const-takelast)
* [takeWhile](_enumerable_.md#const-takewhile)
* [toIterable](_enumerable_.md#const-toiterable)
* [toRunnable](_enumerable_.md#const-torunnable)
* [zip](_enumerable_.md#zip)
* [zipWith](_enumerable_.md#const-zipwith)

## Type aliases

###  EnumerableOperator

Ƭ **EnumerableOperator**: *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB››*

A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB>

___

###  EnumeratorOperator

Ƭ **EnumeratorOperator**: *[Function1](_functions_.md#function1)‹[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TA›, [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TB››*

A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB>

## Functions

### `Const` compute

▸ **compute**<**T**>(): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Creates an EnumerableLike that emits the computed value.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

###  concat

▸ **concat**<**T**>(`fst`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, `snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, ...`tail`: keyof EnumerableLike<T>[]): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Creates an EnumerableLike which yields all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |
`...tail` | keyof EnumerableLike<T>[] |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` concatAll

▸ **concatAll**<**T**>(): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, T›*

Converts a higher-order EnumerableLike into a first-order EnumerableLike.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, T›*

___

### `Const` concatMap

▸ **concatMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB››): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Maps each item yielded by the sourc using a mapping function, then flattens the result.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›› |   |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` concatWith

▸ **concatWith**<**T**>(`snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` current

▸ **current**<**T**>(`enumerator`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T› |

**Returns:** *T*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Returns an empty EnumerableLike.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that yields items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` enumerate

▸ **enumerate**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`__namedParameters`: object): *(Anonymous function)*

Returns an EnumerableLike view over the `values` array.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { startIndex: 0 }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *(Anonymous function)*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(): *[Function1](_functions_.md#function1)‹Iterable‹T›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Converts a javascript Iterable to an EnumerableLike.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹Iterable‹T›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext››, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Returns a single use EnumerableLike over the javascript Iterator
returned by the function `f`.

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext››, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Creates an EnumerableLike that yields `value`.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: [Updater](_functions_.md#updater)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`generator` | [Updater](_functions_.md#updater)‹T› | the generator function. |
`initialValue` | [Factory](_functions_.md#factory)‹T› | Factory function used to generate the initial accumulator.  |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` hasCurrent

▸ **hasCurrent**<**T**>(`enumerator`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T› |

**Returns:** *boolean*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an `EnumerableLike` that only emits items produced by the
source that satisfy the specified predicate.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: [TypePredicate](_functions_.md#typepredicate)‹TA, TB›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Returns an `EnumerableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [TypePredicate](_functions_.md#typepredicate)‹TA, TB› | The predicate function.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [EnumeratorOperator](_enumerable_.md#enumeratoroperator)‹TA, TB›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Returns an EnumerableOperator that applies `operator` to
the EnumeratorLike returned by the source when enumerated.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [EnumeratorOperator](_enumerable_.md#enumeratoroperator)‹TA, TB› |   |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Returns an `EnumerableLike` that applies the `mapper` function to each
value emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› | The map function to apply each value. Must be a pure function.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` move

▸ **move**<**T**>(`enumerator`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T› |

**Returns:** *boolean*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹number›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹number› | The predicate function to apply.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

▸ **repeat**<**T**>(): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike` that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, TAcc›*

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, TAcc›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that skips the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that yields the values followed by items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that only yields the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that only yields the last `count` items yielded by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›, `__namedParameters`: object): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *[Predicate](_functions_.md#predicate)‹T›*

The predicate function.

▪`Default value`  **__namedParameters**: *object*= { inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` toIterable

▸ **toIterable**<**T**>(): *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, Iterable‹T››*

Converts an EnumerableLike into a javascript Iterable.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, Iterable‹T››*

___

### `Const` toRunnable

▸ **toRunnable**<**T**>(): *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

###  zip

▸ **zip**<**TA**, **TB**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB]›*

▸ **zip**<**TA**, **TB**, **TC**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, `g`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |
`g` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, `g`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, `h`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |
`g` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG› |
`h` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, `g`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, `h`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›, `i`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TI›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |
`g` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG› |
`h` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH› |
`i` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TI› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` zipWith

▸ **zipWith**<**TA**, **TB**>(`snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, [TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, [TA, TB]›*
