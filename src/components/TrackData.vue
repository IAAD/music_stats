<template>
  <mdb-container>
    <mdb-row>
        <mdb-col lg="6">
        <mdb-jumbotron class="hoverable">
            <mdb-row>
      <mdb-col lg="4">
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
            alt="Sample image"
          />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="8">
        <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="utensils" class="pr-2" />Food
          </h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat mdb-iconcere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus et aut officiis
          debitis.
        </p>
        <p>
          by
          <a> <strong>Carine Fox</strong> </a>, 19/08/2018
        </p>
        <mdb-btn color="success" size="md" class="waves-light "
          >Read more</mdb-btn
        >
      </mdb-col>
            </mdb-row>
        </mdb-jumbotron>
        </mdb-col>
        <mdb-col lg="6">
            <mdb-jumbotron class="hoverable">
                <mdb-row>
                    <mdb-col lg="4">
                        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                            <img
                                    class="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                    alt="Sample image"
                            />
                            <a>
                                <mdb-mask overlay="white-slight" waves />
                            </a>
                        </mdb-view>
                    </mdb-col>
                    <mdb-col lg="8">
                        <a class="green-text">
                            <h6 class="font-weight-bold mb-3">
                                <mdb-icon icon="utensils" class="pr-2" />Food
                            </h6>
                        </a>
                        <h3 class="font-weight-bold mb-3 p-0">
                            <strong>Title of the news</strong>
                        </h3>
                        <p>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat mdb-iconcere possimus, omnis
                            voluptas assumenda est, omnis dolor repellendus et aut officiis
                            debitis.
                        </p>
                        <p>
                            by
                            <a> <strong>Carine Fox</strong> </a>, 19/08/2018
                        </p>
                        <mdb-btn color="success" size="md" class="waves-light "
                        >Read more</mdb-btn
                        >
                    </mdb-col>
                </mdb-row>
            </mdb-jumbotron>
        </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbMask,
  mdbIcon,
  mdbView,
  mdbBtn,
    mdbJumbotron
} from "mdbvue";

export default {
  name: "TrackData",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbBtn,
      mdbJumbotron
  }
};
</script>

<style scoped></style>
