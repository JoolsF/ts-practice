type Foo = {
  a: string
  b: string
  c: number
}

type Foo2 = Pick<Foo, 'a'>

