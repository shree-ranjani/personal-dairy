function _(id){
    return document.getElementById(id)
}

function deleteCard(cardId) {
    const card = _(cardId);
    card.remove();
}

function getRs(){
    let txt = _('txt').value
    const d = new Date()

    const cardId = `card-${Date.now()}`;

    _('rs').innerHTML += `
        <div class="card" id="${cardId}">
            <p>${txt}</p> 
            <small>${d.toLocaleTimeString()}</small>
            <small>${d.toLocaleDateString()}</small>
            <button class="delete-btn" onclick="deleteCard('${cardId}')">Delete</button>
        </div>
    `
}

