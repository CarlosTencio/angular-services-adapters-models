import { Character } from "../models";

export const characterAdapter = (characters: Character[]) => {

    return characters.map((c) => ({ ...c, name: c.name.toUpperCase() }));
}

/**
 * En una arquitectura organizada en Angular, la carpeta adapters se utiliza comúnmente para manejar la transformación de datos entre las diferentes capas de la aplicación. Es decir, se encarga de convertir datos de un formato a otro, especialmente cuando se interactúa con APIs externas o bases de datos.

Esto sigue el principio de separación de responsabilidades, asegurando que la lógica de transformación no se mezcle con los componentes, servicios, o modelos.
Propósito principal de los Adapters

    Transformar datos recibidos de APIs en modelos del frontend:
        Normalmente, los datos que llegan de una API no están en el formato exacto que necesita tu aplicación.
        Los adapters transforman estos datos en modelos que sean más fáciles de usar dentro de la aplicación.

    Transformar modelos del frontend en datos listos para enviar a la API:
        Antes de enviar datos a una API, es posible que necesiten ser transformados al formato esperado por el backend.

    Mantener un desacoplamiento entre el backend y el frontend:
        Si el formato de los datos cambia en el backend, solo necesitas actualizar el adapter en lugar de hacerlo en toda la aplicación.
 */