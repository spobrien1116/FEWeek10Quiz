let id = 1;

document.getElementById("p-button").addEventListener("click", () => {
    let paragraphs = document.getElementById("p-div");
    console.log("This is the div where the paragraphs are located:", paragraphs);
    
    let content = document.getElementById("p-input").value;
    let newParagraph = document.createElement("p");
    console.log("Contents of the new paragraph:", newParagraph);
    newParagraph.setAttribute("id", `newParagraph${id}`);
    newParagraph.innerHTML = content;
    document.getElementById("p-div").appendChild(newParagraph);
    id++;
    document.getElementById("p-input").value = '';
});