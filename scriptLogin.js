document.addEventListener("DOMContentLoaded", () => {
    const logear = document.getElementById("logear");
    const nombre = document.getElementById("nombre");

    if(logear){
        const nombreGuardado = localStorage.getItem("nombre");

        if(nombreGuardado){
            mostrarNombreJugador(nombreGuardado);
        }else{
            logear.addEventListener("click", () =>{
                window.location.href = "login.html";
            });
        }
    }

    if(nombre){
        nombre.addEventListener("keydown", (e) => {
            if(e.key === "Enter"){
                const nombreJugador = nombre.value.trim();

                if(nombreJugador === ""){
                    alert("Introduce un nombre, humano...");
                    return;
                }

                localStorage.setItem("nombre", nombreJugador);
                window.location.href = "index.html";
            }
        });
    }
});

function mostrarNombreJugador(nombre){
    const logear = document.getElementById("logear");
    if(!logear) return;

    const ponerNombre = document.createElement("span");
    ponerNombre.textContent = `${nombre}`;
    ponerNombre.classList.add("nombre-jugador");

    ponerNombre.addEventListener("click", () => {
        localStorage.removeItem("nombre");
        window.location.reload();
    });

    logear.replaceWith(ponerNombre);
}

