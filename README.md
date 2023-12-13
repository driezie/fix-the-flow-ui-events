# Fix the Flow - UI Events

![Website Screenshot](https://github.com/driezie/fix-the-flow-ui-events/assets/80174866/d22ca363-c897-4e83-96d1-38e91b28ce3f)

[live link website](https://driezie.github.io/fix-the-flow-ui-events/)

## Intro

In deze opdracht heb ik diverse UI-elementen gemaakt met verschillende interacties. Ik heb gebruik gemaakt van verschillende soorten knoppen en gebeurtenissen om de gebruikerservaring te verbeteren. Hier zijn de interacties die zijn geïmplementeerd:

- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `keypress`
- `blur`
- `load`
- `scroll`
- `touchstart`
- `touchend`

Het doel was om verschillende animaties te creëren voor elk element, waardoor een gevarieerde en boeiende gebruikerservaring ontstaat.

> "Als gebruiker wil ik verschillende element-animaties hebben voor elke knop met een functie."

## WiFi Interactie

### Analyseren

Voor de WiFi-interactie heb ik nagedacht over hoe ik gebruikers bewust kon maken van WiFi-gerelateerde gebeurtenissen. Ik koos voor een interactie die wordt geactiveerd bij `click`, `dblclick`, `mousedown`, `mouseup`, `keypress`, `blur`, `load`, `scroll`, `touchstart` en als laatste `touchend`.

### Ontwerpen

Het ontwerpen hoefde niet heel erg omdat de de knoppen al hadden die we konden animeren. We hebben een totaal van 20 knoppen gemaakt en heb er 10 gemaakt.

### Bouwen

In het JavaScript-bestand heb ik alle knop elementen geselecteerd en nieuwe events toegevoegd voor de element-functies in de lijst in. Vervolgens heb ik voor elke knop een unieke animatie toegevoegd.

Hier zie je een voorbeeld voor 1 van de knoppen die ik heb gemaakt

> Javascript
```javascript
const frontend = document.querySelector('a:nth-child(1)');

// Start button {frontend}
frontend.addEventListener('click', colorchange)
frontend.addEventListener('animationend', colorchange)

function colorchange() {
  frontend.classList.toggle('colorchange')
}
// end button {frontend}
```

> CSS
```css
a:nth-of-type(12) {
  position: relative;
  background: var(--highlight-secondary);
  color: var(--secondary);
  border-color: var(--secondary);
}

.colorchange {
  animation-name: colorchange;
  animation-timing-function: ease-in-out;
  animation-duration: 1.2s;
  animation-iteration-count: 1;
}

@keyframes colorchange {
  25% {
    background: var(--highlight-secondary);
    color: var(--secondary);
    border-color: var(--secondary);
  }

  50% {
    background: var(--highlight-primary);
    color: var(--primary);
    border-color: var(--primary);
  }

  75% {
    background: var(--highlight-secondary);
    color: var(--secondary);
    border-color: var(--secondary);
  }

  100% {
    background: inherit;
    color: inherit;
    border-color: inherit;
  }
}

```

> HTML
```html
<a href="#frontend">Frontend</a>
```

Dit is 1 van mijn voorbeelden die ik heb gemaakt. De rest kan je allemaal bekijken op [deze website](https://driezie.github.io/fix-the-flow-ui-events/)
