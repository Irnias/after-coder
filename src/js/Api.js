class Api {
    constructor(uri,method) {
        this._uri = uri;
        this._method = method;
        this._data = null;
        this._result = [];
    }
    //curl
    //fetch es js puro
    //axios es una libreria
    callApi = async () => {
        const params = this._getParams();
        $.ajax(params)
            .done( (data) => {
                this._result = data.results;
            })
            .fail( (error)=>{
                console.log('hubo un error .' + error );
                this._result = false;
            });
    }
    getResult = () => {
        return this._result;
    }
    _getParams = () => {
        const params = {
            method : this._method,
            url: this._uri
        }
        if(this._data !== null){
            params.data = this._data;
        }
        return params;
    }
    setMethod = (value) => {
        this._method = value;
    }
    setUri = (value) => {
        this._uri = value;
    }
    setData = (value) => {
        this._data = value;
    }

}

export default Api;