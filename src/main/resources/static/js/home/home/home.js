let sidebar_toggle_btn = document.querySelector('.sidebar-toggle');
let sidebar = document.querySelector('.sidebar');
let sidebar_status = false;

const sidebarToggle = () => {
    if(!sidebar_status){
        sidebar.style.left = '0%';
        sidebar_status = true;
        return;
    }
    sidebar.style.left = '-100%';
    sidebar_status = false;
}

sidebar_toggle_btn.addEventListener('click' ,sidebarToggle)