export function log(name: string, value: any) {
    if (typeof value === "object") {
        console.log(`${name} ${JSON.stringify(value)}`)
    } else {
        console.log(`${name} ${value}`)
    }
}

export function logLineBreak() {
    console.log(`\n***************************************************\n`)
}
