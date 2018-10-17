document.getElementById('sideNavBtn').onclick = function(e) {
    e.stopPropagation()
    document.getElementById('sidebar').classList.add('sidebarShow')

    var elementos = document.getElementsByClassName('sideMenu')

    for (let item of elementos) {
        item.onclick = function(e) {
            e.stopPropagation()
            document.getElementById('sidebar').classList.remove('sidebarShow')
        }
    }
}

document.getElementById('sidebar').onclick = function(e) {
    e.stopPropagation()
}

document.getElementById('closeNavBtn').onclick = function(e) {
    e.stopPropagation()
    document.getElementById('sidebar').classList.remove('sidebarShow')
}

document.getElementById('body').onclick = function(e) {
    document.getElementById('sidebar').classList.remove('sidebarShow')
}

document.getElementById('card').onclick = function(e) {
    alert("Chupala prro")
}