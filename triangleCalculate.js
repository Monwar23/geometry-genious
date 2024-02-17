// // Objective: get base,height of a triangle.Calculate the area by using provided formula and display the area
// // 1.get base value
// // 2.added an id in the base input field
// // 3.use getElementById to access input field
// // 4.get value from input field
// // convert to Float using parseFloat

// function calculateTriangleArea(){
//     // base value
//     const triangleBaseInput=document.getElementById('triangle-base') 
//     const triangleBaseText=triangleBaseInput.value;
//     const base=parseFloat(triangleBaseText);
//     console.log(base)


//     // height value
//     const triangleHeightInput=document.getElementById('triangle-height')
//     const triangleHeightText=triangleHeightInput.value
//     const height=parseFloat(triangleHeightText)
//     console.log(height)

//     // calculate
//     const triangleArea=0.5*base*height
//     console.log(triangleArea)

//     // display result
//     const triangleAreaSpan=document.getElementById('triangle-area')
//     triangleAreaSpan.innerText=triangleArea
// }         

// function rectengle(){
//     const rectangleWInput=document.getElementById('rectangle-w').value
//     const w=parseFloat(rectangleWInput)

//     const rectangleIInput=document.getElementById('rectangle-I').value
//     const I=parseFloat(rectangleIInput)

//     const area=w*I;

//     const showResult=document.getElementById('areaOfRectangle')
//     showResult.innerText=area


// }

function calculateTriangleArea(){
    const base=input('triangle-base')
    const height=input('triangle-height')
    const areaFinal=0.5*base*height

        setResult('triangle-area',areaFinal)

}

function rectengle(){
    const w=input('rectangle-w')
    const I=input('rectangle-I')
    const areaFinal=w*I

        setResult('areaOfRectangle',areaFinal)

}


function input(every){
    const inputValue=document.getElementById(every).value
    const man=parseFloat(inputValue)
    return man
}

function setResult(show,area){
    const set=document.getElementById(show)
    set.innerText=area
    return 
}