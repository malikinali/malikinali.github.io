const firstTab = 'about';

const tabs = {
    about: 'contentAbout',
    works: 'contentWorks',
    studentWorks: 'contentStudentWorks',
    certificates: 'contentCertificates',
    plans: 'contentPlans',
}

const displayStyle = {
    none: 'none',
    block: 'block',
}

const element = (id) => document.getElementById(id);

const parentLink = (option) => document.querySelector(`a#${option}`).parentElement;

const loadTab = (option) => {
    for (tab in tabs) {
        let contentId = tabs[tab];
        let contentTab = element(contentId);
        let parent = parentLink(tab);

        if (tab === option) {
            parent.className = 'active';
            contentTab.style.display = displayStyle.block;
        } else {
            parent.classList && parent.classList.remove('active');
            contentTab.style.display = displayStyle.none;
        }
    }
}

const loadFirstTab = () => loadTab(firstTab);

const clickTab = (e) => loadTab(e.srcElement.id);

const clickImage = (e) => {
    const imageBig = element("imageBig");

    let image = document.createElement('img');
    image.src = e.srcElement.src;
    image.style.margin = 'auto';
    imageBig.appendChild(image);

    imageBig.style.display = displayStyle.block;
}

const closeImage = (e) => {
    const imageBig = element("imageBig");
    imageBig.removeChild(imageBig.childNodes[imageBig.childNodes.length - 1]);
    imageBig.style.display = displayStyle.none;
}

const init = () => {
    const navbar = element("navbar");
    navbar.onclick = clickTab;

    const buttonCloseImage = element("buttonCloseImage");
    buttonCloseImage.onclick = closeImage;

    loadFirstTab();

    const images = document.querySelectorAll('img');
    images.forEach(image => { 
        image.onclick = clickImage;
    });
}

window.onload = init;
