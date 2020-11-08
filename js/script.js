const dropdownToggler = document.querySelector(".dropdown-opener")
const dropdown = document.querySelector(".dropdown-content")

dropdownToggler.onclick = () => {
    dropdown.classList.toggle("active")
}

const math1 = document.querySelector('.maths-1')
const math2 = document.querySelector('.maths-2')
const english1 = document.querySelector('.english-1')
const english2 = document.querySelector('.english-2')
const science = document.querySelector('.science')
const social = document.querySelector('.social')
const science2 = document.querySelector('.science-2')
const account = document.querySelector('.account')
const nepali = document.querySelector('.nepali')
const health = document.querySelector('.health')
const stats = document.querySelector('.stats')
const link = document.querySelector('.display-link')
// Alfa AWUS036ACH
math1.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/5877157837?pwd=bUR0aDl0RVBWMzJMV3dLbE11ZytWUT09" target="_blank">here</a> to join C. Maths Class.
    `
    dropdown.classList.remove('active')
}
math2.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/3416046238?pwd=ZUU4WS9HMGVHWUR3WHZLdWp4VFRoUT09" target="_blank">here</a> to join O.P.T Maths Class.
    `
    dropdown.classList.remove('active')
}
english1.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/71284363259?pwd=UzZiS2JNRE90RlJqc0ZWUHM2NjRhZz09" target="_blank">here</a> to join Our English Class.
    `
    dropdown.classList.remove('active')
}
english2.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/5160254853?pwd=L1lRN1pWdDVKaW5xeWpKVEtoMERsQT09" target="_blank">here</a> to join English 2 Class.
    `
    dropdown.classList.remove('active')
}
science.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/2120805183?pwd=YVQ2YjUyRkI3SjRTQ0pwV1ZZTEltQT09" target="_blank">here</a> to join Science Class.
    `
    dropdown.classList.remove('active')
}
social.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/9243856258?pwd=a09LMzdoU3BIYXhvbUhreG9DNlluZz09" target="_blank">here</a> to join Social Class.
    `
    dropdown.classList.remove('active')
}
account.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/74490467894?pwd=NWFLSjFyQUMxS0RKZElsWHgwYXoyUT09" target="_blank">here</a> to join Account Class.
    `
    dropdown.classList.remove('active')
}
nepali.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/6939678794?pwd=cnc1Y0ppaGQvZWQ0Sm81OGpLU0REQT09" target="_blank">here</a> to join Nepali Class.
    `
    dropdown.classList.remove('active')
}
health.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/9615803362?pwd=b0l5dnFWYVptOGJMRTZhRGo4cVV5dz09" target="_blank">here</a> to join Health Class.
    `
    dropdown.classList.remove('active')
}
stats.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/4718252976?pwd=WHRCVDBUVHc4SWFVa0VZdzh0dDdyQT09" target="_blank">here</a> to join Statistics Class.
    `
    dropdown.classList.remove('active')
}
science2.onclick = () => {
    link.innerHTML = `
    Click <a href="https://us04web.zoom.us/j/8472094956?pwd=Wm9ZR3NpcGdXSnFYU2p4anU3cmVlZz09" target="_blank">here</a> to join Science(Bhuvan Sir) Class.
    `
    dropdown.classList.remove('active')
}
