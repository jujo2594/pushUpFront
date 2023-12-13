## STARBUCKS FRONTEND



Se creo una interfaz para la pagina de starbucks usando, html, css, javascript y bootstrap dando interactividad la pagina. Se realizaron hipervinculos a la pagina de starbuck para diferentes opciones

#### Barra de Navegacion:

Se incluira el codigo de determinadas partes del codigo:

```HTML
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-principal">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./images/logo.png" alt="Starbucks" width="70vw" height="70vw">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse sub-menu" id="navbarNav">
                <span class="nav-item inicio"><a class="nav-link" href="#">Inicio</a></span>
                <span class="nav-item"><a class="nav-link" href="https://www.starbucks.com.co/menu">Menu</Menu></a></span>
                <span class="nav-item"><a class="nav-link" href="https://www.starbucks.com.co/seccion/novedades">Novedades</a></span>
                <span class="nav-item"><a class="nav-link" href="https://www.starbucks.com.co/stores">Contacto</a></span>
            </div>
        </div>
    </nav>
```

```css
.container-fluid{
    justify-content: space-between;
}

.nav-principal{
    padding: 1.5vw 5vw 1.5vw 5vw;
    background-color: #fff !important;
}

.sub-menu{
    padding-left: 50vw ;
    display: flex;
    justify-content: space-evenly;
}
```

#### Pagina principal:

Pagina principal donde se presentan los productos distinguidos de starbucks

```html
<div class="carousel-item active">
                <div class="presentation">
                    <div class="text">
                        <h3 class="title">It's not just Coffe</h3>
                        <h3 class="title">It's <span>Starbucks</span></h3>
                        <p class="decription">Since 1971, it always be about quality. We're passionate about it ethicaly
                            sourcing only the finest Arabic coffe beans and roasting them with great care. Our passion
                            for coffe is rivaled only by our love for sharing it</p>
                    </div>
                    <img src="images/img1.png" class="first-Product" alt="first-Product">
                </div>
            </div>
```

```css
.presentation{
    display: flex;
    align-items: center;
    padding-left: 7vw;
}

.text{
    width: 50vw;
}

.text > p{
    width: 40vw;
}

.title{
    font-size: 4vw;
}

.title >span{
    font-weight: bolder;
    color: #017043;
}

.first-Product, .second-Product, .third-Product{
    padding-top: 2vw;
    width: 30vw !important;
    height: 40vw;
}

.carousel-indicators{
    margin: 0;
    width: 70vw;
    height: 10vw;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.thumb1, .thumb2, .thumb3{
    height: 8vw !important;
    width: 6vw !important;
    background-color: transparent !important;
}
```

