const swiperWrapper = document.querySelector('.swiper-wrapper-job');
const containerJob = document.querySelector('.container-4-job--container');


function showJobOffers (container, jobOffersJSON, forSwiper=false) {
 // Function renders all of the job offers from JSON file on the Job Section
 // @container  [type: nodeElement][put the container where this function should pass the job offers
 // @jobOffers  [type: JSON] [put the JSON file with the job offers]

 
    const jobOffersNodes = composeJobOffer(jobOffersJSON, forSwiper);
    

    for (let i = 0; i < jobOffersNodes.length; i++) {
        if (container.classList.contains('container-4-job--container') && i == 3) {
            break;
        }
        container.insertAdjacentHTML('beforeend', jobOffersNodes[i]);
    }
}

function composeJobOffer(jobOffersJSON, slider) {
    // This function takes a JSON file with the job offers and 'slider' variable which is a boolean and return an html code with job offer
    
    // getting job offers from json file
    const jobOffers = JSON.parse(jobOffersJSON);
    // create an empty array for job offer html template
    const jobOfferNodes = [];
    for( let i = 0 , k = 1; i < jobOffers.length; i++, k++ ) {
        k = k == 4 && i < jobOffers.length ? 1 : k;

        // getting the title, city and url related to each job offer
        const jobOfferTitle = jobOffers[i].title;
        const jobOfferCity = jobOffers[i].city;
        const jobOfferUrl = jobOffers[i].url;

        // Each job offer html template has an svg shape inside
        // Shape fill color chages depends on class
        const shapeColorClass = `cls-${k}`;

        // Parameter 'slider' has to have boolean value, if true, then 'job offer' container will be wrapped in an extra 'swiper-slide' container to render inside of SwiperJS container
        
        if (slider) {
            let jobOffer = `
                <div class="swiper-slide swiper-slide-job">
                    <div class="container-4-job">
                        <div class="container-4-job--title">${jobOfferTitle}</div>
                        <div class="container-4-job--location">${jobOfferCity}</div>
                        <a href="${jobOfferUrl}" class="container-4-job--button btn-more">Więcej<i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="285" viewBox="0 0 300 300">
                            <defs>
                            </defs>
                            <path id="COLOR_SHAPE" data-name="COLOR SHAPE" class="${shapeColorClass}" d="M868.43,2247.68H724.205c0,81.58-69.738,147.71-155.763,147.71v136.76C734.121,2532.15,868.43,2404.79,868.43,2247.68Z" transform="translate(-568.438 -2247.69)"/>
                        </svg>
                    </div>
                </div>`;

            jobOfferNodes.push(jobOffer);
        } else {
            let jobOffer = `
                <div class="container-4-job">
                    <div class="container-4-job--title">${jobOfferTitle}</div>
                    <div class="container-4-job--location">${jobOfferCity}</div>
                    <a href="${jobOfferUrl}" class="container-4-job--button btn-more">Więcej<i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="285" viewBox="0 0 300 300">
                        <defs>
                        </defs>
                        <path id="COLOR_SHAPE" data-name="COLOR SHAPE" class="${shapeColorClass}" d="M868.43,2247.68H724.205c0,81.58-69.738,147.71-155.763,147.71v136.76C734.121,2532.15,868.43,2404.79,868.43,2247.68Z" transform="translate(-568.438 -2247.69)"/>
                    </svg>
                </div>`;

            jobOfferNodes.push(jobOffer);
        }
        
    }

    return jobOfferNodes;
}


// Render job offers container when document is loaded       
document.addEventListener('DOMContentLoaded', () => {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const json = this.responseText;

            if (window.innerWidth <= 749 ) {
                containerJob.innerHTML = '';
                showJobOffers(containerJob, json)
            } else if (window.innerWidth >= 750 && window.innerWidth <= 1349) {
                swiperWrapper.innerHTML = '';
                showJobOffers(swiperWrapper, json, true)
            } else if (window.innerWidth >= 1350) {
                containerJob.innerHTML = '';
                showJobOffers(containerJob, json)
            }
        }
    }

    xmlHttp.open('GET', '../../jobOffers.json', true);
    xmlHttp.send();
});


// Re-render job offers container when window is resized
window.addEventListener('resize', () => {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const json = this.responseText;

            if (window.innerWidth <= 749 ) {
                containerJob.innerHTML = '';
                showJobOffers(containerJob, json)
            } else if (window.innerWidth >= 750 && window.innerWidth <= 1349) {
                swiperWrapper.innerHTML = '';
                showJobOffers(swiperWrapper, json, true)
            } else if (window.innerWidth >= 1350) {
                containerJob.innerHTML = '';
                showJobOffers(containerJob, json)
            }
        }
    }

    xmlHttp.open('GET', '../../jobOffers.json', true);
    xmlHttp.send();
});
