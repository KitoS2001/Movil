# Gateway Soluciones en TI - Aplicación de Gestión de Productos Electrónicos

## Objetivo

Desarrollar una aplicación móvil para la gestión y venta de productos electrónicos de la empresa **Gateway Soluciones en TI**, con una interfaz intuitiva y un método de pago seguro integrado a través de **Stripe**.

## Alcance

La aplicación permitirá a los usuarios:
- Ver el catálogo completo de productos electrónicos.
- Consultar detalles y especificaciones de los productos.
- Realizar compras de manera segura a través de **Stripe**.
- Acceder a su historial de compras y seguimientos de pedidos.

## Equipo de Trabajo

El equipo está compuesto por dos desarrolladores, quienes cubren múltiples roles debido a la adopción de la metodología **XP**:

- **Erik Uriel Vicente Sanchez**
- **Jorge Leonardo Seydlitz Lugo**

Ambos son responsables de la planificación, desarrollo y pruebas del proyecto.

## Riesgos y Medidas

### Riesgos
- Problemas de seguridad en las transacciones mediante **Stripe**.
- Fallos de sincronización con la base de datos de productos y pedidos.
- Retrasos en la implementación de funcionalidades clave, como la integración de pagos o la carga de inventario.

### Medidas
- Pruebas de integración continua utilizando **Postman** para verificar las APIs.
- Revisiones regulares del código mediante **GitHub** para asegurar su calidad.
- Evaluaciones de seguridad periódicas para garantizar la protección en los pagos a través de **Stripe**.

## Estrategia de Comunicación

Para asegurar una buena coordinación, se realizarán **reuniones diarias** de seguimiento, donde:
- Se discutirá el progreso de cada desarrollador.
- Se identificarán bloqueos que puedan ralentizar el proyecto.
- Se planificarán las tareas futuras.

Además, se utilizará **Slack** para la comunicación en tiempo real y **Trello** para la asignación y seguimiento de tareas.

## Metodología de Desarrollo

El proyecto sigue la metodología **XP (Extreme Programming)**, que proporciona:
- Iteraciones rápidas.
- Retroalimentación constante.
- Adaptabilidad a cambios repentinos en los requisitos o desarrollo.

## Documentación del Proyecto

Toda la información clave relacionada con:
- Objetivos del proyecto.
- Alcance.
- Riesgos.
- Metodología.
- Roles del equipo.

Se puede encontrar en el apartado “**Aspectos clave**” de nuestra herramienta de planificación.

## Organización del Proyecto en Trello

El proyecto está organizado en **Trello** con tableros que se dividen en las siguientes columnas:

- **Backlog:** Tareas pendientes que aún no han sido iniciadas.
- **In Progress:** Tareas que están en desarrollo actualmente.
- **Review:** Tareas que están siendo revisadas por los desarrolladores o testers.
- **Done:** Tareas completadas que han pasado la revisión y están listas.

Cada tarjeta de Trello incluye:
- Descripción detallada de la tarea o issue.
- El responsable de la tarea.
- Prioridad (alta, media, baja).
- Fecha límite de entrega.

## Instalación

Para clonar este repositorio e instalar las dependencias, sigue los siguientes pasos:

```bash
git clone https://github.com/usuario/gateway-soluciones-ti.git
cd gateway-soluciones-ti
npm install
