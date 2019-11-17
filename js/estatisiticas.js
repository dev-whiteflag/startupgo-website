window.onload = function () {

    this.graficos();

}
function graficos() {

    var ctx = document.getElementById('myChart');


    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Menos de 50 mil', '50 mil a 250 mil', '250 mil a 500 mil', '500 mil a 1 milhão', '1 a 2,5 milhões', '2,5 a 5 milhões', 'Acima de 5 milhões', 'Sem faturamento'],
            datasets: [{
                label: "Números em %",
                data: [16, 19, 9, 3, 4, 1, 0, 48],
                backgroundColor: [
                    'rgb(255, 99, 132 )',
                    'rgb(54, 162, 235 )',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 206, 86 )',
                    'rgb(75, 192, 192)',
                    'rgb(55, 86, 144)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        }

    });

    var ctx = document.getElementById('myChart2');


    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            label: "Números em %",
            labels: ['Mais de um founder e a maioria é mulher', 'Mais de um founder e a proporção entre sexos é igual', 'Um único founder mulher', 'Mais de um founder e a maioria é homem', 'Um único founder homem'],
            datasets: [{
                label: "Números em %",
                data: [3, 4, 12, 21, 59],
                backgroundColor: [
                    'rgb(255, 99, 132 )',
                    'rgb(54, 162, 235 )',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 206, 86 )'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });

    var ctx = document.getElementById('myChart3');


    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Curiosidade', 'Ideação', 'Operação', 'Tração', 'Scale Up'],
            datasets: [{
                label: '# of Votes',
                data: [0, 25, 36, 33, 6],
                backgroundColor: [

                    'rgb(255, 206, 86 )',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 206, 86 )'

                ],
                borderColor: [

                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'

                ],
                borderWidth: 1
            }]
        }
    });

    var ctx = document.getElementById('myChart4');


    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Incubada', 'Acelerada', 'Nenhuma das opções'],
            datasets: [{
                label: '# of Votes',
                data: [10, 11, 79],
                backgroundColor: [
                    'rgb(0,255,0 )',
                    'rgb(255,255,0)',
                    'rgb(255, 159, 64)'

                ],
                borderColor: [
                    'rgba(0,255,0, 1)',
                    'rgba(255,255,0,1)'
                ],
                borderWidth: 1
            }]
        }
    });

    var ctx = document.getElementById('myChart5');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['SaaS', 'Marketplace', 'Outros', 'Consumer', 'Venda Direta', 'Hardware', 'Clube de Assinatura', 'Venda de Dados','Licenciamento','Comissionamento','Cursos, treinamentos e consultorias','Serviços','API'],
            datasets: [{
                label: "Números em %",
                data: [16, 19, 9, 3, 4, 1, 0, 48],
                backgroundColor: [
                    'rgb(255, 99, 132 )',
                    'rgb(54, 162, 235 )',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 206, 86 )',
                    'rgb(75, 192, 192)',
                    'rgb(55, 86, 144)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        }
    });

    /*
        var ctx = document.getElementById('myChart6');
    
    
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Médio', 'Superior ' + AlunoSuperior, 'Técnico'],
                datasets: [{
                    label: '# of Votes',
                    data: [AlunoMedio, AlunoSuperior, AlunoTecnico],
                    backgroundColor: [
                        'rgb(220,20,60)',
                        'rgb(176,224,230)',
                        'rgb(55, 86, 144)'
                    ],
                    borderColor: [
                        'rgba(220,20,60,1)',
                        'rgba(176,224,230,1)',
                        'rgb(55, 86, 144,1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    */
}