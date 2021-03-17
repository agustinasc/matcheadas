let em = document.getElementById('em');
const emoji = ['🌞', '🥥', '😎', '🐬', '🌡','🏝',  ]

em.innerHTML = emoji;

var div = document.createElement('div');
div.textContent = 'I \u2764\uFE0F emoji!';
document.body.appendChild(div);

twemoji.parse(document.body);

var img = div.querySelector('img');
