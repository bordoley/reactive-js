[@reactive-js/serial-disposable](../README.md) › [SerialDisposableLike](serialdisposablelike.md)

# Interface: SerialDisposableLike

A Disposable container that allows replacing a contained Disposable with another,
disposing the previously contained disposable in the process. Disposing the
container also disposes the contained disposable.

## Hierarchy

* DisposableLike

  ↳ **SerialDisposableLike**

## Index

### Properties

* [disposable](serialdisposablelike.md#disposable)

## Properties

###  disposable

• **disposable**: *DisposableLike*

The inner disposable that may be get or set.
