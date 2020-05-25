function showHelp(discordMessage) {
    discordMessage.reply("O Alfred possui as seguintes funções:\n" + 
            "which nomeDoProjeto -> Exibe os verifys em uso ou que estão subindo para verificação\n" +
            "use nomeDoVerify -> Adiciona o verify escolhido na lista de verifys em uso no projeto\n" +
            "release nomeDoVerify -> Remove o verify escolhido da lista de verifys em uso no projeto\n");
}