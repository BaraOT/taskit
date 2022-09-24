function taskFunction(){
    let taskName = document.getElementById('taskName');
    let taskDetails = document.getElementById('taskDetails');
    let container = document.getElementById('container');
    let create = document.getElementById('create');
    

    create.addEventListener('click', function(){
        let card = document.createElement('div');
        let title = document.createElement('h6');
        let desc = document.createElement('h6');
        let edit = document.createElement('img');
        let deleted = document.createElement('img');
        let toggle = document.createElement('img');
        let boxOne = document.createElement('div');
        let boxTwo = document.createElement('div');
        boxTwo.className = 'image';
        boxOne.className = 'text';

        edit.src = 'img/pen.png';
        deleted.src = 'img/delete.png';
        toggle.src = 'img/phone.png';
        card.className = 'Wrapper';

        title.innerText = taskName.value;
        desc.innerText = taskDetails.value;

        boxOne.appendChild(title);
        boxOne.appendChild(desc);

        boxTwo.appendChild(edit);
        boxTwo.appendChild(toggle);
        boxTwo.appendChild(deleted);

        card.appendChild(boxOne);
        card.appendChild(boxTwo);
        container.append(card);
    })
}
taskFunction();