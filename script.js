const story = [
    {
        text: "Você acorda em uma masmorra escura e fria. Há uma porta de madeira pesada à sua frente. O que você faz?",
        options: ["Tenta abrir a porta", "Procura algo ao redor", "Grita por ajuda"],
        correctOption: 1
    },
    {
        text: "Você encontra uma pequena chave escondida em uma rachadura na parede. Como você a usa?",
        options: ["Enfia na fechadura da porta", "Joga fora", "Guarda para depois"],
        correctOption: 0
    },
    {
        text: "A porta se abre, revelando um corredor sombrio. Você avança e encontra três caminhos. Qual você escolhe?",
        options: ["O da esquerda com pegadas", "O do meio iluminado", "O da direita com sons estranhos"],
        correctOption: 2
    },
    {
        text: "O caminho leva a uma sala com um pedestal. No topo, há um amuleto brilhante. O que você faz?",
        options: ["Pega o amuleto", "Ignora e segue em frente", "Examina o pedestal"],
        correctOption: 2
    },
    {
        text: "Você percebe que o pedestal estava armado com uma armadilha. Um monstro surge! Como você reage?",
        options: ["Luta com o monstro", "Foge", "Usa o amuleto"],
        correctOption: 2
    },
    {
        text: "O amuleto brilha intensamente, banindo o monstro. Você encontra uma saída da masmorra. O que você faz agora?",
        options: ["Corre para a saída", "Procura mais tesouros", "Descansa um pouco"],
        correctOption: 0
    },
    {
        text: "Você finalmente escapa para a liberdade, a luz do sol cegando seus olhos. A aventura termina aqui... por enquanto.",
        options: ["Começar de novo", "Sair do jogo", "Compartilhar sua vitória"],
        correctOption: 1
    }
];

let currentStep = 0;

function loadStep() {
    const storyText = document.getElementById('story-text');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');

    feedback.textContent = "";
    storyText.textContent = story[currentStep].text;

    optionsContainer.querySelectorAll('button').forEach((button, index) => {
        button.textContent = story[currentStep].options[index];
    });
}

function selectOption(optionIndex) {
    const feedback = document.getElementById('feedback');
    if (optionIndex === story[currentStep].correctOption) {
        currentStep++;
        if (currentStep < story.length) {
            loadStep();
        } else {
            feedback.textContent = "Parabéns! Você completou a história.";
        }
    } else {
        feedback.textContent = "Opção incorreta! Tente novamente.";
    }
}

window.onload = loadStep;
