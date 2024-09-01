<?php
$servername = "localhost";
$username = "root";
$password = "passaro";
$dbname = "contatos_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$nome = $_POST['nome'] ?? null;
$email = $_POST['email'] ?? null;
$telefone = $_POST['telefone'] ?? null;
$data_nascimento = $_POST['data_nascimento'] ?? null;
$profissao = $_POST['profissao'] ?? null;
$celular = $_POST['celular'] ?? null;
$whatsapp = isset($_POST['whatsapp']) ? 'Sim' : 'Nao';
$email_notificacao = isset($_POST['email_notificacao']) ? 'Sim' : 'Nao';
$sms = isset($_POST['sms']) ? 'Sim' : 'Nao';

if (!$nome || !$email || !$telefone || !$data_nascimento || !$profissao || !$celular) {
    die("Todos os campos são obrigatórios.");
}

$data_nascimento = date('Y-m-d', strtotime($data_nascimento));
if ($data_nascimento === false || $data_nascimento === '1970-01-01') {
    $data_nascimento = null; 
}

$sql = "INSERT INTO contatos (nome, email, telefone, data_nascimento, profissao, celular, whatsapp, email_notificacao, sms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("sssssssss", $nome, $email, $telefone, $data_nascimento, $profissao, $celular, $whatsapp, $email_notificacao, $sms);

    if ($stmt->execute()) {
        echo "Novo contato adicionado com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Erro ao preparar a consulta: " . $conn->error;
}

$conn->close();