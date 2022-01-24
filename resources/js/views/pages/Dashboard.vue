<template>
    <div>
        <!-- Hero -->
        <div class="content">
            <div
                class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left"
            >
                <div class="flex-sm-fill">
                    <h1 class="h3 font-w700 mb-2">Antragsübersicht</h1>
                </div>
                <div class="mt-3 mt-sm-0 ml-sm-3">
                    <b-button
                        variant="alt-primary"
                        class="mr-1"
                        href="javascript:void(0)"
                        v-click-ripple
                    >
                        <i class="fa fa-plus-square opacity-50 mr-1"></i> New
                        Neu
                    </b-button>
                    <b-button
                        variant="alt-primary"
                        class="mr-1"
                        href="javascript:void(0)"
                        v-click-ripple
                    >
                        <i class="fa fa-plus-square opacity-50 mr-1"></i>
                        Bestätigt
                    </b-button>
                    <b-button
                        variant="alt-primary"
                        class="mr-1"
                        href="javascript:void(0)"
                        v-click-ripple
                    >
                        <i class="fa fa-plus-square opacity-50 mr-1"></i>
                        Abgelehnt
                    </b-button>
                    <!-- <b-button
                        variant="alt-primary"
                        href="javascript:void(0)"
                        v-click-ripple
                    >
                        <i class="fa fa-cog"></i>
                    </b-button> -->
                </div>
            </div>
        </div>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Stats -->
            <div>
                <b-col>
                    <base-block
                        tag="a"
                        rounded
                        link-pop
                        content-class="d-flex py-4"
                        href="javascript:void(0)"
                    >
                        <b-col cols="2" md="2" lg="2" xl="2">
                            <p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                            <p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                        </b-col>
                        <b-col cols="9" md="9" lg="9" xl="9">
                            <div>John Doe Feuer- & Rettungswache 1</div>
                            <div>Dein Wunschdienstplan für 02/2022</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ...
                            </div>
                        </b-col>
                        <b-col class="text-center" cols="1" md="1" lg="1" xl="1"
                            ><p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                        </b-col>
                    </base-block>
                </b-col>
            </div>
            <div>
                <b-col>
                    <base-block
                        tag="a"
                        rounded
                        link-pop
                        content-class="d-flex py-4"
                        href="javascript:void(0)"
                    >
                        <b-col cols="2" md="2" lg="2" xl="2">
                            <p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                            <p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                        </b-col>
                        <b-col cols="9" md="9" lg="9" xl="9">
                            <div>John Doe Feuer- & Rettungswache 1</div>
                            <div>Dein Wunschdienstplan für 02/2022</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ...
                            </div>
                        </b-col>
                        <b-col class="text-center" cols="1" md="1" lg="1" xl="1"
                            ><p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                        </b-col>
                    </base-block>
                </b-col>
            </div>
            <div>
                <b-col>
                    <base-block
                        tag="a"
                        rounded
                        link-pop
                        content-class="d-flex py-4"
                        href="javascript:void(0)"
                    >
                        <b-col cols="2" md="2" lg="2" xl="2">
                            <p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                            <p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                        </b-col>
                        <b-col cols="9" md="9" lg="9" xl="9">
                            <div>John Doe Feuer- & Rettungswache 1</div>
                            <div>Dein Wunschdienstplan für 02/2022</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ...
                            </div>
                        </b-col>
                        <b-col class="text-center" cols="1" md="1" lg="1" xl="1"
                            ><p>
                                <i
                                    class="fa fa-star fa-list-ul fa-flip-horizontal"
                                ></i>
                            </p>
                        </b-col>
                    </base-block>
                </b-col>
            </div>
            <!-- END Stats -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
// Chart.js, https://www.chartjs.org
import Chart from "chart.js";

// Line Chart component using Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs
import ChartjsLine from "@/components/Chartjs/Line";

export default {
    components: {
        ChartjsLine,
    },
    data() {
        return {
            chartjsStyles: {
                position: "relative",
                height: "344px",
            },
            chartjsEarningsOptions: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                suggestedMax: 3000,
                            },
                        },
                    ],
                },
                tooltips: {
                    intersect: false,
                    callbacks: {
                        label: (tooltipItems) => {
                            return " $" + tooltipItems.yLabel;
                        },
                    },
                },
            },
            chartjsSalesOptions: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                suggestedMax: 260,
                            },
                        },
                    ],
                },
                tooltips: {
                    intersect: false,
                    callbacks: {
                        label: (tooltipItems) => {
                            return " " + tooltipItems.yLabel + " Sales";
                        },
                    },
                },
            },
            chartjsEarningsData: {
                labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                ],
                datasets: [
                    {
                        label: "This Year",
                        fill: true,
                        backgroundColor: "rgba(132, 94, 247, .3)",
                        borderColor: "transparent",
                        pointBackgroundColor: "rgba(132, 94, 247, 1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(132, 94, 247, 1)",
                        data: [
                            2150, 1350, 1560, 980, 1260, 1720, 1115, 1690, 1870,
                            2420, 2100, 2730,
                        ],
                    },
                    {
                        label: "Last Year",
                        fill: true,
                        backgroundColor: "rgba(233, 236, 239, 1)",
                        borderColor: "transparent",
                        pointBackgroundColor: "rgba(233, 236, 239, 1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(233, 236, 239, 1)",
                        data: [
                            2200, 1700, 1100, 1900, 1680, 2560, 1340, 1450,
                            2000, 2500, 1550, 1880,
                        ],
                    },
                ],
            },
            chartjsSalesData: {
                labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                ],
                datasets: [
                    {
                        label: "This Year",
                        fill: true,
                        backgroundColor: "rgba(34, 184, 207, .3)",
                        borderColor: "transparent",
                        pointBackgroundColor: "rgba(34, 184, 207, 1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(34, 184, 207, 1)",
                        data: [
                            175, 120, 169, 82, 135, 169, 132, 130, 192, 230,
                            215, 260,
                        ],
                    },
                    {
                        label: "Last Year",
                        fill: true,
                        backgroundColor: "rgba(233, 236, 239, 1)",
                        borderColor: "transparent",
                        pointBackgroundColor: "rgba(233, 236, 239, 1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(233, 236, 239, 1)",
                        data: [
                            220, 170, 110, 215, 168, 227, 154, 135, 210, 240,
                            145, 178,
                        ],
                    },
                ],
            },
            latestCustomers: [
                {
                    id: 1521,
                    avatar: "avatar11",
                    name: "Adam McCoy",
                    orders: 5,
                },
                {
                    id: 1520,
                    avatar: "avatar1",
                    name: "Betty Kelley",
                    orders: 7,
                },
                {
                    id: 1519,
                    avatar: "avatar5",
                    name: "Jesse Fisher",
                    orders: 12,
                },
                {
                    id: 1518,
                    avatar: "avatar12",
                    name: "Ryan Flores",
                    orders: 19,
                },
                {
                    id: 1517,
                    avatar: "avatar3",
                    name: "Alice Moore",
                    orders: 2,
                },
                {
                    id: 1516,
                    avatar: "avatar13",
                    name: "Scott Young",
                    orders: 5,
                },
                {
                    id: 1515,
                    avatar: "avatar14",
                    name: "Ralph Murray",
                    orders: 9,
                },
            ],
            latestOrders: [
                {
                    id: 7835,
                    date: "today",
                    state: "Pending..",
                    stateVariant: "warning",
                    total: "$999,99",
                },
                {
                    id: 7834,
                    date: "today",
                    state: "Pending..",
                    stateVariant: "warning",
                    total: "$2.299,00",
                },
                {
                    id: 7833,
                    date: "today",
                    state: "Success",
                    stateVariant: "success",
                    total: "$1200,00",
                },
                {
                    id: 7832,
                    date: "today",
                    state: "Cancelled",
                    stateVariant: "danger",
                    total: "$399,00",
                },
                {
                    id: 7831,
                    date: "today",
                    state: "Success",
                    stateVariant: "success",
                    total: "$349,00",
                },
                {
                    id: 7830,
                    date: "today",
                    state: "Success",
                    stateVariant: "success",
                    total: "$999,00",
                },
                {
                    id: 7829,
                    date: "today",
                    state: "Success",
                    stateVariant: "success",
                    total: "$39,99",
                },
                {
                    id: 7828,
                    date: "today",
                    state: "Success",
                    stateVariant: "success",
                    total: "$499,00",
                },
                {
                    id: 7827,
                    date: "today",
                    state: "Success",
                    stateVariant: "success",
                    total: "$325,00",
                },
            ],
        };
    },
    created() {
        // Set Chart.js configuration
        Chart.defaults.global.defaultFontColor = "#495057";
        Chart.defaults.global.defaultFontStyle = "600";
        Chart.defaults.scale.gridLines.color = "transparent";
        Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
        Chart.defaults.scale.display = false;
        Chart.defaults.scale.ticks.beginAtZero = true;
        Chart.defaults.global.elements.line.borderWidth = 0;
        Chart.defaults.global.elements.point.radius = 0;
        Chart.defaults.global.elements.point.hoverRadius = 0;
        Chart.defaults.global.tooltips.cornerRadius = 3;
        Chart.defaults.global.legend.labels.boxWidth = 12;
    },
};
</script>
