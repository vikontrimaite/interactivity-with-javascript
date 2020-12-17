function welcomeMessage(msg) {
    alert(msg);
    let name = prompt('What is your name?');
    console.log(name);
    
    return name;
}

export { welcomeMessage }