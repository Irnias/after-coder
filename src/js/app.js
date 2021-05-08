import Api from './Api.js';
import DomBuilder from "./DomBuilder.js";

function addCustomListener(){
    $('.imageProduct').on('click', (event) => {
        const id = event.target.id;
        const thumbnail = event.target.src;

        const url = `https://api.mercadolibre.com/items/${id}/description`;
        $.ajax({
            method: 'GET',
            //url: url,
            url
        }).done((data) => {
            $('.description').html(data.plain_text);
            $('#thumbnail').attr('src', thumbnail);
            $('#productModal').show();
        }).fail((error) => {
            console.log(error);
        });
    });
}

$(document).ready(() =>{
    const URL = 'https://api.mercadolibre.com/sites/MLA/search';
    const api = new Api(URL,'POST');
    const domBuilder = new DomBuilder();
    const parent = $('#productsContainer');
    let form = $("form[name='searchForm']");

    form.validate({
        rules: {
            search: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            search: {
                required: 'El campo de busqueda es obligatorio',
                minlength: 'El campo debe tener un minimo de 3 caracteres'
            }
        },
        submitHandler: function (event) {
            const keySearch = event.elements.search.value;
            api.setData({ q : keySearch });
            api.callApi().then( () => {
                domBuilder.renderProducts(api.getResult(), parent)
            }).then( () => {
                addCustomListener();
            })
        }
    })

    /** form.on('submit', (event) => {
        event.preventDefault();
        const keySearch = event.target.search.value;

        api.setData(
            { q : keySearch }
        )
        api.callApi().then( () => {
            console.log(api.getResultado());
        } )
    }) */




    /** const urlLocal = "js/jsonBirras.JSON";
    $(() => {
        $.get(urlLocal, function (response, status) {
            if (status === "success") {
               //hacemos algo

            }else {
                console.log("Se rompio todo");
            }
        }
        }); */
})