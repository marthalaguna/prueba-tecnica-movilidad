## Prueba-Tecnica-SimonMovilidad
Este proyecto es parte de una prueba técnica para validar funcionalidades críticas de una plataforma de monitoreo GPS, utilizando pruebas automatizadas con herramientas open-source.

---
## Funcionalidades Cubiertas

1. Inicio de sesión del usuario
2. Visualización de vehículo en tiempo real
3. Recepción de alertas
---
## Priorización de Casos de Prueba

Los casos fueron priorizados en base a criterios ISTQB: riesgo, impacto al negocio y frecuencia de uso.

| Funcionalidad                 | Escenario                             | Prioridad |
|------------------------------ |---------------------------------------|-----------|
| Login                         | Login exitoso                         | Alta      |
| Login                         | Login fallido                         | Alta      |
| Visualización de vehículos    | Vehículo encontrado                   | Alta      |
| Visualización de vehículos    | Vehículo no encontrado                | Media     |
| Recepción de alertas          | Alerta zona segura                    | Alta      |
| Recepción de alertas          | Alerta exceso de velocidad            | Media     |

---
## Herramientas Utilizadas

- **Postman**: simulación de APIs con mock servers.
- **Cypress**: automatización de pruebas de API y UI.

---

prueba-tecnica-movilidad/

├── cypress/

│ └── e2e/

│ └── movilidad_spec.cy.js

├── postman/

│ ├── SimonMovilidadGPS.postman_collection.json

│ └── PLATAFORMAGPSSIMON.postman_environmentt.json

├── README.md
