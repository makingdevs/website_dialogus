<template>
    <div class="container" style="margin-top: 82px">

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Titulo</span>
            <input type="text" class="form-control" placeholder="Titulo de la variable" aria-label="Titulo de la variable" aria-describedby="basic-addon1" v-model="tarjeta.title">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Fecha</span>
          <input type="date" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.date">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Hora</span>
          <input type="time" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.time">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Descripción</span>
          <input maxlength = "78" type="text" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.description">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Registro (url)</span>
          <input type="text" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.urlRegister">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Imágen</span>
          <input type="text" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.image">
        </div>
        <button @click="createWord" type="button" class="btn btn-success">Crear Palabra</button>
        <button @click="logout" type="button" class="btn btn-success">Cerrar Sesión</button>
        <br>
        <br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Descripción</th>
              <th scope="col">Imagen</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(tarjeta, index) in TarjetasCarruselTable" :key="tarjeta['.key']" style="color:white" >
              <td>
                <h6 :class="'index_text' + index">{{tarjeta.title}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.title" style="display: none"/>
              </td>
              <td>
                <h6 :class="'index_text' + index">{{tarjeta.date}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.date" style="display: none"/>
              </td>
              <td>
                <h6 :class="'index_text' + index">{{tarjeta.description}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.description" style="display: none"/>
              </td>
              <td>
                <h6 :class="'index_text' + index">{{tarjeta.image}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.image" style="display: none"/>
              </td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-success" :id="'index_edit' + index" @click="editEnable(index)">Editar</button>
                  <button type="button" class="btn btn-success" :class="'index_' + index" style="display:none" @click="unableEdit(index); updateWord(tarjeta)">Save</button>
                  <button type="button" class="btn btn-danger" @click="deleteWord(tarjeta)">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>


<script>

import { TarjetasCarruselTableRef } from '../dbConnection'
import auth from '@/assets/js/auth/auth.js';
export default {
  name: "TextAdministration",
  firebase: {
    TarjetasCarruselTable: TarjetasCarruselTableRef
  },
  data: function (){
    return {
      tarjeta: {
        title: "",
        date: "",
        time: "",
        description: "",
        urlRegister: "",
        image: ""
      },
      title: {
        value: ""
      },
      TarjetasCarruselTable: []
    }
  },
  created: function () {
    this.exampleMethod()
    console.log(this.TarjetasCarruselTable)
    this.title = this.TarjetasCarruselTable[0];
  },
  mounted(){
   this.title = this.TarjetasCarruselTable[0]; 
  },
  components: {
  },
  methods: {
    exampleMethod(){
      console.log("Hola mundo")
    },
    createWord(){
      TarjetasCarruselTableRef.push(this.tarjeta); 
    },
    setTitle(){
      console.log(this.TarjetasCarruselTable[0])
      this.title = this.TarjetasCarruselTable[0]; 
    },
    editEnable(index){
      let inputs =  document.getElementsByClassName("index_" + index)
      let texts =  document.getElementsByClassName("index_text" + index)
      let editButton = document.getElementById("index_edit" + index)
      editButton.style.display = "none"
      inputs.forEach(element => element.style.display = "block")
      texts.forEach(element => element.style.display = "none")
    },
    unableEdit(index){
      let inputs =  document.getElementsByClassName("index_" + index)
      let texts =  document.getElementsByClassName("index_text" + index)
      let editButton = document.getElementById("index_edit" + index)
      editButton.style.display = "block"
      inputs.forEach(element => element.style.display = "none")
      texts.forEach(element => element.style.display = "block")
    },
    deleteWord(tarjeta){
      TarjetasCarruselTableRef.child(tarjeta['.key']).remove()
    },
    updateWord(tarjeta){
      console.log(tarjeta)
      let nuevo = TarjetasCarruselTableRef.child(tarjeta['.key'])
      console.log(nuevo)
      nuevo.set(tarjeta)
    },
    logout() {
      auth.deleteUserLogged();
      this.$router.go("/login");
    }
  }

};
</script>

