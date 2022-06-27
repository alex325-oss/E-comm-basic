const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer link">t-shirts</a></li>
            <li><a href="#" class="footer link">sweatshirts</a></li>
            <li><a href="#" class="footer link">shirts</a></li>
            <li><a href="#" class="footer link">jeans</a></li>
            <li><a href="#" class="footer link">trousers</a></li>
            <li><a href="#" class="footer link">shoes</a></li>
            <li><a href="#" class="footer link">casuals</a></li>
            <li><a href="#" class="footer link">Formals</a></li>
            <li><a href="#" class="footer link">sports</a></li>
            <li><a href="#" class="footer link">wacth</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer link">t-shirts</a></li>
            <li><a href="#" class="footer link">sweatshirts</a></li>
            <li><a href="#" class="footer link">shirts</a></li>
            <li><a href="#" class="footer link">jeans</a></li>
            <li><a href="#" class="footer link">trousers</a></li>
            <li><a href="#" class="footer link">shoes</a></li>
            <li><a href="#" class="footer link">casuals</a></li>
            <li><a href="#" class="footer link">Formals</a></li>
            <li><a href="#" class="footer link">sports</a></li>
            <li><a href="#" class="footer link">wacth</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat fuga eveniet, illum iure vel enim, repellendus ad eos nostrum harum sequi nemo alias modi! Ex, eius dolores illo, numquam amet est aspernatur harum nostrum labore, doloribus explicabo odit libero dignissimos corporis consequuntur consequatur maxime ad hic delectus qui? Iste, maxime enim! Iure officiis minima tempore fugiat labore delectus odit dicta magnam molestiae. Dicta quia omnis sint mollitia nobis! Dicta est rerum consequatur doloribus sapiente modi consectetur qui omnis repellat, culpa molestiae accusantium repellendus quia quam! Praesentium, reiciendis illo nisi voluptate sed magni sit. Illo molestiae inventore dolore sit consequatur?</p>
    <p class="info">support emails - help@Clothing.com, custumersuppote@Clothing.com</p>
    <p class="info"> telephone - 180 00 00 00, 180 000 00 00</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing, besting apperels Online store </p>
     `;
}

createFooter();