// Tomo los valores del DOM, nombre y el boton
const nombre = document.getElementById("nombre");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    console.log(nombre.value);
});


// JQuery
// ocumpamos el metodo .ready() para asegurarnos que ....

$(document).ready(function () {

    // Paso 1: Al hacer clic en el boton realizamos la busqueda
    $("#button").on("click", () => {

        const nombre = $("#nombre").val();
        const URLBASE = `https://www.superheroapi.com/api.php/4905856019427443`;
        let valorURL = "";
        if (isNum(nombre)) {

            if (nombre >= 1 && nombre <= 731) {
                valorURL = `${URLBASE}/${nombre}`

                $.ajax({
                    url: valorURL,
                    type: "GET",
                    dataType: "JSON",
                    success: (data) => {

                        console.log(data)
                        // data.map( obj => {

                        const heroe = data;
                        console.log(heroe);

                        const nameHeroe = heroe.name;
                        const imgHeroe = heroe.image.url;
                        const connectionsHeroe = heroe.connections["group-affiliation"];
                        const publisherHeroe = heroe.biography.publisher;
                        const occupationHeroe = heroe.work.occupation;
                        const firstappearanceHeroe = heroe.biography["first-appearance"];
                        const heightHeroe = heroe.appearance.height;
                        const weightHeroe = heroe.appearance.weight;
                        const aliasesHeroe = heroe.biography.aliases;


                        // Javascript 
                        const resultado = document.getElementById("resultado");

                        resultado.innerHTML = `
                                <div class="card " style="width:340px;">
                                    <div class="row g-0">
                                        <div class="col-md-4 "><img width=100px src="${imgHeroe}" class="card-img-top" alt="${nameHeroe}"></div>
                                        <div class="col-md-8 ">
                                        <div class="tituloNombre">Nombre: ${nameHeroe}</div>
                                        <div class="descripcion">Conexiones: ${connectionsHeroe}</div>
                                        <div class="descripcion">Publicado por: ${publisherHeroe}</div>
                                        <div class="descripcion">Ocupación: ${occupationHeroe}</div>
                                        <div class="descripcion">Primera Aparición: ${firstappearanceHeroe}</div>
                                        <div class="descripcion">Altura: ${heightHeroe}</div>
                                        <div class="descripcion">Peso: ${weightHeroe}</div>
                                        <div class="descripcion">Alianza: ${aliasesHeroe}</div>
                                        </div>
                                    </div>              
                                </div>`;



                        // Seccion grafico
                        const intelligence = data.powerstats.intelligence;
                        const strength = data.powerstats.strength;
                        const speed = data.powerstats.speed;
                        const durability = data.powerstats.durability;
                        const power = data.powerstats.power;
                        const combat = data.powerstats.combat;

                        var options = {
                            title: {
                                text: "Gráfico de circular con jQuery CanvasJS",
                            },
                            axisX: {
                                title: "Frutas Tropicales",
                                titleFontSize: 12
                            },
                            axisY: {
                                title: "Consumo Kg/persona/año",
                                titleFontSize: 12
                            },
                            data: [
                                {
                                    type: "pie",
                                    startAngle: 50,
                                    yValueFormatString: "##",
                                    indexLabel: "{label} {y}",

                                    dataPoints: [

                                        { label: "intelligence", y: intelligence },
                                        { label: "strength", y: strength },
                                        { label: "speed", y: speed },
                                        { label: "durability", y: durability },
                                        { label: "power", y: power },
                                        { label: "combat", y: combat },
                                    ],
                                },
                            ],
                        };
                        $("#chartContainer").CanvasJSChart(options);

                        
                    } 
                }) 
            }
            else {
                alert("Valor numerico fuera de rango de [1 a 731]")
            }
        }
        else {
            valorURL = `${URLBASE}/search/${nombre}`
            alert("ingrese solo numeros");
        };

        console.log($("#nombre").val());
    })
});

function isNum(val) {
    return !isNaN(val)
}


