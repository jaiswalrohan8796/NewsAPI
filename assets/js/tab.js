const tabs = document.querySelectorAll('.tab')
const tabBtns = document.querySelectorAll('.nav-item')

function showTab(index) {
    tabs.forEach((tab=>{
        tab.style.display = "none";
    }))
    tabBtns.forEach((btn=> {
        btn.style.backgroundColor = "rgb(33,33,33)";
        btn.style.boxShadow = "none";
    }))
    tabs[index].style.display = "block";
    tabBtns[index].style.backgroundColor = "rgb(46, 46, 46)";
    tabBtns[index].style.boxShadow = "2px 2px 8px 2px rgb(20,20,20)";
}
showTab(0);