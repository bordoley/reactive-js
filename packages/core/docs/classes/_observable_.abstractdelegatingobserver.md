[@reactive-js/core - v0.0.42](../README.md) › ["observable"](../modules/_observable_.md) › [AbstractDelegatingObserver](_observable_.abstractdelegatingobserver.md)

# Class: AbstractDelegatingObserver <**TA, TB**>

Abstract base class for implementing instances of the `ObserverLike` interface
which delegate notifications to a parent `ObserverLike` instance

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractObserver‹TA, [ObserverLike](../interfaces/_observable_.observerlike.md)‹TB››

  ↳ **AbstractDelegatingObserver**

## Implements

* [DisposableLike](../interfaces/_disposable_.disposablelike.md)
* [ObserverLike](../interfaces/_observable_.observerlike.md)‹TA›

## Index

### Constructors

* [constructor](_observable_.abstractdelegatingobserver.md#constructor)

## Constructors

###  constructor

\+ **new AbstractDelegatingObserver**(`delegate`: [ObserverLike](../interfaces/_observable_.observerlike.md)‹TB›): *[AbstractDelegatingObserver](_observable_.abstractdelegatingobserver.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [ObserverLike](../interfaces/_observable_.observerlike.md)‹TB› |

**Returns:** *[AbstractDelegatingObserver](_observable_.abstractdelegatingobserver.md)*
