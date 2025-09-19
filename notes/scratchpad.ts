type Foo = {
    a: string
    b?: string = 's'
}

function f(foo: Foo) {
    console.log(foo)
}