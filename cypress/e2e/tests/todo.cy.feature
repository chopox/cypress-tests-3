Feature: Test con POM + Cucumber de la Web TodoMVC

    Scenario: Comprobar que se puede crear una tarea
        Given que estoy en la página de inicio
        When creo una tarea llamada "Tarea 1"
        Then debería verse "Tarea 1" en la lista

    Scenario: Comprobar que se puede marcar una tarea como completada
        Given que estoy en la página de inicio
        And creo una tarea llamada "Tarea 1"
        And la tarea se muestra como activa
        When marco la tarea "Tarea 1" como completada
        Then la tarea "Tarea 1" debería mostrarse como completada
    
    Scenario: Comprobar que se puede desmarcar una tarea como completada
        Given que estoy en la página de inicio
        And creo una tarea llamada "Tarea 1"
        And la tarea se muestra como activa
        And marco la tarea "Tarea 1" como completada
        And la tarea "Tarea 1" debería mostrarse como completada
        When desmarco la tarea "Tarea 1" como completada
        Then la tarea "Tarea 1" debería mostrarse como activa

    Scenario: Comprobar que se puede editar una tarea existente
        Given que estoy en la página de inicio
        And creo una tarea llamada "Tarea 1"
        And la tarea se muestra como activa
        When cambio el nombre de la tarea "Tarea 1" por "La tarea ha sido modificada"
        Then debería verse "La tarea ha sido modificada" en la lista

    Scenario: Comprobar que se puede borrar una tarea existente
        Given que estoy en la página de inicio
        And creo una tarea llamada "Tarea 1"
        And la tarea se muestra como activa
        When borro la tarea "Tarea 1"
        Then la tarea "Tarea 1" no debería existir

    Scenario: Comprobar que funcionan correctamente los filtros
        Given que estoy en la página de inicio
        And creo una tarea llamada "Tarea 1"
        And la tarea "Tarea 1" se muestra como activa
        And creo una tarea llamada "Tarea 2"
        And la tarea "Tarea 2" se muestra como activa
        And creo una tarea llamada "Tarea 3"
        And la tarea "Tarea 3" se muestra como activa
        And creo una tarea llamada "Tarea 4"
        And la tarea "Tarea 4" se muestra como activa
        And marco la tarea "Tarea 1" como completada
        And marco la tarea "Tarea 2" como completada
        When hago clic en el filtro "Completed" (completadas)
        Then deberían mostrarse solo las tareas "Tarea 1" y "Tarea 2"
        When hago clic en el filtro "Active" (activas)
        Then deberían mostrarse solo las tareas "Tarea 3" y "Tarea 4"
        When hago clic en el filtro "All" (todas)
        then deberían mostrarse las 4 tareas creadas, cada una con su estado