const surveyData = [
    {
        id: 'boende',
        icon: '🏠',
        title: 'Boende & Uppvärmning',
        questions: [
            {
                id: 'q1_1',
                text: '1.1 Hur bor du?',
                type: 'radio',
                options: ['I en stor villa.', 'I en mindre villa eller radhus.', 'I lägenhet.']
            },
            {
                id: 'q1_2',
                text: '1.2 Vet du hur ditt hem värms upp?',
                type: 'radio',
                options: [
                    'Klimatsmart (Bergvärme, fjärrvärme, solceller).', 
                    'Medel (Pellets, ved, modern luftvärmepump).', 
                    'Hög påverkan (Direktverkande el eller gammal panna).', 
                    'Ingen aning (Vi räknar på ett svenskt medelvärde).'
                ]
            },
            {
                id: 'q1_3',
                text: '1.3 Hur varmt är det hemma/i ditt rum?',
                type: 'radio',
                options: [
                    'T-shirt-väder (Varmt, ca 22 grader).', 
                    'Lagom (ca 20 grader).', 
                    'Tofflor & tröja-mode (Svalare, ca 18 grader).'
                ]
            }
        ]
    },
    {
        id: 'matvanor',
        icon: '🍕',
        title: 'Matvanor',
        questions: [
            {
                id: 'q2_1',
                text: '2.1 Hur ofta äter du kött (nöt, gris, lamm)?',
                type: 'radio',
                options: ['Varje dag.', 'Några gånger i veckan.', 'Aldrig (Vegetarian/Vegan).']
            },
            {
                id: 'q2_2',
                text: '2.2 Hur ofta hamnar mat i soporna hemma hos dig?',
                type: 'radio',
                options: ['Ofta (Vi rensar kylen ofta på gamla rester).', 'Ibland (Någon gång i veckan).', 'Nästan aldrig (Vi äter upp allt!).']
            }
        ]
    },
    {
        id: 'resor',
        icon: '✈️',
        title: 'Resor & Transport',
        questions: [
            {
                id: 'q3_1',
                text: '3.1 Hur tar du dig till skolan/träningen oftast?',
                type: 'radio',
                options: ['Bil.', 'Buss eller tåg.', 'Går, cyklar eller moped.']
            },
            {
                id: 'q3_2',
                text: '3.2 Hur många gånger har du flugit det senaste året?',
                type: 'text',
                placeholder: 'T.ex. "2 ggr i Europa, 1 gång utanför"'
            }
        ]
    },
    {
        id: 'prylar',
        icon: '📱',
        title: 'Prylar, Shopping & Skärmtid',
        questions: [
            {
                id: 'q4_1',
                text: '4.1 Hur mycket streamar du video (TikTok/Youtube) eller spelar onlinespel per dag?',
                type: 'radio',
                options: ['Över 5 timmar.', '2–4 timmar.', 'Under 1 timme.']
            },
            {
                id: 'q4_2',
                text: '4.2 Hur ofta köper du "nytt" (kläder, smink, skins, prylar - t.ex. från Shein/Temu)?',
                type: 'radio',
                options: [
                    '"Trendföljaren": Jag köper något nytt nästan varje vecka.', 
                    '"Behovsshopparen": Jag köper ca 1–2 gånger i månaden.', 
                    '"Minimalisten": Sällan, kanske några gånger om året.'
                ]
            },
            {
                id: 'q4_3',
                text: '4.3 Second hand-faktorn',
                type: 'radio',
                options: [
                    'Allt är nytt: Jag köper nästan bara helt nya grejer.', 
                    'Blandat: Jag kollar ofta efter begagnat först.', 
                    'Second hand-proffs: Mycket är begagnat eller ärvt.'
                ]
            },
            {
                id: 'q4_4',
                text: '4.4 Hur ofta får du en ny mobil eller hörlurar?',
                type: 'radio',
                options: [
                    'Varje år (måste ha det senaste!).', 
                    'Vartannat/Vart tredje år.', 
                    'Bara när de gamla går sönder.'
                ]
            }
        ]
    },
    {
        id: 'vardag',
        icon: '🚿',
        title: 'Vardag & Återvinning',
        questions: [
            {
                id: 'q5_1',
                text: '5.1 Hur hanterar du ditt eget skräp (pant, godispapper, e-avfall)?',
                type: 'radio',
                options: [
                    '"Allt i samma påse": Allt åker i brännbart.', 
                    '"Slarvsorteraren": Sorterar pant och papper, resten slängs.', 
                    '"Proffssorteraren": Sorterar allt – även elektronik och batterier.'
                ]
            },
            {
                id: 'q5_2',
                text: '5.2 Hur ser din duschrutin ut?',
                type: 'radio',
                options: [
                    '"Konsert i duschen" (15–20 minuter eller mer).', 
                    'Medel (ca 10 minuter).', 
                    'Snabbdusch (Under 5 minuter).'
                ]
            }
        ]
    }
];

function renderForm() {
    const container = document.getElementById('form-sections');
    
    surveyData.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        
        const header = document.createElement('div');
        header.className = 'section-header';
        header.innerHTML = `
            <span class="section-icon">${section.icon}</span>
            <h2 class="section-title">${section.title}</h2>
        `;
        sectionDiv.appendChild(header);
        
        section.questions.forEach(q => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            
            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.innerText = q.text;
            questionBlock.appendChild(questionText);
            
            if (q.type === 'radio') {
                const optionsGroup = document.createElement('div');
                optionsGroup.className = 'options-group';
                
                q.options.forEach((opt, index) => {
                    const label = document.createElement('label');
                    label.className = 'radio-label';
                    
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = q.id;
                    input.value = opt;
                    input.className = 'radio-input';
                    
                    const span = document.createElement('span');
                    span.className = 'radio-text';
                    span.innerText = opt;
                    
                    label.appendChild(input);
                    label.appendChild(span);
                    optionsGroup.appendChild(label);
                });
                
                questionBlock.appendChild(optionsGroup);
            } else if (q.type === 'text') {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = q.id;
                input.placeholder = q.placeholder;
                input.className = 'text-input';
                questionBlock.appendChild(input);
            }
            
            // Kommentarsfält för varje fråga
            const commentField = document.createElement('textarea');
            commentField.name = `${q.id}_comment`;
            commentField.placeholder = "Egna tankar? (T.ex. varför du valde detta, om du vill ändra på något...)";
            commentField.className = 'comment-field';
            questionBlock.appendChild(commentField);
            
            sectionDiv.appendChild(questionBlock);
        });
        
        container.appendChild(sectionDiv);
    });
}

function generatePrompt() {
    let answersPrompt = "";
    
    surveyData.forEach(section => {
        answersPrompt += `\n### ${section.icon} ${section.title}\n`;
        section.questions.forEach(q => {
            let answer = "";
            if (q.type === 'radio') {
                const selected = document.querySelector(`input[name="${q.id}"]:checked`);
                answer = selected ? selected.value : "[Ej besvarat]";
            } else if (q.type === 'text') {
                const textInput = document.querySelector(`input[name="${q.id}"]`);
                answer = textInput.value.trim() !== "" ? textInput.value : "[Ej besvarat]";
            }
            
            const commentBox = document.querySelector(`textarea[name="${q.id}_comment"]`);
            const comment = commentBox.value.trim() !== "" ? `\n> Kommentar från eleven: "${commentBox.value}"` : "";
            
            answersPrompt += `**${q.text}**\nSvar: ${answer}${comment}\n\n`;
        });
    });

    const finalPrompt = `Du är en uppmuntrande, kunnig och coachande AI (typ en expert på hållbarhet för unga). En högstadieelev har precis fyllt i en klimatkalkylator. Ditt jobb är att analysera svaren, räkna ut ett ungefärligt klimatavtryck (gärna med en lekfull jämförelse) och ge 2-3 konkreta, peppiga tips på vad eleven kan göra för att minska sitt avtryck utan att det känns övermäktigt. Fokusera på "empowerment" istället för skuld. Om eleven har lämnat egna kommentarer, väv in dem i ditt svar och bekräfta deras tankar!

Här är elevens svar:
${answersPrompt}

Vänligen analysera detta och ge din feedback direkt till eleven. Använd en inbjudande och stöttande ton.`;

    return finalPrompt;
}

document.addEventListener('DOMContentLoaded', () => {
    renderForm();
    
    const form = document.getElementById('climate-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const promptText = generatePrompt();
        
        try {
            await navigator.clipboard.writeText(promptText);
            const successMsg = document.getElementById('success-message');
            successMsg.classList.add('show');
            
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        } catch (err) {
            console.error('Kunde inte kopiera:', err);
            alert("Kunde inte kopiera automatiskt. Kopiera texten här nere:\n\n" + promptText);
        }
    });
});
