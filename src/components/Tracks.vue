<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-card-group deck>
                    <mdb-card>
                        <mdb-view hover>
                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </mdb-view>
                        <mdb-card-body>
                            <mdb-card-title>Card title</mdb-card-title>
                            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
                                card's content.</mdb-card-text>
                            <mdb-btn color="primary">Read more</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                    <mdb-card>
                        <mdb-view hover>
                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </mdb-view>
                        <mdb-card-body>
                            <mdb-card-title>Card title</mdb-card-title>
                            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
                                card's content.</mdb-card-text>
                            <mdb-btn color="primary">Read more</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                    <mdb-card>
                        <mdb-view hover>
                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></mdb-card-image>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </mdb-view>
                        <mdb-card-body>
                            <mdb-card-title>Card title</mdb-card-title>
                            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
                                card's content.</mdb-card-text>
                            <mdb-btn color="primary">Read more</mdb-btn>
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
        }
    }
</script>

<style scoped>

</style>