const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const chatWidgetMessages = document.getElementById('chat-widget__messages');
const messagesContainer = document.querySelector('.chat-widget__messages-container');

function showLastMessage(){
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
});

let timeout = true;

input.addEventListener('keydown',(btn)=>{
    if(btn.key === 'Enter'){
        if(input.value.trim()){
            //  Клиент:
            timeout = true;

            let currentDate = new Date();
            let currentTime = currentDate.toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'});

            chatWidgetMessages.innerHTML +=
            `Сообщение от клиента
            <div class="message message_client">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">
                 ${input.value}
                </div>
            </div>`;

            input.value = null;
            showLastMessage();

            //  Чат-бот:
            setTimeout(() => {
                let roboAnswers = [
                    'Чем я могу Вам помочь?',
                    'Я помог Вам с ответом?',
                    'Уточните, пожалуйста, Ваш вопрос',
                    'Не совсем Вас понял',
                    'Я всего лишь чат-бот...'
                ];

                let currentDate = new Date();
                let currentTime = currentDate.toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'});
    
                chatWidgetMessages.innerHTML +=
                `Сообщение от робота
                <div class="message">
                    <div class="message__time">${currentTime}</div>
                    <div class="message__text">
                    ${roboAnswers[Math.floor(Math.random() * (roboAnswers.length - 1))]}
                    </div>
                </div>`;

                showLastMessage();
                timeout = false;                              
            }, 1500);  
            
            setTimeout(() => {
                if(timeout === false){                  
                    chatWidgetMessages.innerHTML +=
                    `Сообщение от робота
                    <div class="message">
                        <div class="message__time">${currentTime}</div>
                            <div class="message__text">
                                У Вас остались еще какие-нибудь вопросы?                         
                            </div>
                    </div>`;

                    timeout = true;
                    showLastMessage();                    
                } 
            }, 30000);       
        };
    }
});

