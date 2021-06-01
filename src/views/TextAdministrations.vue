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
            <tr  v-for="w in HomePageTable" :key="w['.key']" style="color:white" >
              <td>{{w.name}}</td>
              <td>{{w.value}}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-success">Editar</button>
                  <button type="button" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr v-for ="w in HomePageTable" :key="w['.key']" style="color:white">

            </tr>
            
          </tbody>
        </table>
    </div>
</template>


<script>

import {HomePageTableRef} from '../dbConnection'
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
    }
  }

};
</script>

