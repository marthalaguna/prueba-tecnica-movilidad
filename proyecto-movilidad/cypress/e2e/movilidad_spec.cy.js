describe('Mis funcionalidades principales GPS', () => {
  
  // Login exitoso
  it('El usuario inicia sesión correctamente', () => {
    cy.request({
      method: 'POST',
      url: 'https://1684e8e4-ce77-4e6c-a474-ca8842c04760.mock.pstmn.io/api/login',
      body: {
        username: 'martha.qa',
        password: '123456'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'success');
      expect(response.body).to.have.property('token');
      expect(response.body.user).to.have.property('name', 'Martha QA');
      expect(response.body.user).to.have.property('role', 'analyst QA');
    });
  });

  // Login fallido
  it('Debe mostrar error si los datos no son correctos', () => {
    cy.request({
      method: 'POST',
      url: 'https://1684e8e4-ce77-4e6c-a474-ca8842c04760.mock.pstmn.io/api/login',
      failOnStatusCode: false,
      body: {
        username: 'martha.qa',
        password: '1234567890' 
      }
    }).then((response) => {
      expect(response.status).to.eq(401); 
      expect(response.body).to.have.property('error', 'Credenciales incorrectas');
    });
  });

  // Vehículo encontrado
  it('Debe recibir confirmación de ubicación', () => {
    cy.request({
      method: 'POST', 
      url: 'https://1684e8e4-ce77-4e6c-a474-ca8842c04760.mock.pstmn.io/api/vehiculo', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        vehicleId: "BBC123",
        status: "active",
        driver: "Daniel López",
        lat: 45.60971,
        lng: -74.08175,
        speed: 35,
        direction: "Norte",
        lastUpdate: "2025-07-25T20:55:00Z"
      }
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.deep.equal({
        status: "OK",
        message: "Ubicación recibida correctamente"
      });
    });
  });

  // Vehículo no encontrado
  it('Debe fallar el registro del vehículo OUP123', () => {
    cy.request({
      method: 'POST', 
      url: 'https://1684e8e4-ce77-4e6c-a474-ca8842c04760.mock.pstmn.io/api/vehiculo', 
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false, 
      body: {
        vehicleId: "OUP123",
        status: "active",
        driver: "Esperanza López",
        lat: 45.60971,
        lng: -74.08175,
        speed: 55,
        direction: "Norte",
        lastUpdate: "2025-07-25T20:55:00Z"
      }
    }).then((response) => {
      expect(response.status).to.eq(404); 
      expect(response.body).to.deep.equal({
        status: "ERROR",
        message: "Ubicación NO recibida correctamente"
      });
    });
  });
//alerta zona segura

it('Recibir alerta de salida de zona segura', () => {
  cy.request({
    method: 'POST',
    url: 'https://1684e8e4-ce77-4e6c-a474-ca8842c04760.mock.pstmn.io/api/alertas', 
        headers: {
      'Content-Type': 'application/json'
    },
    body: {
      alertId: "ALE001",
      type: "geofence_exit",
      vehicleId: "CVB123",
      message: "Vehículo salió de la zona segura",
      timestamp: "2025-07-25T20:32:00Z"
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.deep.equal({
      status: "OK",
      message: "Vehículo salió de la zona segura"
    });
  });
});
// alerta exceso de velociad
it('Recibir alerta de exceso de velocidad', () => {
  cy.request({
    method: 'POST',
    url: 'https://1684e8e4-ce77-4e6c-a474-ca8842c04760.mock.pstmn.io/api/alertas', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      alertId: "ALE002",
      type: "overspeed",
      vehicleId: "XCC123",
      message: "Velocidad máxima excedida",
      timestamp: "2025-07-25T20:35:00Z"
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.deep.equal({
      status: "OK",
      message: "Velocidad máxima excedida"
    });
  });
});
});


