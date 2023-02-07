const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

swalWithBootstrapButtons.fire({
    title: '¡Hola! Bienvenido a Plan Control.',
    text: "¿Sabés como utilizar Plan Control?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'No, quiero ver el tutorial',
    cancelButtonText: 'Sí, ya se utilizar Plan Control',
    reverseButtons: true
}).then((result) => {
    if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
        )
    } else if (
      /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
    ) {
        swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
        )
    }
    })