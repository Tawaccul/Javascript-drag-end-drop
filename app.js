const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragtart);
item.addEventListener('dragend', dragend);

function dragtart(event) {
  event.target.classList.add('hold');
  setTimeout(()=>  event.target.classList.add('hide'), 0)
  
}

function dragend(event){
  event.target.classList.remove('hold', 'hide');
}

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);

}

function dragover(event){
  event.preventDefault();
}
function dragenter(event){
   event.target.classList.add('hovered')
}

function dragleave(event){
    event.target.classList.remove('hovered')
}
function dragdrop(event){
    event.target.append(item)
    event.target.classList.remove('hovered')
}

