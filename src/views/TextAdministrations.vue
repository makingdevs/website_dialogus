<template >
  <div>
          <!-- PAGE TITLE
        ================================================== -->
        <section class="parallax page-title-section top-position bg-img cover-background" data-overlay-dark="55" id="banner3">
          <div class="container">

              <div class="row">
                  <div class="col-md-12">
                      <h1>Administracion de Tarjetas</h1>
                  </div>
              </div>

          </div>
      </section>

    <div class="container" style="margin-top: 82px">

        <div class="input-group mb-3">
            <span class="input-group-text" >Titulo</span>
            <input maxlength = "25" type="text" class="form-control" placeholder="Titulo de la variable" aria-label="Titulo de la variable" aria-describedby="basic-addon1" v-model="tarjeta.title">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" >Fecha</span>
          <input type="date" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.date">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" >Hora</span>
          <input type="time" class="form-control" placeholder="Nombre del valor" aria-label="Nombre del valor" aria-describedby="basic-addon1" v-model="tarjeta.time">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" >Descripción</span>
          <input maxlength = "78" type="text" class="form-control" placeholder="Describe tu tarjeta" aria-label="Describe tu tarjeta" aria-describedby="basic-addon1" v-model="tarjeta.description">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" >Registro (url)</span>
          <input type="text" class="form-control" placeholder="URL de Registro" aria-label="URL de Registro" aria-describedby="basic-addon1" v-model="tarjeta.urlRegister">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" >Imágen</span>
          <input type="text" class="form-control spaceTextosAdmistra" placeholder="URL de Imagen" aria-label="URL de Imagen" aria-describedby="basic-addon1" v-model="tarjeta.image">
        </div>
        <div class="d-flex justify-content-center">
        <button @click="createWord" type="button" class="btn btn-success"> Crear Tarjeta </button>
        <button @click="logout" type="button" class="btn btn-success"> Cerrar Sesión </button>
        </div>
        <br>
        <table class="table table-striped table-bordered ">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
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
                <h6 :class="'index_text' + index">{{tarjeta.time}}</h6>
                <input type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.time" style="display: none"/>
              </td>
              <td>
                <h6 :class="'index_text' + index">{{tarjeta.description}}</h6>
                <input maxlength = "78" type="text" class="form-control" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.description" style="display: none"/>
              </td>
              <td>
                <h6 :class="'index_text' + index">{{tarjeta.image}}</h6>
                <input type="text" class="form-control spaceTextosAdmistra" name="" :class="'index_' + index" aria-describedby="helpId" placeholder="" v-model="tarjeta.image" style="display: none"/>
              </td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-success" :id="'index_edit' + index" @click="editEnable(index)">Editar</button>
                  <button type="button" class="btn btn-success spaceTextosAdmistra" :class="'index_' + index" style="display:none" @click="unableEdit(index); updateWord(tarjeta)">Save</button>
                  <button type="button" class="btn btn-danger" @click="deleteWord(tarjeta)">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<style>
  #banner3{
    background-image: url('../assets/serv1.jpg')
  }
  .spaceTextosAdmistra{
      word-wrap: break-word;
    }
</style>

<script>

import { TarjetasCarruselTableRef } from '../dbConnection'
import auth from '@/assets/js/auth/auth.js';
import { hideLoader } from '../assets/js/utils';
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
   hideLoader(); 
  },
  components: {
  },
  methods: {
    exampleMethod(){
      
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

