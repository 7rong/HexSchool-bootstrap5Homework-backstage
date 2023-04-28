const modalByDelete = document.querySelector('#deleteModal');
modalByDelete.addEventListener('show.bs.modal',function(e){
    const button = e.relatedTarget;
    const orderId = button.dataset.bsOrderId;
    const modalText = modalByDelete.querySelector('#deleteText');

    modalText.textContent = orderId;
})