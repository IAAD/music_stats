<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-card-group>
                    <mdb-card
                    v-for="track in tracks"
                    v-bind:key="track.id"
                    >
                        <mdb-view hover>
                            <mdb-card-image :src=track.album.images[0].url alt="Card image cap"></mdb-card-image>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </mdb-view>
                        <mdb-card-body>
                            <mdb-card-title>{{track.name}}</mdb-card-title>
                            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
                                card's content.</mdb-card-text>
                            <mdb-btn color="primary" v-on:click="viewInfo(track.id)">View Track</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-card-group>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    import { mdbRow, mdbBtn, mdbCard, mdbCardBody, mdbCardImage, mdbCardText, mdbCardTitle, mdbCardGroup,mdbContainer} from 'mdbvue';
    export default {
        name: "Tracks",
        components:{
            mdbBtn,
            mdbCard,
            mdbCardBody,
            mdbCardImage,
            mdbCardText,
            mdbCardTitle,
            mdbCardGroup,
            mdbContainer,
            mdbRow
        },
        props:['tracks'],
        methods:{
            viewInfo(id){
                console.log(id)
            }
        }

    }
</script>

<style scoped>
    @media (min-width: 0) {
        .card-group .card {
            flex: 0 0 calc(100% - 40px);
            margin: 15px 15px;
        }
    }
    @media (min-width: 576px) {
        .card-group .card {
            flex: 0 0 calc(50% - 30px);
            margin: 15px 15px;
        }
    }
    @media (min-width: 768px) {
        .card-group .card {
            flex: 0 0 calc(50% - 30px);
            margin: 15px 15px;
        }
    }
    @media (min-width: 992px) {
        .card-group .card {
            flex: 0 0 calc(33.3333333333% - 30px);
            margin: 15px 15px;
        }
    }
    @media (min-width: 1200px) {
        .card-group .card {
            flex: 0 0 calc(25% - 30px);
            margin: 15px 15px;
        }
    }

    .card {
        flex: 1;
    }
</style>