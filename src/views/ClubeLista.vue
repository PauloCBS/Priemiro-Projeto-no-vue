<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-15">Classificação</h2>
    </v-container>
</template>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th colspan="2"class="text-left">
                Clubes
            </th>
            <th class="text-left">
                Pontos
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(clube, index) of ClubeListaOrdenada" :key="clube.id" >  
                <td>{{index + 1}}</td>
                <td>
                     <v-avatar size="24" >
                        <img
                            src="clube.escudo"
                            alt="clube.nome" >
                        </v-avatar>
                        <span class="pr-2"> {{clube.nome}}</span></td>
                <td class="text-right">{{clube.pontos}}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
<script>
export default {
    name: 'ClubeLista',
    data(){
        return{
            ClubeLista:[]
        }
    },
    computed:{
            ClubeListaOrdenada(){
                const listaOrdenada = this.ClubeLista.slice(0).sort(
                    (a,b) => a.pontos > b.pontos ? -1 : 1
                );

                return listaOrdenada;
            }
    },
    created(){
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
            .then(resposta => resposta.json())
            .then(json => {
                this.ClubeLista =json,
                console.log(this.ClubeLista)
            });
            
}
}
</script>
