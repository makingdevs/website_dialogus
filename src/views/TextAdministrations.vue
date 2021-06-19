<template>
    <div class="container" style="margin-top: 82px">

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Titulo</span>
            <input type="text" class="form-control" placeholder="Titulo de la variable" aria-label="Titulo de la variable" aria-describedby="basic-addon1" v-model="word.name">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Value</span>
          <input type="text" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="word.value">
        </div>
        <button @click="createWord" type="button" class="btn btn-success">Crear Palabra</button>
        <button @click="logout" type="button" class="btn btn-success">Cerrar Sesión</button>
        <br>
        <br>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Descripción</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(word, index) in HomePageTable" :key="word['.key']" style="color:white" >
              <td>
                <h6 :class="'index_text' + index">{{word.name}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="word.name" style="display: none"/>
              </td>
              <td>
                <h6 :class="'index_text' + index">{{word.value}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="word.value" style="display: none"/>
              </td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-success" :id="'index_edit' + index" @click="editEnable(index)">Editar</button>
                  <button type="button" class="btn btn-success" :class="'index_' + index" style="display:none" @click="unableEdit(index); updateWord(word)">Save</button>
                  <button type="button" class="btn btn-danger" @click="deleteWord(word)">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>


<script>

import {HomePageTableRef} from '../dbConnection'
import auth from '@/assets/js/auth/auth.js';
export default {
  name: "TextAdministration",
  firebase: {
    HomePageTable: HomePageTableRef
  },
  data: function (){
    return {
      word: {
        name: "",
        value: ""
      },
      title: {
        value: ""
      },
      HomePageTable: []
    }
  },
  created: function () {
    this.exampleMethod()
    console.log(this.HomePageTable)
    this.title = this.HomePageTable[0];
  },
  mounted(){
   this.title = this.HomePageTable[0]; 
  },
  components: {
  },
  methods: {
    exampleMethod(){
      console.log("Hola mundo")
    },
    createWord(){
      HomePageTableRef.push(this.word); 
      this.word.name = "";
      this.word.value = "";
    },
    setTitle(){
      console.log(this.HomePageTable[0])
      this.title = this.HomePageTable[0]; 
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
    deleteWord(word){
      HomePageTableRef.child(word['.key']).remove()
    },
    updateWord(word){
      console.log(word)
      let nuevo = HomePageTableRef.child(word['.key'])
      console.log(nuevo)
      nuevo.set(word)
    },
    logout() {
      auth.deleteUserLogged();
      this.$router.go("/login");
    }
  }

};
</script>

