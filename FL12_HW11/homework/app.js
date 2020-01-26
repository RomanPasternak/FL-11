const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createStructure(arr, parentElem){
  for(let obj of arr){
    if(obj.folder){
      let div = document.createElement('div');
      div.className = 'folder';
      div.classList.add(`margLeft`);
      div.innerHTML = `<span><i class="material-icons">folder</i>${obj.title}</span>`;
      parentElem.append(div);
      if(obj.children !== null && obj.children !== false && obj.children !== 'undefined'){
        createStructure(obj.children, div);
      }else{
        let empty = document.createElement('p');
        empty.innerHTML = '<i>Folder is empty</i>';
        div.append(empty);
      }
    }else{
      let div = document.createElement('div');
      div.className = 'file';
      div.classList.add(`margLeft`);
      div.innerHTML = `<span><i class="material-icons file-icon">insert_drive_file</i>${obj.title}</span>`;
      parentElem.append(div);
    }
  }
}

createStructure(structure, rootNode);

let clickClassName = document.getElementsByClassName('folder');


for(let k = 0; k < clickClassName.length; k++){
  clickClassName[k].addEventListener('click', function(){
    if(clickClassName[k].firstChild){
      clickClassName[k].lastChild.style.display = 'block';
      
    }

  });
}
