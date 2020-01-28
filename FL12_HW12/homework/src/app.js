
const rootNode = document.getElementById('root');
const Hach = '#/add';

function pageSetup(sets) {
    const addNewSetBtn = document.querySelector('.add');
    addNewSetBtn.addEventListener('click', function() {
        rootNode.querySelector('.main').classList.toggle('hidden');
        rootNode.querySelector('.addNewSet').classList.toggle('hidden');
        location.href += Hach;
    });

    const termsBtn = document.querySelector('.terms');
    termsBtn.addEventListener('click', function() {
        event.stopPropagation();
        const newSetNode = document.createElement('div');
        newSetNode.appendChild(inputTerm);
        const inputTerm = document.createElement('input');
        inputTerm.setAttribute('placeholder', 'Enter term');
        const inputDefinition = document.createElement('input');
        inputDefinition.setAttribute('placeholder', 'Enter definition');
        newSetNode.appendChild(inputDefinition);
        const removeTermBtn = document.createElement('button');
        removeTermBtn.classList.add('removeTermBtn');
        newSetNode.appendChild(removeTermBtn);
        removeTermBtn.innerHTML = 'Remove';
        termsBtn.parentNode.appendChild(newSetNode);

        removeTermBtn.addEventListener('click', function() {
            event.stopPropagation();
            removeTermBtn.parentNode.removeChild(removeTermBtn.parentNode);
        });
    });

    const saveNewSetBtn = document.querySelector('.save');
    saveNewSetBtn.addEventListener('click', function() {
        const name = document.querySelector('.setName').value;
        if (name) {
            const updatedSets = JSON.parse(localStorage.getItem('newSets'))
            updatedSets.push(new Set(name, updatedSets.length));
            localStorage.setItem('newSets', JSON.stringify(updatedSets));
            rootNode.querySelector('.main').classList.toggle('hidden');
            rootNode.querySelector('.addNewSet').classList.toggle('hidden');
            location.href = location.href.replace(location.hash, '');
        } else {
            alert('Please give any set!');
        }
    });

    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.addEventListener('click', function() {
        location.href = location.href.replace(location.hash, '');
    });

    for (let set of sets) {
        createSetNode(set);
    }
}



function createSetNode(set) {
    const newSetNode = document.createElement('div');
    newSetNode.setAttribute('id', set.id);
    const setName = document.createElement('p');
    setName.innerHTML = set.setName;
    newSetNode.appendChild(setName);
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = 'Edit';
    newSetNode.appendChild(editBtn);
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.classList.add('removeBtn');
    newSetNode.appendChild(removeBtn);
    rootNode.appendChild(newSetNode);

    
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        let sets = JSON.parse(localStorage.getItem(setName));
        for (let i = 0; i < sets.length; i++) {
            if (sets[i].id === Number(removeBtn.parentNode.id)) {
                sets.splice(i, 1);
            }
        }
        
    });
}

function mainSet() {
    if (!localStorage.getItem('newSets')) {
        localStorage.setItem('newSets', JSON.stringify([]));
    }

    if (!localStorage.getItem('Sets')) {
        localStorage.setItem('Sets', JSON.stringify([]));
    }

    const sets = JSON.parse(localStorage.getItem('newSets')).concat(JSON.parse(localStorage.getItem('Sets')));

    pageSetup(sets);
}

mainSet();
