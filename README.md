
## Dev Setup

### To run locally

```
npm install
npm start
```

En option, lancer les tests :

```
npm run test
```

### To deploy to github pages 

```
npm run deploy
```

## Exemples

Une démonstration est disponible ici : https://licarth.github.io/react-timeline/

## Démarche Algorithmique

J'ai choisi de faire un algorithme assez simple, greedy, en `O(nlog(n))`. Cette complexité vient du fait que je trie les événements par leur date de début au début de l'algo.

L'esprit de l'algorithme est le suivant :

1. On trie les événements par date de début.
1. On essaye de les faire rentrer 1 par 1 dans la frise, en commencant pas en haut. S'il rentre, on l'y place, s'il chevauche un autre événement sur cette ligne, on passe à la ligne d'en dessous. S'il ne rentre dans aucune des lignes existantes, on créée une nouvelle ligne et on l'y ajoute.
A chaque fois qu'on place un événément, on prend soin de regarder s'il chevauche un événément précédemment placé. Car si ce n'est pas le cas, alors on peut utiliser tout l'espace de la frise, de nouveau.
1. Lorsque tous les éléments sont placés, on les parcourt de nouveau pour créer des groupes (en réalité dans l'algo final je le fais en même temps que l'étape précedente). Des événements au sein d'un même groupe seront représentés avec des hauteurs égales.

Cet algorithme semble assez intelligent pour le genre de représentations qu'on est amenés à faire. Au niveau complexité, l'étape limitante est le tri initial. Tout le reste est en complexité temporelle linéaire du nombre d'événements à placer sur la frise.

## Web / Technos Frontend
J'ai essayé de me concentrer sur la partie horizontale du problème dnas le Javascript. Je suis bien obligé d'indiquer la largeur des événements moi-même. J'ai fait ça avec des pourcentages de façon à ce que la frise soit responsive sur la dimension horizontale.

Pour la dimension verticale, j'ai considéré les concepts CSS3 `FlexBox` et `Grid`. J'ai finalement opté pour `Grid`. Pour chaque événement, le composant React `TimeBox` prend pour paramètres, dans le plan vertical, la longieur de la grille sur laquelle il doit être placé, et sur quelle ligne il doit apparaitre. CSS se charge de calculer les dimensions dans le plan vertical, à partir des contraintes de 270px données dans l'énoncé.

Dans le plan horizontal, la librairie `moment` m'aide à calculer l'équivalent d'un moins en pourcentages de place dispobible. Les graduations et les boites utilisent cette même valeur pour le rendu.

## Peut être amélioré
### La gestion de l'overflow dans les titres
Actuellement les longs titres vont sortir de la box. Seul `:hover` fait apparaitre toute la box.