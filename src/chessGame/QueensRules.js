

import React from 'react'

const QueensRules = () => (
  <div  className="rules">

  <p>Est-il possible de placer 8 reines sur l'échiquier sans qu'elles n'entrent en conflit ?
  </p><p> La réponse est oui. Il y a 12 solutions vraiment distinctes, 92 si on les transforme par symétrie, ou rotation.
  </p><p> Voici un échiquier permettant de s'amuser à placer les 8 reines.
  <br />  Cliquer sur une case permet d'afficher/supprimer une reine
  <br />  Dès qu'elles entrent en conflit, les cases se bordent de rouge.
  <br />  ∅ : rétablir | ⦠ réveler les cases vides en conflit | s : solution aléatoire
  </p><p><em> Une reine entre en conflit avec les pièces de l'échiquier qui sont sur la même ligne, même colonne, ou même diagonale.</em>
  
  </p><p> J'ai étendu le jeu aux fous, aux tours et aux cavaliers.
  </p><p className="center">-----------------------------
  </p><p> Is it possible to place 8 queens on the chessboard without them conflicting?
   </p><p>  The answer is yes. There are 12 distinct solutions, 92 counting the derivative solutions obtained by symmetry or rotation.
   </p><p>  Here is a chessboard allowing to place the 8 queens.
   <br/>   Click on a squares to display/remove queens.
   <br/> As soon as they come into conflict, the boxes are bordered with red.
   <br />  ∅ reset | ⦠ mark/unmark conflictuous empty squares | s : random solution
   </p><p><em>A queen conflicts with the pieces of the chessboard that are on the same line, same column, or same diagonal.</em>
   </p><p> I extended the game to bishops, rocks and knights.
   </p>
  </div>
)

export default QueensRules
