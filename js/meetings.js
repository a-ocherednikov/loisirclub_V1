const meetingsJSON = `
[
    {
        "id": "1",
        "image": "family-with-kid.jpg",
        "date": "25.04.21",
        "title": "Як створити гармонію в собі та родині?",
        "link": "yak-stvorutu-harmoniu.html"
    },
    {
        "id": "2",
        "image": "sunflower-inbetween-legs.jpg",
        "date": "02.05.21",
        "title": "10 незручних питань про секс",
        "link": "10-nezrychnuh-putan-pro-sex.html"
    }
]
`;

function renderMeetings(meetings) {
    const meetingsContainer = document.querySelector('.meetings-list');
    meetingsContainer.innerHTML = '';
                for (const meeting of meetings){
                 meetingsContainer.innerHTML += `
                <div class="card mb-3" style="max-width: 400px;">
                    <div class="d-flex flex-row">
                        <div class="d-flex flex-column">
                            <img src="img/${meeting.image}" style="max-width: 200px;" alt="${meeting.title}" />
                        </div>
                        <div class="card-body">
                            <h4>${meeting.date}</h4>
                            <h3>${meeting.title}</h3>
                            <a class="btn btn-outline-dark btn-sm" href="${meeting.link}">Детальніше</a>
                        </div>
                    </div>
                </div>`
    }
}

renderMeetings(JSON.parse(meetingsJSON));