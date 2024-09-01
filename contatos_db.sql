-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01/09/2024 às 07:13
-- Versão do servidor: 5.5.62
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `contatos_db`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `contatos`
--

CREATE TABLE `contatos` (
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `profissao` varchar(100) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `whatsapp` enum('Sim','Nao') DEFAULT NULL,
  `email_notificacao` enum('Sim','Nao') DEFAULT NULL,
  `sms` enum('Sim','Nao') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `contatos`
--

INSERT INTO `contatos` (`nome`, `email`, `telefone`, `data_nascimento`, `profissao`, `celular`, `whatsapp`, `email_notificacao`, `sms`) VALUES
('Arcanjo', 'puchalskisilva@gmail.com', '(31) 3213-2233', '2004-04-17', 'Maestro', '(32) 13232-1231', 'Sim', 'Sim', 'Sim'),
('Verbe', 'leocatelu@hotmail.com', '(31) 3213-2233', '2024-09-21', 'verfefef', '(32) 13232-1231', 'Sim', 'Sim', 'Sim'),
('TesteNao', 'mguatura@yahoo.com.br', '(11) 3030-3030', '2024-09-12', 'Nao', '(41) 99567-7324', 'Sim', 'Sim', 'Sim'),
('JoÃ£o Barros Guatura da Costa', 'joaoguatura@hotmail.com', '(11) 3030-3030', '2004-11-16', 'Engenheiro de Software', '(41) 99657-7324', 'Sim', 'Sim', 'Sim'),
('Teste Final', 'mguatura@yahoo.com.br', '(31) 3213-2233', '2004-06-08', 'PsicÃ³logo', '(32) 13232-1231', 'Sim', 'Sim', 'Sim');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
