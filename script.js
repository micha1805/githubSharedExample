// const someHTMLCollection = document.querySelectorAll('.col-sm-6')
const someHTMLCollection = document.querySelectorAll('.container div')





Array.from(someHTMLCollection).forEach((elt, index) => {
	console.log(`\nElement (${index}) ----------------------\ndiv content : \n\n`, elt.innerText)
})


console.log(someHTMLCollection)
