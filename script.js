// Endereço da API
const apiUrl = "https://api.pulsus.mobi/v2/signal_strengths?page=1&per_page=500&device_id=1";

// Opções da requisição
const options = {
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "ApiToken": "SFWLzKwTcwfgZ9P6dCxPuXmHhXWiRDCm2KtsCWztDovBj7bAJMRPqHmcs4de"
    }
};

// Fazer a requisição à API
fetch(apiUrl, options)
    .then(response => {
        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Converte a resposta em JSON
    })
    .then(data => {
        // Manipula os dados JSON aqui
        document.getElementById('apiResult').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        // Trata erros aqui
        console.error('There was a problem with your fetch operation:', error);
        document.getElementById('apiResult').textContent = 'Erro ao carregar dados: ' + error.message;
    });
