onload = () => {
  document.documentElement.requestFullscreen().catch(err => {
    console.log("Error al entrar en pantalla completa: ", err);
  });
  document.body.classList.remove("container");
  const nameOfPerson = document.getElementById("name-person");
  // Get name of the queryparams
    const urlParams = new URLSearchParams(window.location.search);
    nameOfPerson.innerHTML = urlParams.get("name") ?? '';
    //Que la clase sobreponga encima de cualquier cosas
  // nameOfPerson.classList.add("container");
};
