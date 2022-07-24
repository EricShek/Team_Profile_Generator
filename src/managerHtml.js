function managerHtml(manager){
    return `
    <div class="col-sm-4 my-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <ul class="list-group">
                <li class="list-group-item">name: ${manager.name} </li>
                <li class="list-group-item">ID: ${manager.id} </li>
                <li class="list-group-item">Email: ${manager.email}  </li>
                <li class="list-group-item">Office number: ${manager.officeNumber} </li>
                </ul>
            </div>
          </div>
        </div>`
}

module.exports=managerHtml