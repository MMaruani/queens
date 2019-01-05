

import React from 'react'

const QueensRules = () => (
  <div  className="rules">
 
  <p>Est-il possible de placer 8 reines sur l'échiquier sans qu'elles n'entrent en conflit ?
  </p><p> Ce problème a été posé par Carl Friedrich Gauss en 1842.
  </p><p>   La réponse est oui. Il avait trouvé à l'époque 72 solutions, l'algorythmie permet aujourd'hui d'en trouver 92, vraiment distinctes, c'est à dire sans compter les solutions symétriques, loorsqu'on tourne l'échiquier par exemple.
  </p><p>   Voici un échiquier permettant de s'amuser à placer les 8 reines.
  </p><p>   Dès qu'elles entrent en conflit, les cases se bordent de rouge.
  </p><p className="center">-----------------------------
   </p><p> L'échiquier est codé en React.
   </p><p>  Pour répondre à mon ami Fred qui m'a soumis l'idée, et vérifier que le code était écrit de façon évolutive, j'ai étendu le jeu aux fous, aux tours et aux cavaliers.
    
   </p><p> Pour info, une reine entre en conflit avec  les pièces de l'échiquier qui sont sur la même ligne, même colonne, ou même diagonale.
   

   </p><hr/><p> Is it possible to place 8 queens on the chessboard without them conflicting?
   </p><p>  This problem was posed by Carl Friedrich Gauss in 1842.
   </p><p>  The answer is yes. He had found at the time 72 solutions, the algorithm allows today to find 92, really distinct, ie without counting the symmetrical solutions, when one turns the chessboard, as an example.
   </p><p>  Here is a chessboard for fun to place the 8 queens.
   </p><p> As soon as they come into conflict, the boxes are bordered with red.
   </p><p className="center">-----------------------------
   </p><p> The chessboard is coded in React.
   </p><p>  To answer my friend Fred who exposed me the idea, and check that the code was written in an evolutionary way, I extended the game to bishops, rocks and knights.
   </p><p>  For information, a queen conflicts with the pieces of the chessboard that are on the same line, same column, or same diagonal.
  </p>
  </div>
)

export default QueensRules
