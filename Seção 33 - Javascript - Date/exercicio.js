const today = new Date()
const dd = today.getDate()
const mm = (today.getMonth() + 1).toString().length > 1 ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1)
const yyyy = today.getFullYear()

const result = `${dd}/${mm}/${yyyy}`
console.log(result)