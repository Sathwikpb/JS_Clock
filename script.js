let state = {
    count: 0
}

function onButtonPress() {
    state.count++;
    buttonComponentReRender();
}

function reset() {
    state.count = 0;
    buttonComponentReRender();
}

function buttonComponentReRender() {
    // button with count 
    const buttonParent = document.getElementById('buttonParent');
    buttonParent.innerHTML = "Counter is ";
    const component = buttonComponent(state.count);
    buttonParent.appendChild(component);
    // reset counter
    const resetButton = reSet();
    buttonParent.appendChild(resetButton);
    //  input to a counter 
    const inputElement = setInput();
    buttonParent.appendChild(inputElement);

}

function buttonComponent(count) {
    const button = document.createElement("button");
    button.innerHTML = count;
    button.addEventListener("click", onButtonPress);
    return button;
}

function reSet() {
    const button = document.createElement("button");
    button.innerHTML = "Reset";
    button.addEventListener("click", reset);
    return button;
}

function setInput() {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "countInput");

    const button = document.createElement('button');
    button.textContent = 'Update Count';
    button.addEventListener('click', updateCount);

    const container = document.createElement('div');
    container.appendChild(input);
    container.appendChild(button);
    return container;
}

function updateCount() {
    const countInputValue = document.getElementById('countInput').value;
    const newCount = parseInt(countInputValue);

    if (!isNaN(newCount)) {
        state.count = newCount;
        buttonComponentReRender();
    }
    else {
        alert('Invalid Number');
    }


}

buttonComponentReRender();
