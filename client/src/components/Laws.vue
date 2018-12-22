<template>
  <div class="laws">
    <h1>Normas</h1>
    <div v-if="laws.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewLaw' }" class="">Add</router-link>
      </div>
      <table>
        <tr>
          <td>Nombre</td>
          <td>Entidad</td>
          <td>Codigo</td>
          <td>Ciudad</td>
          <td>Usuario</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="law in laws" :key="law._id">
          <td>{{ law.Nombre }}</td>
          <td>{{ law.Entidad }}</td>
          <td>{{ law.Codigo }}</td>
          <td>{{ law.Ciudad }}</td>
          <td>{{ law.Usuario }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditLaw', params: { id: law._id } }">Editar</router-link> |
            <a href="#" @click="deleteLaw(law._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      No hay Normas.. Agrega una <br /><br />
      <router-link v-bind:to="{ name: 'NewLaw' }" class="add_post_link">Add Norma</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'laws',
  data () {
    return {
      laws: []
    }
  },
  mounted () {
    this.getlaws()
  },
  methods: {
    async getlaws () {
      const response = await PostsService.fetchLaws()
      this.laws = response.data.laws
    },
    async deleteLaw (id) {
      await PostsService.deleteLaw(id)
      this.$router.push({ name: 'Laws' })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
