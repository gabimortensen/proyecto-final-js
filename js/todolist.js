// Actualizar lista to do
 
const agregarAToDoList = () =>{ 

    tablaToDo.innerHTML = "";
    let tr;
    

    todoList.forEach((elemento, i) => {
        tr = document.createElement('tr');
        tr.setAttribute("id", i);
        if(elemento.status === 'Realizado') tr.setAttribute("class",'ready');

        tr.innerHTML = `
                        <td>${elemento.provincia}</td>
                        <td>
                            <img src="/images/${elemento.tipoDeActividad}" alt="">
                        </td>
                        <td>${elemento.actividad}</td>
                        <td>${elemento.fecha}</td>
                        <td>${elemento.status}</td>
                        <td>
                            <img class="pointer" src="/images/realizado.png" onClick="checkClick(${i})">
                            <img class="pointer" src="images/cancelado.png" onClick="canceledClick(${i})">
                            
                        </td>`;

    
    tablaToDo.appendChild(tr);
    });

}


let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
//let todoListEliminado = JSON.parse(localStorage.getItem("todoListEliminado")) || [];

//if(todoList.length > 0) agregarAToDoList();

//* uso de operador AND 
todoList.length > 0 && agregarAToDoList();
//todoListEliminado.length > 0 && AgregarToDoEliminado();

    