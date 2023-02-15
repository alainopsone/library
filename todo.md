- Ajouter un loader dans la card d'un livre ajouté avant d'afficher son contenu

- Créer une classe Book et extraire tout ce qui concerne le contenu dedans

- Ajouter un validateur sur le champs "Auteur", il doit être composé de deux mots séparés par un espace et doit contenir 3 caractères minimum. Cela doit afficher un message d'erreur. Le livre ne doit pas s'ajouter tant que le champs n'est pas correct.

- Ajouter un bouton d'édition à côté de chacun des attributs d'un livre. Au clic, cela remplace le texte par un champs prérempli avec la valeur actuelle. Au submit du champs, cela affiche la nouvelle valeur. Faire attention à bien respecter les validateurs du champs "Auteur". Pour le champs "Read", afficher plutôt un bouton.

- L'ajout ou l'édition d'un livre met à jour le fichier JSON. En cas de problème, plutôt mettre à jour un objet/tableau dans "Library.js". L'objet est contruit lors du fetch.

- Trier par ordre alphabétique la liste par titre