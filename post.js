let posts = [
    {
        name: "Title 1",
        image: "https://picsum.photos/id/1/500/300"
    },
    {
        name: "Title 2",
        image: "https://picsum.photos/id/2/500/300"
    },
    {
        name: "Title 3",
        image: "https://picsum.photos/id/3/500/300"
    }
];


const container = document.getElementById('post-container');

posts.forEach(function(post) {

    let divElement = document.createElement('div'); // Div Element (Parent Element)
    divElement.classList.add('card');
    divElement.classList.add('mx-5');
    divElement.classList.add('my-5');
    divElement.classList.add('px-5');
    divElement.classList.add('py-5');
    
    let titleElement = document.createElement('h1');  // H1 Element
    titleElement.innerText = post.name;

    let imageElement = document.createElement('img');  // Image Element
    imageElement.src = post.image;

    divElement.append(titleElement);
    divElement.append(imageElement);

    container.append(divElement);

    
});