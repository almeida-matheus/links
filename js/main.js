import { user, resources } from './modules/data.js'

async function WriteTextContent(resources) {

    document.title = user.UserName
    document.getElementById('header__name').innerHTML = user.UserName
    document.getElementById('header__img').src = user.ImageProfile

    resources.forEach((service) => {
        if (service.Visibility === 'Hidden')
            return

        const a = document.createElement('a')
        const div = document.createElement('div')
        const i =document.createElement('i')
        i.setAttribute('class', service.IconFontawesome)
        i.style.color = service.PrimaryColor
        a.setAttribute('href', service.PersonalURL)
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener')
        a.innerHTML = service.ServiceName
        document.getElementById('list__body').append(a)
        div.append(i)
        a.prepend(div)
    });

}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await WriteTextContent(resources)
    }
    catch (e) {
        console.log('Ocorreu um erro\n',e)
    }
})
