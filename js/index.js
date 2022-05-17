//= TO DO List para visitar provincias en Argentina

//* fetch 
const provincias = document.querySelector('#listado')

fetch('/json/data.json') 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    });

//' método constructor:
class Actividad{
    constructor(tipo) {
    this.tipo = tipo;
}

}

//'objetos:

const aireLibreNaturaleza = new Actividad ("Aire libre / Naturaleza");
const arte = new Actividad ("Arte");
const culturaHistoria = new Actividad ("Cultura / Historia");
const deporte = new Actividad ("Deporte");
const gastronomia = new Actividad ("Gastronomía");
const religion = new Actividad ("Religión");


//' array:
const tipoActividades = ["aireLibreNaturaleza", "arte", "culturaHistoria", "deporte", "gastronomia", "religion"];
console.log(tipoActividades);

//* acceso condicional a un objeto:
console.log(deporte?.tipo || "No se encuentran resultados");
console.log(gastronomia?.restaurantes || "No se encuentran resultados");



class toDoList{
    constructor(tipoDeActividad, provincia, actividad, fecha ,status){
        this.tipoDeActividad = tipoDeActividad;
        this.provincia = provincia;
        this.actividad = actividad;
        this.fecha = fecha;
        this.status = status;
    }
   
}

// Inicializa la lista de TODO
const resetInputs = ()=>{
    inputSeleccionarActividad.value = "";
    inputSeleccionar.value = "";
    inputActividad.value ="";
    inputFecha.value ="";
    resultado.innerHTML = "Una nueva actividad ha sido agregada"

}

// Agregar una actividad a la to do list

const addActividad = () =>{
   
   let tipoDeActividad = inputSeleccionarActividad.value;
   let provincia = inputSeleccionar.value;
   let actividad = inputActividad.value;
   let fecha = inputFecha.value;
   let newTodo = new toDoList(tipoDeActividad, provincia, actividad, fecha,'Para hacer'); 
   todoList.push(newTodo);
   
   localStorage.setItem("todoList", JSON.stringify(todoList)); 

   agregarAToDoList(); // Actualiza la lista de TODO
   resetInputs(); // Limpia el formulario
   //addEventListener();

}


// Botón para agregar a la lista
btnAgregarActividad.onclick = (e) =>{
    e.preventDefault(); // así no actualiza la página
    addActividad(); // agrega una nueva actividad
    
}


// Sweet alert:
btnAgregarActividad.addEventListener ("click", () => { 
    Swal.fire({
        title: '¡La actividad fue agregada con éxito!',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 2000,
      })
})


// Marcar todo como realizado
checkClick = (index) =>{
    todoList[index].status = 'Realizado';
    localStorage.setItem("todoList",JSON.stringify(todoList));
    agregarAToDoList();
    
}


canceledClick = (index) =>{
    todoList[index].status = 'Cancelado';
    localStorage.setItem("todoList",JSON.stringify(todoList));
    agregarAToDoList();
    
}





