const surveyData = [
    {
        id: 'boende',
        icon: 'assets/boende.png',
        title: 'Boende, Uppvärmning & Energi',
        questions: [
            {
                id: 'q1_1',
                text: '1.1 Hur bor du?',
                type: 'radio',
                options: ['I stor villa.', 'I mindre villa eller radhus.', 'I lägenhet.']
            },
            {
                id: 'q1_2',
                text: '1.2 Hur värms ditt hem upp?',
                type: 'radio',
                options: [
                    'Bergvärme, fjärrvärme eller solceller.', 
                    'Pellets, ved eller modern luftvärmepump.', 
                    'Direktverkande el eller äldre panna.', 
                    'Vet ej.'
                ]
            },
            {
                id: 'q1_3',
                text: '1.3 Ungefär hur varmt är det hemma eller i ditt rum?',
                type: 'radio',
                options: [
                    'Varmt (22 grader eller varmare).', 
                    'Runt 20 grader.', 
                    'Svalare (18 grader eller kallare).'
                ]
            },
            {
                id: 'q1_4',
                text: '1.4 Hur gör du med elektronik när den inte används?',
                type: 'radio',
                options: [
                    'Den står ofta på eller i standby-läge.', 
                    'Jag stänger av ibland när jag kommer ihåg.', 
                    'Jag stänger oftast av skärmar och apparater helt.'
                ]
            },
            {
                id: 'q1_5',
                text: '1.5 Hur gör du med belysningen när du lämnar ett rum?',
                type: 'radio',
                options: [
                    'Lamporna får ofta vara tända.', 
                    'Jag försöker komma ihåg att släcka.', 
                    'Jag släcker nästan alltid lamporna när jag går ut.'
                ]
            },
            {
                id: 'q1_6',
                text: '1.6 Finns det husdjur i ditt hem?',
                type: 'radio',
                options: [
                    'Ja, hund eller katt (köttätande).', 
                    'Ja, smådjur (gnagare, fågel, reptil) eller växtätande.', 
                    'Nej, inga husdjur.'
                ]
            }
        ]
    },
    {
        id: 'matvanor',
        icon: 'assets/mat.png',
        title: 'Matvanor & Kost',
        questions: [
            {
                id: 'q2_1',
                text: '2.1 Hur ser din kost ut under en vanlig vecka?',
                type: 'radio',
                options: [
                    'Jag äter nötkött eller lamm flera gånger i veckan.', 
                    'Jag äter mest gris, fågel eller fisk, och sällan nöt/lamm.', 
                    'Jag äter nästan uteslutande växtbaserat eller vegetariskt.'
                ]
            },
            {
                id: 'q2_2',
                text: '2.2 Hur ofta köper du eller din familj take-away eller snabbmat?',
                type: 'radio',
                options: [
                    'Flera gånger i veckan.', 
                    'Någon gång i månaden.', 
                    'Väldigt sällan.'
                ]
            },
            {
                id: 'q2_3',
                text: '2.3 Hur ofta slängs mat hemma hos er?',
                type: 'radio',
                options: [
                    'Ofta.', 
                    'Någon gång i veckan.', 
                    'Nästan aldrig.'
                ]
            }
        ]
    },
    {
        id: 'resor',
        icon: 'assets/resor.png',
        title: 'Resor & Transport',
        questions: [
            {
                id: 'q3_1',
                text: '3.1 Hur tar du dig oftast till skolan och dina fritidsaktiviteter?',
                type: 'radio',
                options: [
                    'Åker bil.', 
                    'Kör A-traktor, EPA eller moped.',
                    'Åker kollektivt (buss eller tåg) eller samåker.', 
                    'Går eller cyklar.'
                ]
            },
            {
                id: 'q3_2',
                text: '3.2 När du eller familjen beställer saker på nätet, hur kommer paketet fram den sista biten?',
                type: 'radio',
                options: [
                    'Det körs hela vägen hem till dörren.',
                    'Vi hämtar hos ett ombud med bil.',
                    'Vi hämtar hos ett ombud till fots eller med cykel.'
                ]
            },
            {
                id: 'q3_3',
                text: '3.3 Ungefär hur mycket har du flugit det senaste året?',
                type: 'text',
                placeholder: 'Exempelvis "en resa i Europa" eller "har inte flugit alls"'
            }
        ]
    },
    {
        id: 'prylar',
        icon: 'assets/shopping.png',
        title: 'Prylar, Shopping & Skärmtid',
        questions: [
            {
                id: 'q4_1',
                text: '4.1 Hur många timmar per dag spenderar du i genomsnitt på att streama video eller spela onlinespel?',
                type: 'radio',
                options: ['Mer än 5 timmar.', '2-4 timmar.', 'Under 1 timme.']
            },
            {
                id: 'q4_2',
                text: '4.2 Hur ofta köper du kläder, inredning, prylar eller in-game skins?',
                type: 'radio',
                options: [
                    'Flera gånger i månaden.', 
                    'Ungefär en gång i månaden.', 
                    'Någon gång per halvår eller mer sällan.'
                ]
            },
            {
                id: 'q4_3',
                text: '4.3 Hur brukar du göra när du handlar kläder eller andra saker?',
                type: 'radio',
                options: [
                    'Jag köper nästan alltid helt nytt.', 
                    'Jag blandar mellan nytt och second hand.', 
                    'Jag handlar ofta second hand eller byter med andra.'
                ]
            },
            {
                id: 'q4_4',
                text: '4.4 När ett klädesplagg eller en pryl du gillar går sönder, vad händer oftast?',
                type: 'radio',
                options: [
                    'Jag slänger den och köper nytt.', 
                    'Den ligger kvar oanvänd i garderoben.', 
                    'Jag försöker laga den eller lämna in den för reparation.'
                ]
            },
            {
                id: 'q4_5',
                text: '4.5 Hur ofta byter du mobiltelefon?',
                type: 'radio',
                options: [
                    'Varje år.', 
                    'Vartannat eller vart tredje år.', 
                    'Bara när den gamla går sönder och inte kan lagas.'
                ]
            }
        ]
    },
    {
        id: 'vardag',
        icon: 'assets/atervinning.png',
        title: 'Vardag & Återvinning',
        questions: [
            {
                id: 'q5_1',
                text: '5.1 Hur gör du oftast med pant, förpackningar och batterier?',
                type: 'radio',
                options: [
                    'Lägger det mesta i den vanliga soppåsen.', 
                    'Sorterar ibland.', 
                    'Sorterar det mesta, även plast, papper och elektronik.'
                ]
            },
            {
                id: 'q5_2',
                text: '5.2 Ungefär hur länge brukar du duscha?',
                type: 'radio',
                options: [
                    'Över 15 minuter.', 
                    'Runt 10 minuter.', 
                    'Under 5 minuter.'
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
            <img src="${section.icon}" alt="${section.title} ikon" class="section-image">
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
            
            const commentField = document.createElement('textarea');
            commentField.name = `${q.id}_comment`;
            commentField.placeholder = "Egna tankar? (Exempelvis varför du valde detta eller om du vill förklara närmare)";
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
        answersPrompt += `\n### ${section.title}\n`;
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

    const finalPrompt = `Du är en uppmuntrande, kunnig och coachande AI. En högstadieelev har precis fyllt i en klimatkalkylator. Formuläret var helt objektivt. Ditt jobb är nu att analysera svaren och räkna ut ett ungefärligt klimatavtryck.

Viktig vetenskaplig kontext för din analys (Svenska förhållanden):
* Elproduktionen i Sverige är nästan helt fossilfri. Därför har "standby-el" eller duschtid en relativt liten klimateffekt.
* Livscykelanalyser (LCA) visar att upp till 80% av elektronikens och klädernas utsläpp sker vid tillverkningen (gruvbrytning, produktion utomlands). Att avstå från nykonsumtion och laga saker är därför extremt kraftfullt.
* Idisslare (nöt/lamm) och flygresor står för de absolut tyngsta utsläppsposterna på individnivå. Griskött och fågel har betydligt lägre avtryck.

Ge din feedback som "Two stars and a wish":
* Star 1: Beröm något som eleven redan gör väldigt bra för klimatet. Hitta något positivt i datan.
* Star 2: Beröm ett annat positivt mönster eller en klok kommentar eleven gjort.
* A Wish: Ge ett konkret, peppigt tips på vad eleven kan utveckla för att minska sitt avtryck. Välj något där de har egen agens, till exempel konsumtion, reparation, pakethämtning eller matsvinn. Var vetenskapligt grundad (undvik att prata för mycket om standby-el i Sverige).

Fokusera på "empowerment" istället för skuld. Om eleven har lämnat egna kommentarer, väv in dem i ditt svar och bekräfta deras tankar. Undvik att vara mästrande.

Här är elevens data:
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
