//Step:1 bold style
document.getElementById('bold').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')
  const fontStyle=  inputs.style.fontWeight 

    if (fontStyle == 'bold') {
        document.getElementById('text-area').style.fontWeight = 'normal'
    } else {
        
    }
    console.log(inputs.style.fontWeight)
   
   inputs.style.fontWeight ='bold'
})
// ---------------Step:2 text italic------------
document.getElementById('italic').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.fontStyle ='italic'

})
// ---------------Step:3 text underline------------
document.getElementById('underline').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textDecoration ='underline'

})
// ---------------Step:4 text align-justify------------
document.getElementById('justify').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textAlign ='justify'

})


// ---------------Step:5 text align-left------------
document.getElementById('left').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textAlign ='left'

})

// ---------------Step:6 text align-center------------
document.getElementById('center').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textAlign ='center'

})
// ---------------Step:7 text align-right------------
document.getElementById('right').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textAlign ='right'
   if (inputs.style.textAlign === 'right') {
    inputs.style.textAlign === 'left'
   } else {
    inputs.style.textAlign === 'right'
   }
})
// ---------------Step:8 text uppercase------------
document.getElementById('uppercase').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textTransform ='uppercase'

})
// ---------------Step: text lowercase------------
document.getElementById('lowercase').addEventListener('click',function(){
    
    const inputs =document.getElementById('text-area')

   inputs.style.textTransform ='lowercase'

})
// ---------------Step:8 text color------------
document.getElementById('color').addEventListener('change',function(){
    
    const inputs =document.getElementById('color')
    const inputValue=inputs.value
    console.log(inputValue)

   inputs.style.color =inputValue

})



