document.querySelector("#bt1").onclick=()=>
Swal.fire({
    title: "Introduce tu usuario de GitHub",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `
          https://api.github.com/users/${login}
        `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`
            ${JSON.stringify(await response.json())}
          `);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
          Request failed: ${error}
        `);
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Avatar de ${result.value.login}`,
        imageUrl: result.value.avatar_url
      });
    }
  });
  

  document.querySelector("#bt2").onclick=()=>
  Swal.fire({
    title: "<strong>La página colapsó</strong>",
    icon: "info",
    html: `
      Intenta abrirla de nuevo <b>más tarde</b>,
      <a href="#">entra aquí en caso de que no responda</a>
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> ¡Entendido, gracias!
    `,
    confirmButtonAriaLabel: "Ok, gracias",
    cancelButtonText: `
      <i class="fa fa-thumbs-down"></i>
    `,
    cancelButtonAriaLabel: "Cancelar"
  });



  document.querySelector("#bt3").onclick=()=>
  Swal.fire({
    title: "¡Echa un vistazo a las imágenes aleatorias!",
    text: " Imágenes aleatorias aparecerán cada vez que entres",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });


  document.querySelector("#bt4").onclick=()=>
  Swal.fire({
    title: "¿Estás seguro de cancelar la descarga?",
    text: "Los cambios no podrán recuperarse",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Descarga cancelada éxitosamente!",
        text: "Consulta en otro momento",
        icon: "success"
      });
    }
  });


  document.querySelector("#bt5").onclick=()=>
  Swal.fire({
    title: "¿Estas seguro de descartar cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonColor: "#FF0000",
    confirmButtonColor: "#00913f",
    denyButtonColor:"#0000FF",
    
    denyButtonText: `No estoy seguro`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("¡Cambios descartados!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Los cambios no se descartaron", "", "info");
    }
  });


  
  let timerInterval;
  document.querySelector("#bt6").onclick=()=>
Swal.fire({
  title: "¡Esta pagina cerrará en automático!",
  html: "Conteo de <b></b> millisegundos.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

document.querySelector("#bt7").onclick=()=>
Swal.fire({
    icon: "error",
    title: "Chin...",
    text: "La página crasheó por un error inesperado",
    footer: '<a href="#">¿Por qué crashean las páginas?</a>'
  });