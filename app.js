
// 1- Select the section with an id container by using gtElementById
    document.getElementById("container");

// 2- Using querySelector to select the section with an id container.
    document.querySelector("#container");

// 3- Select all of the list items with a class of second by using querySelectorAll
    document.querySelectorAll(".second");

// 4- Select a list item with a class of third, but only the list item inside of the ol tag by using querySelector
    document.querySelector("ol .third");

// 5- Give the section with an id of container the text "Hello" using getElementById
    let container = document.getElementById("container");
     container.innerText = "Hello";

// 6- Add the class main to the div with a class of footer by using querySelector
    let footer = document.querySelector(".footer");
    footer.classList.add("main");

// 7- Remove the class main on the div with a class of footer by using querySelector
    let footer1 = document.querySelector(".footer");
    footer.className -= "main";

// 8- Let create a new li element
    let li = document.createElement("li");

// 9- Let give the li text "four"
    li.innerText = "four"

// 10- Let append the li to ul gtElementById
    let ul = document.querySelector("ul");
    ul.append(li);
/* This line of code give a typeError when changing the section with an id
 of container with a text, saying "Uncaught TypeError: Cannot 
read properties of null (reading 'appendChild')"*/

// 11- Loop over all of the list inside the ol tag
    let liModifying =  document.querySelector ("ol li");
    let i;
    
    for (i = 0; i < liModifying.length; i++) {
        liModifying.style.backgroundColor = "green";
    }
/* I applied the backgroundColor CSS property to loop through the lis of ol
 and give them the color green, despite there is no code error from the
  console. It style does not show any change.*/

// Let remove the div with a class of footer 
footer.remove;