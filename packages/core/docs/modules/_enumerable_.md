[@reactive-js/core - v0.0.37](../README.md) › ["enumerable"](_enumerable_.md)

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
* [contains](_enumerable_.md#const-contains)
* [distinctUntilChanged](_enumerable_.md#const-distinctuntilchanged)
* [empty](_enumerable_.md#const-empty)
* [endWith](_enumerable_.md#endwith)
* [everySatisfy](_enumerable_.md#const-everysatisfy)
* [first](_enumerable_.md#const-first)
* [flatMap](_enumerable_.md#const-flatmap)
* [flatten](_enumerable_.md#const-flatten)
* [forEach](_enumerable_.md#const-foreach)
* [fromArray](_enumerable_.md#const-fromarray)
* [fromIterable](_enumerable_.md#const-fromiterable)
* [fromIterator](_enumerable_.md#const-fromiterator)
* [fromValue](_enumerable_.md#const-fromvalue)
* [generate](_enumerable_.md#const-generate)
* [keep](_enumerable_.md#const-keep)
* [keepType](_enumerable_.md#const-keeptype)
* [lift](_enumerable_.md#const-lift)
* [map](_enumerable_.md#const-map)
* [noneSatisfy](_enumerable_.md#const-nonesatisfy)
* [reduce](_enumerable_.md#const-reduce)
* [repeat](_enumerable_.md#repeat)
* [scan](_enumerable_.md#const-scan)
* [skipFirst](_enumerable_.md#const-skipfirst)
* [someSatisfy](_enumerable_.md#const-somesatisfy)
* [startWith](_enumerable_.md#startwith)
* [takeFirst](_enumerable_.md#const-takefirst)
* [takeLast](_enumerable_.md#const-takelast)
* [takeWhile](_enumerable_.md#const-takewhile)
* [toArray](_enumerable_.md#const-toarray)
* [toIterable](_enumerable_.md#const-toiterable)
* [zip](_enumerable_.md#zip)

## Type aliases

###  EnumerableOperator

Ƭ **EnumerableOperator**: *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB››*

A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB>

___

###  EnumeratorOperator

Ƭ **EnumeratorOperator**: *[Operator](_functions_.md#operator)‹[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TA›, [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TB››*

A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB>

## Functions

### `Const` compute

▸ **compute**<**T**>(`f`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Creates an EnumerableLike that emits the computed value.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *T*

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

###  concat

▸ **concat**<**T**>(`fst`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, `snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, ...`tail`: Array‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Creates an EnumerableLike which yields all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |
`...tail` | Array‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equals`: function): *function*

Returns `true` value if source yields any item equal to `value`, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **value**: *T*

▪`Default value`  **equals**: *function*= referenceEquals

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **equals**: *function*= referenceEquals

Optional equality function that is used to compare
if an item is distinct from the previous item.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

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

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that yields items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` everySatisfy

▸ **everySatisfy**<**T**>(`predicate`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, boolean›*

Returns `true` if the predicate is satisfied for
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, boolean›*

___

### `Const` first

▸ **first**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[Option](_option_.md#option)‹T›*

Returns the first item in the EnumerableLike collection or none.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |   |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` flatMap

▸ **flatMap**<**TA**, **TB**>(`mapper`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Maps each item yielded by the sourc using a mapping function, then flattens the result.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`v`: TA): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` flatten

▸ **flatten**<**T**>(): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, T›*

Converts a higher-order EnumerableLike into a first-order EnumerableLike.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`f`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, void›*

Applies the side-effect function `f` to each item in the EnumerableLike collection.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Returns an EnumerableLike view over the `values` array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] |   |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Converts a javascript Iterable to an EnumerableLike.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`f`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Returns a single use EnumerableLike over the javascript Iterator
returned by the function `f`.

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Parameters:**

▪ **f**: *function*

▸ (): *Iterator‹T, TReturn, TNext›*

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromValue

▸ **fromValue**<**T**>(`value`: T): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Creates an EnumerableLike that yields `value`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to emit.  |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

the generator function.

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

Factory function used to generate the initial accumulator.

▸ (): *T*

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an `EnumerableLike` that only emits items produced by the
source that satisfy the specified predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Returns an `EnumerableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: unknown): *data is TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | unknown |

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

▸ **map**<**TA**, **TB**>(`mapper`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

Returns an `EnumerableLike` that applies the `mapper` function to each
value emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

The map function to apply each value. Must be a pure function.

▸ (`v`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` noneSatisfy

▸ **noneSatisfy**<**T**>(`predicate`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, boolean›*

Returns `true` if the predicate does not satisfy
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, boolean›*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, TAcc›*

Applies an accumulator function over the source, returning the accumulated result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

The accumulator function called on each source value.

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

The initial accumulation value.

▸ (): *TAcc*

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function to apply.

▸ (`count`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

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

▸ **scan**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, TAcc›*

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

▸ (): *TAcc*

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

### `Const` someSatisfy

▸ **someSatisfy**<**T**>(`predicate`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, boolean›*

Returns `true` value if the any item satisfies the predicate, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, boolean›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike that yields the values followed by items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

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

▸ **takeWhile**<**T**>(`predicate`: function, `__namedParameters`: object): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

▪`Default value`  **__namedParameters**: *object*= {inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *keyof T[]*

Accumulates all values emitted by `enumerable` into an array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |   |

**Returns:** *keyof T[]*

___

### `Const` toIterable

▸ **toIterable**<**T**>(`source`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *Iterable‹T›*

Converts an EnumerableLike into a javascript Iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *Iterable‹T›*

___

###  zip

▸ **zip**<**TA**, **TB**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

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

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

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

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**, **T**>(`observables`: [[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TI›], `selector`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

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

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TI›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH, `i`: TI): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |
`i` | TI |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*
