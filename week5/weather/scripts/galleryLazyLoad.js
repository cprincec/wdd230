const images = document.querySelectorAll("img[data-src]");

//function to load the main image 
// by changomg the src to data-src
// then remove the data-src attribute.
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 5px 0px"
};

// // Call the loadimages function on all images with the data-src attribute.
// images.forEach((image) => {
//     loadImages(image);
// });

//LOAD ON DEMAND using Intersection Observer.
//First check if the Intersection observer is supported.
if ("IntersectionObserver" in window)   {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) =>  {
            if (entry.isIntersecting)   {
                loadImages(entry.target);
                observer.unobserve(entry.target);  
            }
        });
    }, imgOptions);

    //observe each image and load upon intersection.
    images.forEach((image) =>    {
        observer.observe(image);   
    });
}
//load images normally if intersection observer is not supported.
else    {
    images.forEach((image) => {
        loadImages(image);
    });
}
