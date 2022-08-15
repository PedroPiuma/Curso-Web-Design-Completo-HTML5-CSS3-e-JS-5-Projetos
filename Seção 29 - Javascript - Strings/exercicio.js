const nameFormatter = (name) => {
    const split = name.split(' ')
    const lastName = split[split.length - 1]
    const index = name.indexOf(lastName)
    const result = `${lastName}, ${name.slice(0, index - 1)}`
    return result
}

console.log(nameFormatter('Luís Pedro Piúma'))