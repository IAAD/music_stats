<template>
    <div>
    <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg)">
        <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">
                <h5 class="h5 orange-text"><i class="fas fa-camera-retro"></i> Photography</h5>
                <h2 class="card-title h2 my-4 py-2">Jumbotron with image overlay</h2>
                <p class="mb-4 pb-2 px-md-5 mx-md-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati vero aliquid libero doloribus ad, unde tempora maiores, ullam, modi qui quidem minima debitis perferendis vitae cumque et quo impedit.</p>
                <mdb-btn tag="a" gradient="peach" icon="clone">View project</mdb-btn>
            </div>
        </div>
    </mdb-card>
        <div class="input-group md-form form-sm form-2 pl-0">
        <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
            <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
        </div>
    </div>

    </div>
</template>

<script>
    import { mdbBtn, mdbCard} from 'mdbvue';
    export default {
        name: "Header",
        components:{
            mdbBtn,
            mdbCard
        }


    }
</script>

<style scoped>
    .card{
        background-position: center;
        background-size: cover;
    }

</style>