<template>
  <div class="laws">
    <h1>Editar Normas</h1>
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
        <div>
          <button class="app_post_btn" @click="updateLaw">Update</button>
        </div>
      </div> 
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditLaw',
  data () {
    return {
      Nombre: '',
      Entidad: '',
      Ciudad: '',
      Codigo: 0,
      Usuario: ''
    }
  },
  mounted () {
    this.getLaw()
  },
  methods: {
    async getLaw () {
      const response = await PostsService.getLaw({
        id: this.$route.params.id
      })
        this.Nombre = this.response.Nombre
        this.Entidad = this.response.Entidad
        this.Ciudad = this.response.Ciudad
        this.Codigo = this.response.Codigo
        this.Usuario = this.response.Usuario
    },
    async updateLaw () {
      await PostsService.updateLaw({
        id: this.$route.params.id,
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
