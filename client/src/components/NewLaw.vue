<template>
  <div class="laws">
    <h1>Ingresar Norma</h1>
      <div class="form">
        <div>
          <input type="text" name="Nombre" placeholder="Nombre" v-model="Nombre">
        </div>
        <div>
          <input type="text" name="Entidad" placeholder="Entidad" v-model="Entidad">
        </div>
        <div>
          <input type="number" name="Codigo" placeholder="Codigo" v-model="Codigo">
        </div>
        <div>
          <input type="text" name="Ciudad" placeholder="Ciudad" v-model="Ciudad">
        </div>
        <div>
          <input type="text" name="Usuario" placeholder="Usuario" v-model="Usuario">
        </div>
          <button class="app_post_btn" @click="addLaw">Add</button>
        </div>
      </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewLaw',
  data () {
    return {
      Nombre: '',
      Entidad: '',
      Ciudad: '',
      Codigo: 0,
      Usuario: ''
    }
  },
  methods: {
    async addLaw () {
      await PostsService.addLaw({
        Nombre: this.Nombre,
        Entidad: this.Entidad,
        Ciudad: this.Ciudad,
        Codigo: this.Codigo,
        Usuario: this.Usuario
      })
      this.$router.push({ name: 'Laws' })
    }
  }
}
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
