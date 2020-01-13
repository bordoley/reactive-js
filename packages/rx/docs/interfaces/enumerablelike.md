[@reactive-js/rx](../README.md) › [EnumerableLike](enumerablelike.md)

# Interface: EnumerableLike <**T**>

An `ObservableLike` that also support synchronous enumeration and iteration.

## Type parameters

▪ **T**

## Hierarchy

* [ObservableLike](observablelike.md)‹T›

* Iterable‹T›

  ↳ **EnumerableLike**

## Index

### Methods

* [enumerate](enumerablelike.md#enumerate)

## Methods

###  enumerate

▸ **enumerate**(): *[EnumeratorLike](enumeratorlike.md)‹void, T›*

Returns an `EnumeratorLike` to iterate through the source.

**Returns:** *[EnumeratorLike](enumeratorlike.md)‹void, T›*
