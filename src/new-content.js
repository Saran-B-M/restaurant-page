
function newContent(){
    //Removes the existing content div and creates and returns a new 
    //content div
    const body = document.querySelector("body");
    let content = document.querySelector("#content");
    body.removeChild(content); 
    content = document.createElement("div");
    content.id = "content";
    return content;
    
}

export {newContent};