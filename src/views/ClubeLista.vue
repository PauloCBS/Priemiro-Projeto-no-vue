<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>
    <ClubesTabela :clubesOrdenados="clubesOrdenados"/>
  </v-container>
</template>

<script>
import ClubesTabela from '../components/ClubesTabela';

export default {
  name: 'ClubeLista',
  components: {
    ClubesTabela
  },
  data() {
    return {
      clubeLista: []
    }
  },
  created() {
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
      .then(response => response.json())
      .then(json => {
        this.clubeLista = json;
      })
  },
  computed: {
    clubesOrdenados() {
      const computado = this.clubeLista.slice(0).sort(
        (a, b) =>  a.pontos > b.pontos ? -1 : 1
      );
      return computado;
    }
  }
}
</script>
