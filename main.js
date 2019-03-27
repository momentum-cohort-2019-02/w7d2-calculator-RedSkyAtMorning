


let formula = [];
let result = 0;

let buttons1 = document.querySelectorAll('.buttonstyleNumber')
for (let i=0;i<buttons1.length;i++)
{
addEventListener('click', 
    function ingest(buttonClick) {
        formula.push(buttonClick);
        let element = document.getElementById("ResultButton")
        element.innerHTML = result
        return formula }
    )
}

let buttons2 = document.querySelectorAll('.buttonstyleOperator')
for (let i=0;i<buttons2.length;i++)
{
addEventListener('click', 
    function ingest(buttonClick) {
        formula.push(buttonClick);
        let element = document.getElementById("ResultButton")
        element.innerHTML = result
        return formula }
    )
}

let button3 = document.getElementById('EqualButton')
    button3.addEventListener('click',  
    function getResult(equalButtonClick) {
        result = eval(formula)
        let element = document.getElementById("ResultButton")
        element.innerHTML = result
        let formula = [];
        return result }
    )

let button4 = document.getElementById('ClearButton')
    button4.addEventListener('click',  
    function clearResult(clearButtonClick) {
        let formula = [];
        let result = 0;
        document.getElementById("ResultButton").innerHTML = result
        return }
    )
    



    // let element = document.getElementById('product-title')
    // element.innerHTML = '<h2>Boomerang</h2>'


// <script>
//   let readytoClear = document.getElementById("ClearButton");
//   console.log(ostrich.src);
// </script>
    
//     let readytoResult = document.getElementById("ResultButton");
//     let readytoFormula = document.getElementById("FormulaButton");


//     <script>
//   let para = document.getElementById("para");
//   console.log(para.style.color);
//   para.style.color = "magenta";
// </script>




// <script>
//   function count(selector) {
//     return document.querySelectorAll(selector).length;
//   }
//   console.log(count("p"));           // All <p> elements
//   // → 4
//   console.log(count(".animal"));     // Class animal
//   // → 2
//   console.log(count("p .animal"));   // Animal inside of <p>
//   // → 2
//   console.log(count("p > .animal")); // Direct child of <p>
//   // → 1
// </script>

// <p>Click this document to activate the handler.</p>
// <script>
//   window.addEventListener("click", () => {
//     console.log("You knocked?");
//   });
// </script>

// <script>
//   let button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     console.log("Button clicked.");
//   });
// </script>


// <button>A</button>
// <button>B</button>
// <button>C</button>
// <script>
//   document.body.addEventListener("click", event => {
//     if (event.target.nodeName == "BUTTON") {
//       console.log("Clicked", event.target.textContent);
//     }
//   });
// </script>

// Every button?

// <script>
//   window.addEventListener("click", event => {
//     let dot = document.createElement("div");
//     dot.className = "dot";
//     dot.style.left = (event.pageX - 4) + "px";
//     dot.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(dot);
//   });
// </script>

// <input type="button" value="mybutton1" onclick="dosomething()">test
// <button id="scart" onclick="addCart(2499)">Add To Cart</button>

// function addCart(v){
//         document.getElementById('display').value = v
//         console.log(v);
//         return false;
//     }