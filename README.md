# Gateway Soluciones en TI - Aplicación de Gestión de Productos Electrónicos

## Descripción del Proyecto

La aplicación **Gateway Soluciones en TI** permite a la empresa gestionar y vender productos electrónicos a través de una interfaz intuitiva, proporcionando a los usuarios una experiencia de compra segura y eficaz mediante la integración de **Stripe** para pagos. El objetivo principal es facilitar la administración del catálogo de productos y las transacciones, garantizando seguridad en cada proceso.

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

## Control de Versiones

La herramienta de control de versiones seleccionada es **Git**, con el repositorio alojado en **GitHub**. El flujo de trabajo sigue un enfoque basado en ramas:

- **`main`**: Contiene la última versión estable del proyecto.
- **`develop`**: Rama de desarrollo donde se integran nuevas características.
- **`feature/*`**: Ramas para el desarrollo de nuevas funcionalidades específicas.
- **`hotfix/*`**: Ramas para resolver errores críticos en la versión de producción.

La estrategia de versionamiento sigue el modelo **SemVer (Versionado Semántico)**, con etiquetas de versiones formateadas como `vMAJOR.MINOR.PATCH` (por ejemplo, `v1.2.3`).

## Estrategia de Despliegue

Para el despliegue de la aplicación, se utiliza una infraestructura de CI/CD que automatiza el proceso de pruebas y despliegue. Los entornos de despliegue incluyen:

- **Desarrollo**: Utilizado para probar nuevas características en un entorno no productivo.
- **Producción**: Entorno principal, al que se despliegan únicamente versiones estables.

Cada vez que se realiza una fusión en `main`, el flujo de CI/CD realiza un despliegue automático al entorno de producción. 

## Instrucciones para Clonar el Repositorio

Para clonar este repositorio e instalar las dependencias, sigue los siguientes pasos:

```bash
git clone https://github.com/usuario/gateway-soluciones-ti.git
cd gateway-soluciones-ti
npm install

