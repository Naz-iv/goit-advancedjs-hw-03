
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let raiseEmptySearchCriteria = () => {
    iziToast.show({
        message: `Fill search field`,
        position: "topRight",
        backgroundColor: 'rgb(250,128,114)',
        messageColor: 'rgb(255,255,255)'
    });
}

let raiseEmptyResponse = () => {
    iziToast.show({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: "topRight",
        backgroundColor: 'rgb(250,128,114)',
        messageColor: 'rgb(255,255,255)'
    });
}

export function loadData(searchText, callbackOnSuccess, callbackOnError, callOnFinally) {
    if (searchText === null || searchText === "") {
        raiseEmptySearchCriteria();
        callOnFinally();
        return;
    }

    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
    };

    fetch('https://pixabay.com/api/?' + new URLSearchParams({
        key: '45339856-2e70ead6ce9cf82bdbbd89c7e',
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    }).toString(), options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(response => {
            if (response.hits.length > 0) {
                callbackOnSuccess(response);
            } else {
                raiseEmptyResponse();
            }
        })
        .catch(error => callbackOnError(error))
        .finally(() => callOnFinally());
}