import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  p, h1, h2, h3, h4 {
    font-family: Dakdo;
  }

  #section1 {
    height: 300px;
    background-image: url("/images/section1bg.png");
    text-align: center;

  }

  #section1text {
    margin-top: 60px;
  }

  #section2 {
    height: 300px;
  }

  #pizzaCards {
    min-height: 270px;

    @media only screen and (max-width: 600px) {
      min-height: 320px;
    }
  }

  #pizzaSelectionDescription {
    background-image: url("/images/section1bg.png")
  }

  #toppingCheckbox {
    opacity: 1 !important;
  }

  .topping-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center left;
    place-content: start;
    height: 60px;
    margin: 5px 0 10px;

    div {
      font-size: 0.8em;
    }

    @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .card-content {
    padding: 10px !important;
  }

  #collectedBtn, #deleteBtn {
    margin: 5px;
    min-width: 90px;
  }

  .admin-list {
    height: 400px;
    overflow-y: hidden;

    :hover {
      overflow-y: overlay;
    }
  #navBtn1, #navBtn2 {
    margin: 5px;
  }

  #icon-section {
    margin-top: 50px;
  }

  #textsection {
    min-height: 500px;
    width: 100%;
    background-image: url("https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png");
  }
`

export default GlobalStyle
