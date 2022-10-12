const findBiggestNumber = (arr) => {
    const splitArr = arr.map(item => {
        return String(item).length > 1 ? String(item).split("") : item
    }).sort((a, b) => {
        if (typeof a == "object" && typeof b == "number") {
            return Number(a[0]) > b
        }
        if (typeof b == "object" && typeof a == "number") {
            return a > Number(b[0])
        }
        if (typeof a == "object" && typeof b == "object") {
            return Number(a[0]) > Number(b[0])
        }
    })
    return splitArr
}