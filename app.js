let editingRow = null;

function addContact() {
    const nome = document.getElementById('input_nome').value;
    const email = document.getElementById('input_email').value;
    const telefone = document.getElementById('input_telefone').value;
    const data_nascimento = document.getElementById('input_data').value;
    const profissao = document.getElementById('input_profissao').value;
    const celular = document.getElementById('input_celular').value;

    if (!nome || !email || !telefone || !data_nascimento || !profissao || !celular) {
        alert('Todos os campos são obrigatórios. Por favor, preencha todos os campos.');
        return;
    }

    
    const whatsapp = document.querySelector('input[name="whatsapp"]').checked ? 'Sim' : 'Nao';
    const email_notificacao = document.querySelector('input[name="email_notificacao"]').checked ? 'Sim' : 'Nao';
    const sms = document.querySelector('input[name="sms"]').checked ? 'Sim' : 'Nao';

  

    

    if (editingRow) {

        editingRow.cells[0].innerHTML = `<input type="text" value="${nome}" class="edit-input">`;
        editingRow.cells[1].innerHTML = `<input type="email" value="${email}" class="edit-input">`;
        editingRow.cells[2].innerHTML = `<input type="text" value="${telefone}" class="edit-input">`;
        editingRow.cells[3].innerHTML = `<input type="date" value="${data_nascimento}" class="edit-input">`;
        editingRow.cells[4].innerHTML = `<input type="text" value="${profissao}" class="edit-input">`;
        editingRow.cells[5].innerHTML = `<input type="text" value="${celular}" class="edit-input">`;
        editingRow.cells[6].innerHTML = whatsapp;
        editingRow.cells[7].innerHTML = email_notificacao;
        editingRow.cells[8].innerHTML = sms;

        enableEnterSave(editingRow);
        editingRow = null;
    } else {

        const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();


        newRow.insertCell(0).textContent = nome;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = telefone;
        newRow.insertCell(3).textContent = data_nascimento;
        newRow.insertCell(4).textContent = profissao;
        newRow.insertCell(5).textContent = celular;
        newRow.insertCell(6).textContent = whatsapp;
        newRow.insertCell(7).textContent = email_notificacao;
        newRow.insertCell(8).textContent = sms;

        const actionsCell = newRow.insertCell(9);
        actionsCell.innerHTML = `
            <button class="edit" onclick="editContact(this)"><img src="editar.png" alt="Editar"></button>
            <button class="delete" onclick="deleteContact(this)"><img src="excluir.png" alt="Excluir"></button>
        `;
    }

    document.getElementById('contactForm').reset();


    document.getElementById('contactsModal').style.display = 'block';

    fetch('db_connection.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            nome: nome,
            email: email,
            telefone: telefone,
            data_nascimento: data_nascimento,
            profissao: profissao,
            celular: celular,
            whatsapp: whatsapp,
            email_notificacao: email_notificacao,
            sms: sms
        })
    })
    .then(response => response.text())
    .then(data_nascimento => {
        alert(data_nascimento);
        document.getElementById('contactForm').reset();
        document.getElementById('contactsModal').style.display = 'block';
    })
    .catch(error => {
        console.error('Erro:', error);
    });
    
}

function closeModal() {
    document.getElementById('contactsModal').style.display = 'none';
    editingRow = null; 
}

function deleteContact(button) {
    const row = button.parentElement.parentElement;
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    table.deleteRow(row.rowIndex - 1);
}

function editContact(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');


    if (!editingRow) {

        cells[0].innerHTML = `<input type="text" value="${cells[0].textContent}" class="edit-input">`;
        cells[1].innerHTML = `<input type="email" value="${cells[1].textContent}" class="edit-input">`;
        cells[2].innerHTML = `<input type="text" value="${cells[2].textContent}" class="edit-input">`;
        cells[3].innerHTML = `<input type="date" value="${cells[3].textContent}" class="edit-input">`;
        cells[4].innerHTML = `<input type="text" value="${cells[4].textContent}" class="edit-input">`;
        cells[5].innerHTML = `<input type="text" value="${cells[5].textContent}" class="edit-input">`;

        enableEnterSave(row);


        editingRow = row;
        button.innerHTML = `<img src="diskette.png" alt="Salvar" width="20" height="20">`;
    } else {
        saveRow(row);
        editingRow = null;
        button.innerHTML = `<img src="editar.png" alt="Editar">`;
    }
}

function enableEnterSave(row) {
    const inputs = row.querySelectorAll('.edit-input');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                saveRow(row);
                editingRow = null;
                row.querySelector('.edit').innerHTML = `<img src="editar.png" alt="Editar">`;
            }
        });
    });
}

function saveRow(row) {
    const cells = row.getElementsByTagName('td');
    cells[0].textContent = cells[0].querySelector('input').value;
    cells[1].textContent = cells[1].querySelector('input').value;
    cells[2].textContent = cells[2].querySelector('input').value;
    cells[3].textContent = cells[3].querySelector('input').value;
    cells[4].textContent = cells[4].querySelector('input').value;
    cells[5].textContent = cells[5].querySelector('input').value;
}

document.getElementById('input_telefone').addEventListener('input', formatPhone2);
document.getElementById('input_celular').addEventListener('input', formatPhone);

function formatPhone(event) {
    formatInput(event.target, 11, '(00) 00000-0000');
}

function formatPhone2(event) {
    formatInput(event.target, 10, '(00) 0000-0000');
}

function formatInput(input, maxLength, format) {
    let value = input.value.replace(/\D/g, ''); 


    if (value.length > maxLength) {
        value = value.substring(0, maxLength);
    }


    let formattedValue = '';
    let formatIndex = 0;
    let valueIndex = 0;

    while (formatIndex < format.length && valueIndex < value.length) {
        if (format[formatIndex] === '0') {
            formattedValue += value[valueIndex];
            valueIndex++;
        } else {
            formattedValue += format[formatIndex];
        }
        formatIndex++;
    }

    input.value = formattedValue;
}

