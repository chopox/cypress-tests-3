import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTareas } from "../pages/TodoMVCPage.js";

// =================
// GIVEN
// =================

Given('que estoy en la página de inicio', () => {
    gestionTareas.abrirWeb();
})

Given(/existe una tarea activa llamada ['"](.+)['"]/, (nombreTarea) => {
    gestionTareas.crear(nombreTarea);
    gestionTareas.esActiva(1);
})

Given(/existe una tarea completada llamada ['"](.+)['"]/, (nombreTarea) => {
    gestionTareas.crear(nombreTarea);
    gestionTareas.marcar(1);
    gestionTareas.esCompletada(1);
})

// =================
// WHEN
// =================

When(/creo una tarea llamada ['"](.+)['"]/, (nombreTarea) => {
    gestionTareas.crear(nombreTarea);
    gestionTareas.esActiva(1);
})

When('cambio el nombre de la tarea "Tarea {int}" por {string}', (index, nuevoNombre) => {
    gestionTareas.editar(nuevoNombre, index);
})

When('borro la tarea "Tarea 1"', () => {
    gestionTareas.borrar();
})

When('marco la tarea "Tarea {int}" como completada', (index) => {
    gestionTareas.marcar(index);
})

When('desmarco la tarea "Tarea {int}" como completada', (index) => {
    gestionTareas.marcar(index);
})

When('la tarea "Tarea {int}" se muestra como activa', (index) => {
    gestionTareas.esActiva(index);
})

When('la tarea "Tarea {int}" se muestra como completada', (index) => {
    gestionTareas.esCompletada(index);
})

When('hago clic en el filtro "All"', () => {
    gestionTareas.filtrarTodas();
})

When('hago clic en el filtro "Active"', () => {
    gestionTareas.filtrarActivas();
})

When('hago clic en el filtro "Completed"', () => {
    gestionTareas.filtrarCompletadas();
})

// =================
// THEN
// =================

Then(/debería verse ['"](.+)['"] en la lista/, (nombreTarea) => {
    gestionTareas.esNombre(nombreTarea, 1);
})

Then('la tarea "Tarea {int}" no debería existir', (index) => {
    gestionTareas.esInexistente(index);
})

Then('la tarea "Tarea {int}" debería mostrarse como activa', (index) => {
    gestionTareas.esActiva(index);
})

Then('la tarea "Tarea {int}" debería mostrarse como completada', (index) => {
    gestionTareas.esCompletada(index);
})

Then(/deberían mostrarse solo las tareas completadas ['"](.+)['"] y ['"](.+)['"]/, (nombreTarea1, nombreTarea2) => {
    gestionTareas.esNombre(nombreTarea1, 1);
    gestionTareas.esNombre(nombreTarea2, 2);
    gestionTareas.esCompletada(1);
    gestionTareas.esCompletada(2);
})

Then(/deberían mostrarse solo las tareas activas ['"](.+)['"] y ['"](.+)['"]/, (nombreTarea1, nombreTarea2) => {
    gestionTareas.esNombre(nombreTarea1, 1);
    gestionTareas.esNombre(nombreTarea2, 2);
    gestionTareas.esActiva(1);
    gestionTareas.esActiva(2);
})

Then('deberían mostrarse las 4 tareas creadas, cada una con su estado', () => {
    gestionTareas.esNombre('Tarea 1', 1);
    gestionTareas.esNombre('Tarea 2', 2);
    gestionTareas.esNombre('Tarea 3', 3);
    gestionTareas.esNombre('Tarea 4', 4);
    gestionTareas.esCompletada(1);
    gestionTareas.esCompletada(2);
    gestionTareas.esActiva(3);
    gestionTareas.esActiva(4);
})