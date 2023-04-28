

const expandBtn = document.getElementById('expand-btn');
const body = document.querySelector('body')
expandBtn.addEventListener('click',function(e){
    e.preventDefault;
    body.classList.toggle('sidebar-toggle');
})

const sidebarItem = document.querySelector('.sidebar-item');
sidebarItem.addEventListener('click',(e)=>{
    e.preventDefault;

    let remove = document.querySelectorAll('.sidebar-item li');
    remove.forEach(item=>{
        item.classList.remove('active');
    })
    e.target.closest("li").classList.toggle('active');
});
