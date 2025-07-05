
    // Esperamos a que el DOM esté completamente cargado
    $(document).ready(function () {
      // Evento para agregar una nueva tarea
      $('#agregar').click(function () {
        const texto = $('#new-task').val().trim();

        if (texto !== '') {
          const nuevaTarea = $(`
            <li class="task">
              <span class="texto-tarea">${texto}</span>
              <div class="buttons">
                <button class="edit">Editar</button>
                <button class="hecho">Completado</button>
                <button class="delete">Eliminar</button>
              </div>
            </li>
          `);

          $('#lista-tareas').append(nuevaTarea);
          $('#new-task').val('');
          $('#message').fadeIn(300).delay(1000).fadeOut(300); // Efecto de mensaje
        }
      });

      // Marcar tarea como completada
      $('#lista-tareas').on('click', '.hecho', function () {
        $(this).closest('.task').find('.texto-tarea').toggleClass('completed');
      });

      // Eliminar una tarea
      $('#lista-tareas').on('click', '.delete', function () {
        $(this).closest('.task').remove();
      });

      // Cambiar a modo edición
      $('#lista-tareas').on('click', '.edit', function () {
        const task = $(this).closest('.task');
        const textoActual = task.find('.texto-tarea').text();
        const input = $(`<input type="text" class="edit-input" value="${textoActual}">`);
        const guardar = $('<button class="save">Guardar</button>');

        task.find('.texto-tarea').replaceWith(input);
        $(this).replaceWith(guardar);
      });

      // Guardar edición
      $('#lista-tareas').on('click', '.save', function () {
        const task = $(this).closest('.task');
        const nuevoTexto = task.find('.edit-input').val().trim();
        const span = $(`<span class="texto-tarea">${nuevoTexto}</span>`);
        const editar = $('<button class="edit">Editar</button>');

        task.find('.edit-input').replaceWith(span);
        $(this).replaceWith(editar);
      });

      // Vaciar la lista de tareas
      $('#eliminar-tareas').click(function () {
        $('#lista-tareas').empty();
      });
    });
