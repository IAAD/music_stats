<template>
    <mdb-container>
        <mdb-row>
            <mdb-col class="-align-center">
    <mdb-jumbotron class="hoverable center-block">
        <mdb-row>
            <mdb-container>
                <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"></mdb-bar-chart>
            </mdb-container>
        </mdb-row>
    </mdb-jumbotron>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    import { mdbBarChart, mdbContainer, mdbRow, mdbJumbotron, mdbCol } from 'mdbvue';

    export default {
        name: 'TopTracks',
        components: {
            mdbBarChart,
            mdbContainer,
            mdbJumbotron,
            mdbRow,
            mdbCol
        },
        data() {
            return {
                barChartData: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                    }]
                },
                barChartOptions: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            barPercentage: 1,
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)",
                            }
                        }],
                    }
                }
            };
        }
    };
</script>

<style scoped>

</style>